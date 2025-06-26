//Linear Search

let arr  = [1, 2, 3, 4, 5, 6, 7];

const Prompt = require("prompt-sync")()
let target = Number(Prompt("enter number:"));
console.log(target);

let index = -1;
for(let i = 0;i <= arr.length;i++){
    if(arr[i]==target){
        console.log()
    }

}