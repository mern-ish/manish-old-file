//second max element from array
let arr = [10,20,40,5,60,2,100,30,40,170];
let max = 0;
let sMax = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        sMax = max;
        max = arr[i];
    }else if(arr[i]>sMax){
        sMax = arr[i];
    }
}
console.log("second max elem from array is:"+ sMax);
console.log("max: "+max);
