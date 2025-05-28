//Callback hell

// function firststep(cb){
//     console.log("step one");
//     cb();
// }

// function secondstep(cb){
//     console.log("second step");
//     cb();
// }

// function thirdstep(cb){
//     console.log("third step");
//     cb();
// }

// firststep(()=>{
//     secondstep(()=>{
//         thirdstep(()=>{
//             console.log("all the step are executed");
//         })
//     })
// })

//Promises

let pr = new Promise(function(res,rej){
    console.log("intragram jaao data laao");
    console.log("intagram data...");
    rej();
});

pr.then(function(){
    console.log("resolved");
}).catch(function(){
    console.log("rejected");
})

//callback resolvedby promises

function stepone() {
  return new Promise(function (res, rej) {
    console.log("step one");
    res();
  });
}
function stepTwo() {
  return new Promise(function (res, rej) {
    console.log("stepTwo");
    res();
  });
}

function stepThree() {
  return new Promise(function (res, rej) {
    console.log("stepthree");
    res();
  });
}

stepone()
  .then(stepTwo)
  .then(stepThree)
  .then(function () {
    console.log("all step done");
  });




  console.log("Async")
//setIntervals

setInterval(() => {
  let d = new Date();
  let p = document.getElementById("demo");
  p.innerHTML = d.getHours() +":"
                +d.getMinutes() + ":"
              +d.getSeconds()
  
  
},1000);