//Strong Number

let n  = Number(prompt("enter a number"));
let copy = n;
let a,strong=0;
while(n>0){
    a = n%10;
    let fact = 1;
    while(a>0){
        fact = fact * a;
        a--;
    }
    strong = strong + fact;
    n = Math.floor(n/10);  
}
// console.log(strong);
copy == strong ?console.log("strong number"):console.log("not a strong number");