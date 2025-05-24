//Array right rotation by k

let arr = [1,2,3,4,5];

const Prompt = require("prompt-sync")();
let k = Prompt("enter number:");

console.log(k);

function reverse(arr ,i, j){
    while(i<j){
        let temp = arr[i];
        arr[i]= arr[j];
        arr[j] = temp;
        i++;
        j--; 
    }
    console.log(arr);
}

reverse(arr, 0, arr.length-1);
reverse(arr, 0, k-1);
reverse(arr, k, arr.length-1);