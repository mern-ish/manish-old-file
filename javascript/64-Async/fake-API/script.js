//Fake API

//write a function fakeApiCall(endPoint) that:
// . Accept a string like "user" or "posts".
// .Resolves with some dummy data after a random delay .



function fakeApiCall(endPoint){
    const data = {
        users : ["manish","sahil","rohit","rana"],
        posts : ["hey champ","great going","let's build together"]

    }


    let delay = Math.random()*2000 +1000;
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(data[endPoint]);
        },delay);
    });
}

fakeApiCall("users").then(function(data){
    console.log(data);
});

fakeApiCall("posts").then(function(data){
    console.log(data);
}); 