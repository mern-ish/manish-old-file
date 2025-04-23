let btn = document.querySelector("button");
let percent = document.querySelector("#percent");
let growth = document.querySelector("#growth");
let grow =0;
btn.addEventListener("click",()=>{
    let int = setInterval(()=>{
        grow++;
        percent.innerHTML = grow+'%';
        growth.style.width = grow+'%';

    },50);
    setTimeout(() => {
       clearInterval(int);
       btn.innerHTML = "Downloaded";
       btn.style.opacity = .5;
    }, 5000);
})