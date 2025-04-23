let h = document.querySelector("h1");
let box = document.querySelector("#box");
let button= document.querySelector("button");
let h5= document.querySelector("h5");
let buttonCard = document.querySelector("#card button");


h.addEventListener("click",function(){
    console.log("hey guys");
    h.style.backgroundColor = "purple"
    h.style.color = "yellow";
    h.innerHTML = "Hi,World";
    h.style.fontSize = "6rem";
});

button.addEventListener("click",function(){
   box.style.backgroundColor = "orange";
});
button.addEventListener("dblclick",function(){
    box.style.backgroundColor = "red";
})

let flag =0;
buttonCard.addEventListener("click",function(){
    if(flag == 0){
        h5.innerHTML="Friends";
        h5.style.color = "green";
        buttonCard.innerHTML = "Remove";
        flag =1;
    }else{
        h5.innerHTML="stanger";
        h5.style.color = "red";
        buttonCard.innerHTML = "Add Friend";
        flag =0;


    }
})