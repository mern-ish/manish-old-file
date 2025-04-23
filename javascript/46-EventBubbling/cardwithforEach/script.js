let arr =[
    {
        user:"Manish",
        age:20,
        isMarried:true,
        image:"https://images.unsplash.com/photo-1665753534790-d11b1d68926d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        user:"Vishal",
        age:17,
        isMarried:false,
        image:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        user:"roshan",
        age:16,
        isMarried:true,
        image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJveSUyMG1vZGVsfGVufDB8fDB8fHww"
    },{
        user:"Manish",
        age:20,
        isMarried:true,
        image:"https://images.unsplash.com/photo-1665753534790-d11b1d68926d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
    },{
        user:"Vishal",
        age:17,
        isMarried:false,
        image:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
    },{
        user:"Manish",
        age:20,
        isMarried:true,
        image:"https://images.unsplash.com/photo-1665753534790-d11b1d68926d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
    }
]

let sum = '';
arr.forEach((elem)=>{
    sum = sum +`<div class="card">
        <img src="${elem.image}" alt="manish">
        <h1>${elem.user}</h1>
        <h5>${elem.age}</h5>
        <h4>${elem.isMarried}</h4>   
    </div>`
})
let body = document.querySelector("body");
body.innerHTML = sum;