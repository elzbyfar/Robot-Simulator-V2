document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  let moveButton = document.getElementById('move-button')
  let movesList = document.getElementById("moves-container")
  let timer;
  
  document.addEventListener("keydown", function(event){
    let li = document.createElement('li')
    if (event.keyCode === 37) {
      li.innerText = "left"
      movesList.appendChild(li)
    } else if (event.keyCode === 38) {
      li.innerText = "up"
      movesList.appendChild(li)
    } else if (event.keyCode === 39) {
      li.innerText = "right"
      movesList.appendChild(li)
    } else if (event.keyCode === 40) {
      li.innerText = "down"
      movesList.appendChild(li)
    } else if (event.keyCode === 8) {
      let allMoves = Array.from(movesList.childNodes)
      allMoves.pop().remove()
    } else {
      alert("Tell me how to move!")
    }
  })

  moveButton.addEventListener('click', function(event){
    if (document.querySelector('li')) {
      timer = setInterval(makeMoves, 500)
    } 
  })

  function makeMoves() {
    if (document.querySelector('li')){
      let action = document.querySelector('li')
      move(action.innerText)
      action.remove()
    } else {
      clearInterval(timer)
    }
  }
})
