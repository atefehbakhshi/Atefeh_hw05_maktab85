'use strict'
let user = {
    name: "John",
    age: 30,
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
};
user.sayHello();