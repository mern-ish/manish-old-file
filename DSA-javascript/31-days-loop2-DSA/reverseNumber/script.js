//Reverse of number
let num = Number(prompt("enter a number"));
let rev = 0;
let i = 0;

let rem ;
while(num>0){
    rem = num % 10;
    rev = (rev * 10) + rem;
    num = Math.floor(num/10);
    
}
console.log(rev);