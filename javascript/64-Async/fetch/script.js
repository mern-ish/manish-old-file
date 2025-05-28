//fetch

fetch("https://api.github.com/users/mern-ish")
.then(raw => raw.json())
.then(data => {
    console.log(data);
})