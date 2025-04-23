//Sasta Calculator
let userInput;
do{
    let num1 = Number(prompt("enter first number:"));
    let num2 = Number(prompt("enter second number:"));
    let operator = prompt("enter the operator +,- ,/,*:");
    switch(operator){
        case "+":
            console.log("Addition"+ (num1+num2));
            break;
        case "-":
            console.log("substraction"+ (num1-num2));
            break;
        case "*":
            console.log("multiply"+ (num1*num2));
            break;
        case "/":
            if(num2!=0) console.log("divide" + (num1/num2));
            break;
        default:
            console.log("Invalid operator");
    }
userInput = prompt("do u want to continue yes/no ?").toLowerCase();
userInput(userInput);
}while(userInput == "y")