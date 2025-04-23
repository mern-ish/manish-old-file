// for(let i = 0; i <= 5; i++){
//     for(let j = 1;j <= 5; j++){
//         process.stdout.write("* ");
//     }
//     console.log(" ");
    
// }

//pattern  programming
//Right angled triangle
// *
// **
// ***
// ****
// *****
const prompt = require("prompt-sync")();
let n = prompt("enter a number: ");
//star
for(let i = 1;i <= n;i++){
    for(let j = 1;j <= i;j++){
        process.stdout.write("* ");
    }
    console.log(" ")
}
//number
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(j + " ");
    }
    console.log(" ");
}

//alphabet
for(let i = 1;i <= n;i++){
    let temp = 65;
    for(let j = 1;j <= i;j++){
        process.stdout.write(String.fromCharCode(temp)+" ");
        temp++;
    }
    console.log();
}



