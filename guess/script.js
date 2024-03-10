const randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultapsras')
const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true

if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
    
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number')
        
    }
    else if(guess<1){
        alert('Please Enter a Valid Number')
    }
    else if(guess>100){
        alert('Please Enter a Valid Number')
    }
    else{
        prevGuess.push(guess)
        if (numGuess===11) {
            displayGuess(guess)
            displayMessage('game over')
            endGame()
            
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

    
}

function checkGuess(guess){
    if (guess===randomNumber) {
        displayMessage('you gussed it right')
        endGame()
        
    }
    else if(guess<randomNumber){
        displayMessage('number is too low')

    }
    else if(guess>randomNumber){
        displayMessage('number is too high')

    }

}

function displayGuess(guess){
    userInput.value-''
    guessSlot.innerHTML+=`${guess}`
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabeled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id=" newgame">start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    newgame()
}
function newgame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}