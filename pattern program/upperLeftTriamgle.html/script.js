let n = 5;
for(let i = 1;i <= 5;i++){
    let st = "😎";
    console.log(st.repeat(i));
}


for(let i = 1;i <= 5;i++){
    let str = "😭";
    let space = "  ";
    console.log(space.repeat(n-i)+str.repeat(i));
}

for(let i = n;i >= 1;i--){
    let emoji = "🤩";
    console.log(emoji.repeat(i));
}

for(let i = n;i >= 1;i--){
    let sys = "👌";
    let blank ="  ";
    console.log(blank.repeat(n-i)+ sys.repeat(i));
}