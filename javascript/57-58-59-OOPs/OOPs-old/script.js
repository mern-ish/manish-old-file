//OOPs
//constructor
function Toffee(name,flavor){
    this.name = name;
    this.flavor =  flavor;
    this.sayName = function(){
        console.log(`${name} and ${flavor}`);
    }
}

let t1 = new Toffee("kissme","chocolate");

//prototype 
function Human(name,age,isHandSome){
    this.name = name;
    this.age = age;
    this.isHandSome = isHandSome;
}

Human.prototype.sayHello = function(){
    console.log("hello");
}

let h1 = new Human("manish",19,true);
let h2 = new Human("rohit",20,true);
let h3 = new Human("subham",20,false);



//example

function Employee(name,age,id,salary){
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.showDetails = function(){
    console.log(`${this.name} is my name and I am ${this.age} years old and my id is ${this.id} and my salary is ${this.salary}`);
}

let emp1 = new Employee("manish",19,11629,500000);

emp1.showDetails();

