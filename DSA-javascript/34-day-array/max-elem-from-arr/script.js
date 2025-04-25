//Max element from Array
let arr = [10,30, 190,40,100,20,120,30,70];
// console.log(arr);
let max = 0;
for(let i=0;i<=arr.length;i++){
    if(arr[i]> max){
        max= arr[i];
    }
}
console.log(arr);
console.log(max);