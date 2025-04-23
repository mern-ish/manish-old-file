let box = document.querySelector("#box img");


box.addEventListener("dblclick",()=>{
    let i = document.querySelector("#box i");
    console.log(i);
    i.style.opacity  = "1";

    setTimeout(()=>{
        i.style.opacity  = "0";

    },1000)
   
})