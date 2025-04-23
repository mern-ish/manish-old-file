let arr = ["manish","vishal","raushan","akash","rishu"];
console.log(arr);
arr.forEach((val)=>{
    console.log(val);
})

let ar = [1,2,3,4,5,6,7,8,9];
let sum = 0;
ar.forEach((val)=>{
    sum = sum + val;
    let elem = val *2;
    console.log(elem);
})
console.log("sum =",sum);


//Array of Object

let arrr = [
    {
        user:"manish",
        age:20,
        isMarried:false
    },
    {
        user:"vishal",
        age:18,
        isMarried:true
    },
    {
        user:"raushan",
        age:19,
        isMarried:false

    }]

    let str= ""
    arrr.forEach((val)=>{
        str = str + val.user;
        console.log(str);
        console.log(val.user);
        console.log(val.age);
        console.log(val.isMarried)
    })

