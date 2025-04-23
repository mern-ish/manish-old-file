

let h4 = document.querySelector("h4");
let btnadd  = document.querySelector("#card button");



 
let flag = 0;
btnadd.addEventListener("click",()=>{
   if(flag==0){
    h4.innerHTML = "Adding....";
    h4.style.color = "yellow";
    btnadd.innerHTML = "Request sending...."
    setTimeout(() => {
        h4.innerHTML = "Friend";
        h4.style.color = "green";
        btnadd.innerHTML = "Remove";
    }, 3000);  
    flag = 1;
}else{
    h4.innerHTML = "Removing...";
    h4.style.color = "yellow";
    btnadd.innerHTML = "Removing..."
    setTimeout(()=>{
        h4.innerHTML = "Stranger";
        h4.style.color = "red";
        btnadd .innerHTML = "Add Friend";
    },3000)
    flag = 0;
}

})



