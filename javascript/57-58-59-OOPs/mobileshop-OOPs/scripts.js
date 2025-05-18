//Mobile-Shop

class mobileShop{
    constructor(){
        this.mobiles = [];
    }
    addMobiles(mobile){
        this.mobiles.push(mobile);

    }
    listAllMobiles(){
        this.mobiles.forEach(function(mb, index){
            console.log(`${index +1} ) ${mb.brand}-${mb.model} = ${mb.price}-${mb.color}`)

        });
    }
}

class Mobile{
    constructor(brand,model,price,color){
        this.id = Math.floor(Math.random()*100000)
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.price = price;
        this.sims = [];

    }
    getMobileInfo(){
        console.log(`${this.brand} - ${this.model} = ${this.price} - ${this.color} -${this.id}`)
    }
    insertSim(sim){
        if(this.sims.length === 2) {
            console.log("sorry you already have 2 sims installed");
            return;
        }else{
                this.sims.push(sim);
        }
    }
}

class Sim{
    constructor(brand,balance){
        this.brand = brand;
        this.balance = balance;
    }

    addBalance(balance){
        if(balance < 0){
            console.log("to add balance give amount greater than 0");
            return;
        }
        this.balance +=balance;
    }
}

//created shop for mobile
let myMobileShop = new mobileShop();
//created mobile insstance
let samsung = new Mobile("samsung","Galaxy s24 ultra",12000,"black");
//creatd sim instance
let jio = new Sim("jio",399);
let airtel = new Sim("airtel",499);

//sim is inserted into mobile
samsung.insertSim("jio");
samsung.insertSim("airtel");
//mobile is inserted into shop
myMobileShop.addMobiles(samsung);