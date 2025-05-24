//Array left rotation by 1

let arr = [1,2,3,4,5,6,7,8,9,10];


//with while loop

// let i = 0;
// let temp = arr[i];
// while(i<=arr.length-1){
//     if(i == arr.length-1){
//         arr[i]= temp;
//         break;
//     }
//     arr[i] = arr[i+1];
//     i++;
// }
// console.log(arr);


//with for loop

let temp = arr[0];
for(let i = 0;i < arr.length-1;i++){
    arr[i] = arr[i+1];
}

arr[arr.length-1] = temp;

console.log(arr);

