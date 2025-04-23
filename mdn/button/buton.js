const button = document.querySelector("button");
button.addEventListener("click",updatename);


function updatename(){
    const name = prompt("enter a name :");
    button.textContent = `player 1 : ${name}`;
}