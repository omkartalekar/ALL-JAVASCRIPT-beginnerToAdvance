//  The super keyword is used to call the constructor of its parent class to access the parent's properties and methods. 

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <=1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age,speed);
        this.speed=speed;
    }

    run(){
        return `${this.name} is running at ${this.speed} kmph.`
    }
}

// object/instance
const johndo=new Animal("johnoe",34);
console.log(johndo.isCute());
console.log(johndo.isSuperCute());
console.log(johndo.eat());

const tommy=new Dog("tommy",3,45);
console.log(tommy.run());

