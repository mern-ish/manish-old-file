//All-zero's-to-left-&-All-one's-to-right
let arr = [1,1,1,1,1,1,0,0,1,0,0,0,0];
let j = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]== 0){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j++;
    }
}
console.log(arr);``

