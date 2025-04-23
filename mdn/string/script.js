const string = "string";
console.log(string);
let age = 18;
let str = `the boy is ${age}`;
console.log(str);


const button = document.querySelector("button");

function greet(){
    const name = prompt("Enter your name:");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, Nice to see you`;
}
button.addEventListener("click",greet);


const browseType = "mozilla";
console.log(browseType.length);
console.log(browseType[0]); //first char
console.log(browseType[browseType.length - 1]);

//includes() Method - it is used to check the a string has sub-string or not.

const word = "Hello, am i taking to manish";
// console.log(word.includes("am"));
if(word.includes("am")){
    console.log("found");
}else{
    console.log("not found");
}

word.includes("ta")?console.log("found"):console.log("not found");


//startsWith() & endsWith() - to find that a string start & end with a paricular substring.

const wordPress = "Javascript";
console.log(wordPress.startsWith("Java"));
console.log(wordPress.endsWith("script"));
if(wordPress.endsWith("java")){
    console.log("found");
}else{
    console.log("not found");
}

wordPress.startsWith("Java")?console.log("found"):console.log("not found");

//indexOf() - find the sub-string in a string and its return index of first apperence of sub-string  and if not it return -1.
const table = "hum do hamare do";
console.log(table.indexOf("do"));
console.log(table[4]);

console.log(table.indexOf("shine"));

//slice() Method - it is used to extract sub-string from a string.'

const name = "Manish kumar singh";
console.log(name.indexOf("kumar"));
console.log(name.slice(7));

//toUpperCase() & toLowerCase

const statement = "Hello, how are you ?";
console.log(statement.toUpperCase());
console.log(statement.toLowerCase());










