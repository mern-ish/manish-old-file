// 1.Create a function that takes another function as an argument and call it aftr 3 second.
//2.Implement your own version of .map() as a higher Order function.
//3.write a function that uses closures to create a counter.
//4. implement a function that limits how many times another function can be called.
//6.Create a function that takes a callback and executes it after every 'n' second indefinitely.
//7.Implement a function that return a function with a present greeting.(closure)
//8.Implement a function that takes a callback and only executes it once.(hof & closure)
//9.


let question = Number(prompt("Enter the question number "));
switch(question){
    case 1:
        function callerfun(fun){
            setTimeout(fun,3000);
        }

        callerfun(function(){
            console.log("Hey");
        })
    break;
    case 2:
        // let arri = [1,3,4,5,6,7,8,9,2,8];

        function makingCopy(arr,func){
            let newArr = [];
            for(let i = 0; i < arr.length;i++){
                newArr.push(func(arr[i]));
            }
            return newArr;
            
        }
        
        let ans = makingCopy([1,3,4,5,6,7,8,9,2,8],function(value){
            return value +2;
            
        });

        console.log(ans);

    break;
    case 3:
        function counter(){
            let count = 0;
            return function(){
                count++;
                console.log(count);
            }
        }
        // let answ  = counter();
        // answ();
        // answ();
        // answ();


        counter()();
        counter()();

        counter()();

    break;
    case 4:
        function limiterfun(func,limit){
            let total = 0;
            return function(){
                if(total < limit){
                    total++;
                    func(); 
                }else{
                    console.log("you exceeded the limit");
                }
            }
        }
        let limiter = limiterfun(function(){
            console.log("hey")
        },3);
        limiter();
        limiter();
        limiter();
        limiter();

    break;
    case 6:
        function barbarchaloa(func,time){
            setInterval(func,time*1000);
        }

        barbarchaloa(function(){
            console.log("hey")
        },2);

    break;
    case 7:
        function greetkaro(greet){

            return function(name){
                console.log(`${greet} ${name}`)
            }
        }

        let greetreturn = greetkaro("hello");
        greetreturn("manish");
        greetreturn("sahil")
    break;
    case 8:
        function callback(func){
            let executes = false;
            return function(){
                if(!executes){
                    executes = true;
                    func();
                }else{
                    console.error("doosari bar nahi chalega");
                }
            }

        }

        let answer   =callback(function(){
            console.log("hey")
        })
        answer();
        answer();

    break;

    case 9:






        
}