// 1.Age Category Message – Ask the user for their age. If they are
// under 18, print “You are a minor.” If they are between 18 and 60,
// print “You are an adult.” If they are above 60, print “You are a
// senior citizen.”

// 2. Even or Odd Sum – Take two numbers from the user using
// prompt(). If the sum of both numbers is even, print “Even Sum”;
// otherwise, print “Odd Sum.”

// 3. Character Case Checker – Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

// 4. Largest of Three Numbers – Take three numbers as input and
// print the largest number among them without using
// Math.max().

// 5. Leap Year Checker – Ask the user for a year and determine if
// it's a leap year or not.

// 6.Simple Calculator – Ask the user for two numbers and an
// operator (+, -, *, /). Perform the operation and display the result.

// 7. Positive, Negative, or Zero – Take a number input and check if it
// is positive, negative, or zero.

// 8.User Greeting – Ask for the user's name and time (24-hour
// format). Greet them accordingly:
// 5 AM–12 PM: "Good Morning, [Name]!"
// 12 PM–5 PM: "Good Afternoon, [Name]!"
// 5 PM–9 PM: "Good Evening, [Name]!"
// 9 PM–5 AM: "Good Night, [Name]!"

// 9. Traffic Light System – Ask the user for a traffic light color (red,
//     yellow, green). Print appropriate messages:    
//     Red: "Stop!"   
//     Yellow: "Get Ready!"   
//     Green: "Go!"

// 10. Multiplication Table – Ask the user for a number and print its
//     multiplication table up to 10.

// 11. Grade Calculator – Ask the user for their marks (0-100).
// Assign grades based on the range:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// 12.Simple Login System – Set a predefined username and
// password. Ask the user to enter their credentials using
// prompt(). If correct, print “Login Successful”; otherwise, print
// “Incorrect username or password.”


// 13.Swapping Without Third Variable – Take two numbers from the
// user and swap their values without using a third variable.

// 14.FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a
// multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if
// only 5, print “Buzz”; otherwise, print the number itself.

// 15. Number Reversal – Take a three-digit number from the user
// and print its reverse. (Example: 123 → 321).

var userQ = Number(prompt("Enter a question number"));
switch(userQ){
    case 1:
        let age = Number(prompt("Enter your age:"));
        if(age < 18){
            console.log("You are a minor.");
        }else if(age >= 18 && age <=60 ){
            console.log("You are an adult.");
        }else{
            console.log("You are a senior citizen. ")
        }
    break;
    case 2:
        let num1 = Number(prompt("enter the firsr number :"));
        let num2 = Number(prompt("Enter the second number :"));
        let sum = num1 + num2;
        if(sum % 2 ==0){
            console.log("Even Sum");
        }else{
            console.log("Odd sum");
        }
        break;

    case 3:
        let char = prompt("Enter a character :");
        if(char >= "A"){
            if(char <= "Z"){
                console.log("upper Case");
            }else if (char >= "a"){
                if(char <= "z"){
                    console.log("Lower Case");
                }else{
                    console.log( "brackets");
                }
            }else{
                console.log("braces");
            }
        }else{
            console.log("special symbol");
        }

    break;

    case 4:


    break;

    case 5:
        let year = Number(prompt("Enter the year :"));
        if((year % 4 ==0 && year % 100 ==0) || (year % 400 ==0)){
            console.log(`${year} is Leap year`);
        }else{
            console.log(`${year} is not leap year`);
        }
    break;

    case 6:
        var opt_a = Number(prompt("Enter a first number:"));
        var opt_b= Number(prompt("Enter a second number"));
        var oper = prompt ("Enter + ,- ,*,/  ");
        switch(oper){
            case "+":
                console.log(opt_a + opt_b);
            break;
            case "-":
                console.log(opt_a - opt_b);
            break;
            case "*":
                console.log(opt_a * opt_b);
            break;
            case "/":
                console.log(opt_a / opt_b);
            break;
        }
        break;

    case 7:
        var digit = Number(prompt("Enter a number"));
        if(digit > 0){
            console.log("Positive number");
        }else if(digit < 0){
            console.log("Negative number");
        }else{
            console.log("Zero");
        }
    break;

    case 8:
        var user_name = prompt("Enter your name :");
        var date = prompt("enter date in 24-format");
        if(date >= 5 && date <= 12){
            console.log(`Good Morning ${user_name}`);
        }else if(date > 12 && date <= 17){
            console.log(`Good Afernoon ${user_name}`);
        }else if(date >17 && date < 21){
            console.log(`Good Evening ${user_name}`);
        }else{
            console.log(`Good night ${user_name}`);
        }
    break;

    case 9:
        let tra_light = prompt("Enter the traffic color :");
        switch(tra_light){
            case "red":
                console.log("Stop!");
            break;
            case "green":
                console.log("Get Ready!");
            break;
            case "yellow":
                console.log("Go!");
            break;
        }
    
        break;

    case 10:
        let mult_tabel = Number(prompt("Enter the number :"));
        for(let i = 1;i <= 10; i++){
            console.log(`${i}*${mult_tabel}=${i*mult_tabel}`);
        }
    break;

    case 11:
        let user_marks = Number(prompt("Enter the marks :"));
        if(user_marks >= 90 && user_marks <= 100){
            console.log("Grade A");
        }else if(user_marks >= 80 && user_marks < 90){
            console.log("Grade B");
        }else if(user_marks >= 70 && user_marks < 80){
            console.log("Grade C");
        }else if(user_marks >= 60 && user_marks < 70){
            console.log("Grade D");
        }else if(user_marks >= 0 && user_marks < 60){
            console.log("Grade F");
        }else{
            console.log("please enter correct marks");
        }
    break ;

    case 12:
        const userName = "Manish@11629";
        const password = "11629";
        let user_Name = prompt("Enter the user name:");
        if(userName === user_Name){
            let pass_word = prompt("enter your password:");
            if(password === pass_word){
                console.log("Login Successful");
            }else{
                console.log("Incorrect password");
            }
        }else{
            console.log("Incorrect username");
        }
    break;

    case 13:
        let a = Number(prompt("Enter  first number:"));
        let b = Number(prompt("enter second number:"));
        console.log(`a = ${a}`);
        console.log(`b = ${b}`);
        // c = a;
        // a = b;
        // b = c;   using variable

        a = a + b;
        b = a - b;
        a = a - b;

        console.log(`a = ${a}`);
        console.log(`b = ${b}`);

    break;

    case 14 :
        let num_digit = Number(prompt("Enter a number"));
        if(num_digit % 3 ==0){
            if(num_digit % 5 ==0){
                console.log("FizzBuzz");
            }else{
                console.log("Fizz");
            }
        }else if(num_digit % 5 == 0 ){
            if(num_digit % 3 == 0){
                console.log("FizzBuzz");
            }else{
                console.log("Buzz");
            }
        }else {
            console.log("Not multiple of 3 and 5");
        }
    break;






}