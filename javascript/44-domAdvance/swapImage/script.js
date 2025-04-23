let model1 = document.querySelector("#model1");
let model2 = document.querySelector("#model2");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let att1 = model1.getAttribute("src");
    console.log(att1);
    let att2 = model2.getAttribute("src");
    console.log(att2);
    model1.setAttribute('src',att2);
    model2.setAttribute('src',att1);
    // console.log("hello guys"); 
});
