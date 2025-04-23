//Automophic number  or circular number
let n = Number(prompt("enter a number"));
let copy = n;
let sqr = Math.pow(n,2);
let count = 0;
while(n>0){
    count++;
    n= Math.floor(n/10);
}
if(sqr%Math.pow(10,count) == copy) {
    console.log("Atumorphic Number");
}else{
    console.log("Not a atuomorphic Number");
}