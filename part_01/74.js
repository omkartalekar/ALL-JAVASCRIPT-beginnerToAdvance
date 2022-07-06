const user1={
    firstName:"omkar",
    age:8,
    about:function(){
        console.log(`${this.firstName} ${this.age}`)
    }
}

user={
    firstName:"omkar",
    age:8,
}



const myFunc=user1.about.bind(user);
myFunc();
// omkar 8