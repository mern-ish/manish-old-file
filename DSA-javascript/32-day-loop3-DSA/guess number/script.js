//guess the number

let num  = Math.floor(Math.random()*100+1);
console.log(num);
let userInput;
let count = 0;
do{
    userInput = Number(prompt("Guess the number:"));;
    count++;
    if(count == 5){
        window.alert("out of limit");
        break;
    }

    if(isNaN(userInput) || userInput>100 ||userInput<0){
        console.log("please enter valid number:");
        continue;
    }
    if(userInput>num) console.log("too high ,try again");
    else if(userInput< num) console.log("too low ,try again");
    else console.log("congrats 🎉🍾🎉");

}while(userInput !== num)