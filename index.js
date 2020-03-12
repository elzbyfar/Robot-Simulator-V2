let moveButton = document.getElementById('move-button')
let movesList = document.getElementById("moves-container")


document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  let timer;
  
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

  moveButton.addEventListener('click', function(event){
    function makeMoves() {
      if (document.querySelector('li')){
        let print = document.querySelector('li')
        move(print.innerText)
        print.remove()
      }
    }
    
    if (document.querySelector('li')) {
      timer = setInterval(makeMoves, 500)
    } 
    // if (!document.querySelector('li')){
    //   clearInterval(timer)
    // }
  })
})
