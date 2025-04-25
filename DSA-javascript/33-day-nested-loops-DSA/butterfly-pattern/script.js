// butterfly - pattern
const prompt = require("prompt-sync")();
let n = prompt("enter a number: ");
console.log(n);
for(let i=1;i<=n;i++){
    //upper wings
    for(let j=1;j<=i;j++){
        process.stdout.write("* ");
    }
    for(let k=1;k<=n-i;k++){
        process.stdout.write("- ");
    }
    for(let l=1;l<=n-i;l++){
        process.stdout.write("- ");
    }
    for(let m=1;m<=i;m++){
        process.stdout.write("* ");
    }
    console.log();   
}

//lower wings
for(let i=0;i<=n;i++){
    for(let j=1;j<=n-i;j++){
        process.stdout.write("* ");
    }
   for(let k=1;k<=n-(n-i);k++){
    process.stdout.write("- ");
   }
   for(let k=1;k<=n-(n-i);k++){
    process.stdout.write("- ");
   }
   for(let j=1;j<=n-i;j++){
    process.stdout.write("* ");
}
   
  
    console.log()
}




   
