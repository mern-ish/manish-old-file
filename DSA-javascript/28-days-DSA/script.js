console.log(Math.ceil(10.04));
console.log(Math.floor(10.4));
console.log(Math.round(10.9));
console.log(Math.abs(-10.9));
console.log(Math.trunc(10.934567745));
console.log(Math.pow(10,2));//10^2
console.log(Math.sqrt(144));
console.log(Math.cbrt(8));
console.log(Math.max(8,3,5,7,1,4,8,9));
console.log(Math.min(8,3,5,7,1,4,8,9));
let a = 33423489.34233434
// console.log(a.toFixed(1));
let b = Math.random() *1000;

console.log(Number(b.toFixed()));

console.log("question");


//calculate Compound interest 
// let p = Number(prompt("enter principle:"));
// let r = Number(prompt("enter rate:"));
// let t = Number(prompt("enter the time:"));

// let A =p*Math.pow(1+r/100,t);
// let compIntr = A-p;
// console.log(compIntr);

console.log("otp");
//Generate OTP
let otp = Math.random() * 10000 +1000;
let newotp = Math.trunc(otp);
console.log(otp);
console.log(newotp);


console.log("Area of triangle");
//Area of triangle by Heron's formula
// let A = Number(prompt("enter side A:"));
// let B = Number(prompt("enter side B:"));
// let C = Number(prompt("enter side C:"));

// let s = (A+B+C)/2;
// console.log(s);
// if(A+B<=C || B+C<=A || C+A<=B){
//     console.log("invalid triangle");
// }else{
//     let area = Math.sqrt((s*(s-A)*(s-B)*(s-C)));
//     console.log(area);

// }


//IF-ELSE
//accept two number and print the greatest between them.
// let num1 = Number(prompt("enter first number:"));
// let num2 = Number(prompt("enter second number:"));

//  if(num1 > num2){
//     console.log(`${num1} is greatest than ${num2}`);
//  }else{
//     console.log(`${num2} is greatest than ${num1}`)
//  }


//Accept an integer and check whether it is an even number or odd.

// let intNum = Number(prompt("enter an Number:"));
// if(intNum%2==0){
//     console.log(`${intNum} is even number`);
// }else{
//     console.log(`${intNum} is odd number`);
// }


//Accept name and age from the user.check if the user is a valid voter or not.

let name = prompt("enter name:");
let age = Number(prompt("enter age:"));
if(age>=18){
    console.log("U are eligible voter.");
}else{
    console.warn(" Age Restriction")
}



