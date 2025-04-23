
let h1=document.querySelector("h1");
let btn = document.querySelector("#Game button");

let hDisplay = document.querySelector("#Ipl-game h1");
let btn1 = document.querySelector("#Ipl-game button");






let arr =["CSK","MI","RCB","KKR","SRH","DC","PBKS","RR","LSG","GT"];

btn.addEventListener("click",function(){
    let num = Math.floor(Math.random()*arr.length);
    let winner = arr[num];
    h1.innerHTML = winner;
})


let arr1 = [
    {
        team:"CSK",
        primaryColor:"yellow",
        secondaryColor:"black",
    },
    {
        team:"MI",
        primaryColor:"blue",
        secondaryColor:"gold",
    },
    {
        team:"RCB",
        primaryColor:"red",
        secondaryColor:"black",
    },
    {
        team:"KKR",
        primaryColor:"purple",
        secondaryColor:"gold",
    },
    {
        team:"SRH",
        primaryColor:"orange",
        secondaryColor:"black",
    }

]

btn1.addEventListener("click",function(){
    let num1 = Math.floor(Math.random()*arr1.length);
    let iplWinner = arr1[num1];
    hDisplay.innerHTML = iplWinner.team;
    hDisplay.style.backgroundColor = iplWinner.primaryColor;
    hDisplay.style.color = iplWinner.secondaryColor;

})
 



