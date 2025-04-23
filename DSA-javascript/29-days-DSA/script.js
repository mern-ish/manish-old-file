//Accept three number and print the greatest among them.

// let a = Number(prompt("enter number:"));
// let b = Number(prompt("enter number:"));
// let c = Number(prompt("enter number:"));

// if(a>b && a>c){
//     console.log(`${a} is greatest than ${b} and ${c}`);
// }else if(b>a && b>c){
//     console.log(`${b} is greatest than ${a} and ${c}`);
// }else {
//     console.log(`${c} is greatest than ${b} and ${a}`);
// }

//Accept a year and check if it a leap year or not.

// let year = Number(prompt("enter a year:"));
// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     console.log(`${year} is a laep year`);
// }else{
//     console.log(`${year} is not a leap year`);
// }

// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("leap year");
//         }
//     }else{
//         console.log("leap year");
//     }
// }else{
//     console.log("not leap year")
// }


//Shop Discount

// let amount = Number(prompt("enter the amount:"));

// if(amount >=0 && amount <=5000){
//     console.log(amount);
// }else if(amount >5000 && amount <= 7000){
//     console.log(amount -((amount*5)/100));
// }else if(amount > 7000 && amount <= 9000){
//     console.log(amount-((amount*10)/100));
// }else if(amount >9000){
//     console.log(amount-((amount*20)/100));
// }else{
//     console.log("Invalid amount");
// }
// console.log("another");
// let dis = 0;
// if(amount >=0 && amount <=5000) dis = 0;
// else if(amount >5000 && amount <= 7000) dis = 5;
// else if(amount > 7000 && amount <= 9000)dis = 10;
// else if(amount >9000) dis =20;
// else console.log("Invalid amount");

// console.log(amount-((amount*dis)/100));


//Biljli Bill 

let unit = Number(prompt("enter unit:"));



if(unit > 0 && unit <= 100){
  console.log(unit*4.2);
}else if(unit > 100 && unit <= 200){
    console.log(((unit-100)*6 )+ 100*4.2);
}else if(unit > 200 && unit <= 400){
    console.log(((unit-200)*8)+(100*6) +(100*4.2));
}else if(unit > 400){
    console.log((((unit-400)*13)+(200*8) +(100*6) + (100*4.2)))
}else{
    console.log("invalid");
}






