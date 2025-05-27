//Simulate a Food Delivery

//Task: Create a function orderFood thar returns a Promise. It should resolve after 2second with "Pizza delivered!"

//Bonus: Add a chance to reject with "Delivery failed"

function orderFood(){
    return new Promise((res,rej)=>{
        let food = Math.floor(Math.random()*10) < 5;
        console.log(food);
        if(food){ res();}
        else {rej();}
    })
}

orderFood().then(()=>{
    console.log("🍕Pizza Delivered!");
}).catch(()=>{
    console.log("🚫Delivery failed");
})