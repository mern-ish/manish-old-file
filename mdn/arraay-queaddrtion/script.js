//
let arr = [89,6,89,23,45,67];
let minAge=arr[0];
arr.forEach(element=> {
    if(minAge>element){
        minAge = element;
    }
    

});

console.log(minAge);;
