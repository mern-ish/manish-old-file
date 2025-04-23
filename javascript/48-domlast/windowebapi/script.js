
let btn = document.querySelector("button");
let btn2 = document.querySelector("#btn");
let btn3 = document.querySelector("#backward");
let btn4 = document.querySelector("#forward");

console.log(window);


btn.addEventListener("click" ,()=>{
  location.href = "https://www.google.co.in/";
}); 

btn3.addEventListener("click",()=>{
  history.back();
})

btn4.addEventListener("click",()=>{
  history.forward();
})

localStorage.setItem("user","manish");
localStorage.setItem("age",20);
localStorage.removeItem("age");
// localStorage.clear();
let user = localStorage.getItem("user");
console.log(user);




