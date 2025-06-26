//Classes

class Car {
    constructor(name){
        this.brand=name;
    }

    present(){
        console.log("i have "+ this.brand);
    }
}

const car1 = new Car("ford");
car1.present();



//inheritence

class Model extends Car {
    constructor(name,mod){
        super(name);
        this.model = mod;
    }

    show(){
        console.log("show your's")
    }
}