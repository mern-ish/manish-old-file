//Creating Arrays
const shopping = ["bread","milk","chesse","noodles",];
console.log(shopping);
//length of array
console.log(shopping.length);
//Array can store different data type
const sequence =[1,2,3,4,"manish","laptop",["add",2,3],{name:"manish"}];
console.log(sequence);
//Accessing and modifying array
console.log(shopping[1]);
console.log(shopping[0]);
//modifying
shopping[1] = "Egg";
console.log(shopping[1]);
sequence[4]= "manish kumar singh";
console.log(sequence[4]);
console.log(shopping);
console.log(sequence);
console.log(sequence[6][2]);


//Find the index of items
//indexOf() -find the index of item in an array.
const birds =["owl","falcon","parrot","peagon"];
console.log(birds);
console.log(birds.indexOf("falcon"));
console.log(birds.indexOf("parrot"));

//Adding items 

//push()- it adds item at the end of array.
const cities =["patna","bhojpur","bihiya","arrah"];
console.log(cities);
let newcity = cities.push("buxar","danapur","bihita","karisath");
console.log(cities);
console.log(newcity);
console.log(newcity.length);
//unshift()-add items at start of an array.
cities.unshift("maniyara");
console.log(cities);

//Removing items
//pop()- its remove the last items of an array.

let onecity = cities.pop();
console.log(onecity);
console.log(cities);

//shift()- its remove items from the start of an array.
let startcity = cities.shift();
console.log(startcity);

//splice()
console.log(cities);
let index = cities.indexOf("arrah");
if(index !=-1){
    cities.splice(index,4);
}
console.log(cities);

//Accessing the items
const trees =["mango","guava","lemon","peepal","baniyan"];
for(const x of trees){
    console.log(`This is tree which is rich in vitamin ${x}`);
}

//if we want to perform on each items of array and want other array inseparate.
//we use map(). - its give an array of changed item.

function double(number){
    return number*2;
}
const number = [1,2,3,4,5,6,7,8,9,10];
const doubled = number.map(double);
console.log(doubled);

function gn(number){
    return number < 5;
}

const greaternum = number.filter(gn);
console.log(greaternum);

//filter()-its takes func as argument and perform task on each item.
function items(device){
    return device.length > 7;
}


const device = ["laptop","mouse","keyword","display","phone","peripheraldevice"];
const deviced = device.filter(items);
console.log(deviced);


//join()-its join array into string by passing the separator
const devicestr=device.join();
console.log(devicestr);

//split()-its split the string into array by passing the element where you want to separate.

const newar = devicestr.split(",");
console.log(newar);
















