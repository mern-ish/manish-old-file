//kite
//upper 

const prompt = require("prompt-sync")();

let n = prompt("enter number:");

for(let i=1;i<=n;i++){
    for(let j=n;j>=i;j--){
        process.stdout.write("- ");
    }
    for(let k=1;k<=i;k++){
        process.stdout.write("* ");
    }
    for(let m=1;m<=i;m++){
        process.stdout.write("* ");
    }
    for(let l=n;l>=i;l--){
        process.stdout.write("- ");
    }
    console.log();
}

//lower

for(let i=1;i<=n;i++){
    for(let r=1;r<=i;r++){
        process.stdout.write("- ");
    }
    for(let s=n;s>=i;s--){
        process.stdout.write("* ");
    }
    for(let t = n;t>=i;t--){
        process.stdout.write("* ");
    }
    for(let u = 1;u<=i;u++){
        process.stdout.write("- ")
    }
    console.log()
}