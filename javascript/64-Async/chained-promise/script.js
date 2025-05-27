// chained promises: user -> posts ->   comments

//task:
//1.create getUser() ->resolve with { id:1,name:"Manish"}
//2.getPosts(userId) ->resolve with list of post titles
//3.getComments(postId) ->resolve with comments
// chain them using .then() and log the final output.


function getUser(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res({id:1,name:"manish"});
        },1000);
    })
}

function getPosts(userId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(["title 1","title 2"]);
        },1000);
    })
}

function getComments(postId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(["great post","good post"])
        },1000);
    })
}


getUser()
.then(function(data){
    console.log(data);
    return getPosts(data.id)
})
.then(function(title){
    console.log(title);
    return getComments("cool")
})
.then(function(cmts){
    console.log(cmts);
})