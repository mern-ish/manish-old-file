//V-pattern
const prompt = require("prompt-sync")();
let n = Number(prompt("enter odd number: "));
console.log(n);
for(let i=1;i<=n;i++){
    for(let j= 1;j<=n;j++){
        if(i==j){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
    }
    for(let k=1;k<=n;k++){
        if(i+k == n+1){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");

        }
    }
    console.log()
}