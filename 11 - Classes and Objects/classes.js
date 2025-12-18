// (2) Classes: class is a program-code template for creating objects

// in class, we not have to seprate them using comma
class ToyotaCar {
    constructor(brand,mileage){
        // The code that should run at the time of object initialization is written inside the constructor.
        // The code we want to execute when an object is created is written in the constructor.
        console.log("creating new objects");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
    // setBrand(brand){
    //     this.brandName = brand; 
    // }
}

// to create an object throught class 
// let fortuner = new ToyotaCar(); if we do not give an argument it brandName will be undefined
let fortuner = new ToyotaCar("Fortuner",10);
// fortuner.setBrand("fortuner");
console.log(fortuner)
// fortuner.start()
// fortuner.stop()

// The ToyotaCar class serves as a blueprint for creating car objects. When we create an object using new ToyotaCar(), the object inherits all the methods and properties defined in the class, allowing them to be reused across multiple instances.
let lexus  = new ToyotaCar();
lexus.brandName = "lexus";
console.log(lexus)

// when we write new while using class, new try to find constructor but if it does not find any constructor it will automatically create a constructor
// constructor invokes first