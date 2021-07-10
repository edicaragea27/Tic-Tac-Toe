document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.container div')
    let playerDisplay=document.querySelector('#player')

    let thePlayer ="playerX";
    squares.forEach(square =>{
        square.addEventListener('click', myFunction)
    })
function myFunction(n){
    let squareArray=Array.from(squares)
    let index =squareArray.indexOf(n.target)
    
    playerDisplay.innerHTML= thePlayer;


    if(thePlayer==='playerX'){
        
        squares[index].classList.add('playerX')
        thePlayer='playerO';

    }else{

        squares[index].classList.add('playerO')
        thePlayer='playerX';
  
    }

}


})