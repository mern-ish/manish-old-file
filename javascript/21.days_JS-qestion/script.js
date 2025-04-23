// console.log("Hello,javascript");
// console.warn("Hello,javascript");
// console.info("Hello,javascript");
// console.error("hello,javascript");
// console.table({Name:"manish",Age:21});

// let a = 12;
// let b = 5;
// let c;
// c = a;
// a = b;
// b = c;
// console.log("a",a);
// console.log("b",b);


// let r = 2;
// let u = 4;
// r = r + u;
// u = r - u;
// r = r - u;
// console.log("r",r);
// console.log("u",u);

// let g = 8;
// let h = 9;
// [g,h]= [h,g];
// console.log("g",g);
// console.log("h",h);


// console.group("routine");
// console.log("morning");
// console.log("good afternoon");
// console.log("good night");
// console.log("nighttt");
// console.groupEnd();

// console.groupCollapsed("routine");

// console.group("routine");
// console.log("morning");
// console.log("good afternoon");
// console.log("good night");
// console.log("nighttt");
// console.groupEnd();
// console.log("morning");
// console.log("good afternoon");
// console.log("good night");
// console.log("nighttt");
// console.groupEnd();



// const stu = {
//     name:"manish",
//     age:19,
//     email:"manish@420gmail.com",
//     isActive:true,
// }

// console.log(stu);
// Object.freeze(stu);

// stu.age = 20;
// stu.email = "manish@1234gmai.com";
// console.log(stu);


// let num = "50";
// console.log(num);
// // let result = Number(num);

// // console.log(result);

// let t = 4;
// console.log(t);

// let str = "JavaScript";
// console.log(str.includes("Script"));
// console.log(str.includes("Java"));
// console.log(str.includes("script"));

// let n = str.indexOf("Script");
// console.log(n);

// (n !== -1)?console.log(true):console.log(false);

// let arr = [1,2,3,4,5];

// let result = arr.reduce(function(acc,val){
//     return acc + val;
// },0);
// console.log(result);


//1.LOg "hello,javascript" to the console in 3 different ways.
//2.perform 35 * 2 - (10 / 2) + 7 and log the result.
//3.LOg the data type of "123",123,true,and null using typeof.
//4.write a program that swaps the values of two.
//5.Use console.group() to organize logs into a group.

let question = Number(prompt("enter the question number:"));
switch(question){
    case 1:
        console.log("Hello,Javascript");
        console.warn("Hello,Javascript");
        console.error("Hello,Javascript");
        console.info("Hello,Javascript");
        console.table({name:"manish",age:24,isActive:true,});
    break;
    case 2:
        console.log(35 * 2 - ( 10 / 2 ) + 7);
    break;
    case 3:
        console.log("123",typeof "123");
        console.log("123",typeof 123);
        console.log(true,typeof true);
        console.log("null",typeof null);
    break;
    case 4:
        let a = 10;
        let b = 5;
        let c;
        console.log("a =",a);
        console.log("b =",b);
        //first way
        c = a;
        a = b;
        b = c;
        console.log("a =",a);
        console.log("b =",b);

        //second way
        a = a + b;
        b = a - b;
        a = a - b;
        console.log("a =",a);
        console.log("b =",b);
        //third way
        console.log([a,b]=[b,a]);
    break;
    case 5:
        console.group("student details")
        console.log("Manish Kumar Singh");
        console.log("I am 19 years old");
        console.log("I am a Developer");
        console.groupCollapsed("Ambitions");
        console.log("free");
        console.log("developer");
        console.log("fananicialfree");
        console.groupEnd();
    break;
    case 6:
        const obj = {
            name : "Manish",
            age : 34,
            sex : "M",
        }
        console.log(obj);
        obj.name = "javascript";
        obj.age  = 24;
        obj.sex = "F";
        console.log(obj);
    break;
    case 7:
        let stri = "50";
        console.log(stri);
        //first way
        console.log(Number(stri));
        //second way
        console.log(+stri);
        //third way
        console.log(parseInt(stri));

    break;
    case 8:
        let word = "Javascript";
        let ans = word.indexOf("Script");
        // console.log(ans);
        (ans ===-1)?console.log(true):console.log(false);
    break;
    case 9:
        let arr = [1,2,3,4,5];
        let result = arr.reduce(function(acc,val){
            return acc + val;

        },0);
        console.log(result);
    break;

}