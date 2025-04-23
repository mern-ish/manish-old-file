const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
    buttonA.textContent = "try again";
    headingA.textContent = `${count} clicks so far`;
    count +=1;
};


let s = 1;
s = 2;
const gh= 3;
