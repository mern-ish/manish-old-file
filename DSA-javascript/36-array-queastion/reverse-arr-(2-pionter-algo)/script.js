//Reverse array by two pointer algorithm
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
let i = 0;
let j = arr.length-1;
while(j>i){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--; 
}
console.log(arr);