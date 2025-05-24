 //Array left rotation by k
//Brutal way
// let arr = [1,2,3,4,5];
// let k = 2

const prompt = require("prompt");

//  for(let j= 1;j<=k;j++){
//     let temp = arr[0];
//     for(let i=0;i<arr.length-1;i++){
//         arr[i]= arr[i + 1];
//     }

//  arr[arr.length-1] = temp;

// }
// console.log(arr);


//optimal way

// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);
// let k = 2;

// for(let i = 0;i<=arr.length-1;i++){
//     temp[i]= arr[(i+k)%arr.length];
// }
// console.log(arr);
// console.log(temp);


//Block swap reverse algorithm

let arr = [1, 2, 3, 4, 5];
const Prompt = require("prompt-sync")()
let k = Prompt("enter number");
console.log(k);



function reverse(arr, i, j){
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    console.log(arr);
}

reverse(arr, 0, k-1);
reverse(arr,k,arr.length-1);
reverse(arr,0,arr.length-1);


