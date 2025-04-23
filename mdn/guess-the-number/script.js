let randomNumber = Math.floor(Math.random()*100)+1;

const guess = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const loworHi = document.querySelector(".loworHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;


function checkGuess(){
    const userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations! YOu  got it right";
        lastResult.style.backgroundColor = "green";
        loworHi.textContent = "";
        SetGameOver();
    }else if(guessCounnt === 10){
        lastResult.textContent = "! ! ! Game Over ! ! !";
        loworHi.textContent = "";
        SetGameOver();
 
    }else{
        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            loworHi.textContent = "last guess was too low!";
        }else if(userGuess > randomNumber){
            loworHi.textContent = "last guess was too hight!";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuess);

function SetGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.textContent = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame)
}
function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  