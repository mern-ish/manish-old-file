

let sum = 0;
let i = 0;
let num = prompt("enter a number:");
while(num>0){
    let rem = num%10 ;
    sum = sum + rem;
    num = Math.floor(num/10);

}
console.log(sum);