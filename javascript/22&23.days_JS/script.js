// let arr = [1,2,3,4,5,6,7,8,9,10];


// arr.forEach(function(value){
//     console.log(value);
// })


// let ans = arr.map(function(value){
//     return 1
// })
// console.log(ans);

// let answer = arr.filter(function(value){
//     return false
// })

// console.log(answer);


// let nsa = arr.reduce(function(acc,val){
//     return acc + val;
// },0)
// console.log(nsa);


// //loop
// //10-1

// for(let i = 10;i>0;i--){
//     console.log(i);
// }
// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }



//1.write a for loop to print numbers from 10 to 1 in reverse.
//2.Use a while loop to print multiples of 3 from 3 to 30.
//3.write a program to calculate the sum of numbers from 1 to 100 using a loop.
//4.Create a nested loop to print a star pattern.
//5.Use a for...of loop to iterate over the string "javascript".
//6.Remove duplicate values from an array.
//7.Find the seconf largest number in an array.
//8.Sort an array in descending order.
//9.Reverse an array without using reverse().
//10.Find the most frequent element in an array.

let question = Number(prompt("enter the question no.:"));
switch(question){
    case 1:
        for(let i=10;i<0;i--){
            console.log("i");
        }
    break;
    case 2:
        let i = 3;
        while(i<=31){
            console.log(i);
            i+=3;
        }
    break;
    case 3:
        let sum = 0;
        for(let i=0;i<=100;i++){
            sum+=i;
        }
        console.log(sum);
    break;
    case 4:
    break;

    case 5:
        let str = "javascript";

        for(let i of str){
            console.log(i);
        }
    break;

    case 6:
        let arr = [1,2,3,3,2,4,67,3,3,3,56,3,2,1,7,8,9,9,87,8];
        let arr2 = [...new Set(arr)];
        console.log(arr);
        console.log(arr2);
    break;
    
    case 7:
        let larArr = [9,3,5,2,4,6,8,1,2,4,5,9,10];
        let unique = [...new Set(larArr)];
        console.log(unique);
        let newArr = unique.sort(function(a,b){
            return b - a;
        });
        console.log(newArr);
        console.log(newArr[1]);

       
        console.log([...new Set(larArr)].sort(function(a,b){
            return b - a;
        })[1]);
    break;

    case 8:
        let desArr = [8,3,9,3,5,7,9,1,6,7,4,5,2,3,1];
        console.log(desArr);
        let newUnique = [...new Set(desArr)];
        console.log(newUnique);
        let descendingArr = newUnique.sort((a,b) => b-a);
        console.log(descendingArr);
    break;
    case 9:
        let aRR = [2,9,4,8,5,7,6,4,3,3,2,2];
        let newaRR = [];

        for(let i=aRR.length-1;i>=0;i--){
            newaRR.push(aRR[i]);
        }
        console.log(aRR);
        console.log(newaRR);
    break;
    
    case 10:
        let array1 = [1,2,3,4,5,6,7,8,2,3,4,5,6,7,8,9,7,6,5,43,2,68,0,76,8];
        var obj = {};
        array1.forEach(function(val){
            obj[val] === undefined ? (obj[val] = 1):obj[val]++;
        });
        console.log(obj);
    break;






}