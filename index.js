let moveButton = document.getElementById('move-button')
let movesList = document.getElementById("moves-container")


document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  
  document.addEventListener("keydown", function(event){
    if (event.keyCode === 37) {
      let li = document.createElement('li')
      li.innerText = "left"
      movesList.appendChild(li)
    }
    
    if (event.keyCode === 38) {
      let li = document.createElement('li')
      li.innerText = "up"
      movesList.appendChild(li)
    }

    if (event.keyCode === 39) {
      let li = document.createElement('li')
      li.innerText = "right"
      movesList.appendChild(li)
    }

    if (event.keyCode === 40) {
      let li = document.createElement('li')
      li.innerText = "down"
      movesList.appendChild(li)
    }

    if (event.keyCode === 8) {
      let allMoves = Array.from(movesList.childNodes)
      allMoves.pop().remove()
    }
  })

  document.addEventListener('click', function(event){
    let allMoves = Array.from(movesList.childNodes)

    function makeMoves() {
      move(allMoves[0].innerText);
      allMoves.shift().remove();
    }

    if (allMoves.length > 0) {
      window.setInterval(makeMoves, 500)
    } else {
      clearInterval(makeMoves)
    }
  })
})
