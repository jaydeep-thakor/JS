class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{}

let obj = new Child();
console.log(obj)

class Person{

    constructor(name){
        // console.log("enter parent constructor");
        this.species = "home sapiens";
        this.name = name;
    }

    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    walk(){
        console.log("walk")
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    constructor(branch, name){
        // console.log("enter child constructor");
        super(name); 
        // super() invokes the parent class constructor, and super(arguments) passes values from the child class to the parent class.
        this.branch = branch;
        // console.log("exit child constructor");
    }
    work(){
        // if we want to run eat function just before this work function we call it here
        super.eat();
        // eat(); gives an error "eat is not defined"
        console.log("solve problems, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}

const jaydeepObj = new Engineer("it engineering","Jaydeep");

console.log(jaydeepObj)

// if child and parent have same method, child's method will be used.["Method Overriding"]
