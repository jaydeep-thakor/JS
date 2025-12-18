class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{}

let obj = new Child();
console.log(obj)

class Person{
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
    work(){
        console.log("solve problems, build something");
    }
}

class Engineer extends Person{
    work(){
        console.log("treat patients");
    }
}

const jaydeepObj = new Engineer();

console.log(jaydeepObj)

// if child and parent have same method, child's method will be used.["Method Overriding"]
