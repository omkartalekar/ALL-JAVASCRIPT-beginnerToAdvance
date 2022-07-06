// The JavaScript allows static methods that belong to the class rather than an instance of that class. Hence, an instance is not needed to call such static methods. Static methods are called on the class directly. It can be of any name.

// What is a Static variable in JavaScript. 
// A static variable is a class property that is used in a class and not on the instance of the class. The variable is stored on the data segment area of the memory, and the same value is shared among every instance created in a class.



 class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
console.log(person1.eat());
const info = Person.classInfo();
console.log(person1.desc);
console.log(info);