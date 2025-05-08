"use strict";
const a = 20;
function add(a, b) {
    return a + b;
}
const add2 = (a, b) => a + b;
//array
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, '6'];
//------------------------------------------
// objects
const obj = {
    name: 'John',
    age: 30
};
const obj2 = {
    name: 'John',
    age: 30
};
const obj4 = {
    state: 'Maharashtra',
    pin: 400001,
    // name: 'John', // error: name is not a property of Address
    // age: 30 // error: age is not a property of Address
};
const obj5 = {
    name: 'John',
    age: 30,
    state: 'Maharashtra',
    pin: 400001,
    city: 'Mumbai',
    description: () => {
        console.log(`${obj5.name} is ${obj5.age} years old and lives in ${obj5.city}, ${obj5.state}.`);
    }
};
const myFunc = (a, b, c) => {
    if (c === undefined) {
        return a + b;
    }
    return a * b * c;
};
myFunc(1, 2);
const myFunc2 = (a, b, c = 2) => {
    return a * b * c;
};
// myFunc2(1, 2); // error: Argument of type 'number' is not assignable to parameter of type 'number | undefined'.
// ** but if i not use type alias and define type of function directly then it will work fine.
//-------------------------------------------
//Default parameter value
const myFunc3 = (a, b, c = 2) => {
    return a * b * c;
};
myFunc3(1, 2); // works fine
const getData = (product) => {
    product.stock = 20; // works fine
    // product.price = 90 // error: Cannot assign to 'price' because it is a read-only property.
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Stock: ${product.stock}`);
    console.log(`Product Price: ${product.price}`);
};
const product1 = {
    name: 'Laptop',
    stock: 10,
    price: 50000
};
getData(product1);
//--------------------------------------------
//Type Never : for throw error it gives the type never
const throwError = (message) => {
    throw new Error(message);
};
//--------------------------------------------
//Class
class MyAddress {
    constructor(state, city, pincode) {
        this.pincode = pincode;
    }
    getPinCode() {
        return this.pincode;
    }
}
class MyDetails extends MyAddress {
    constructor(name, age, state, city, pincode) {
        super(state, city, pincode);
    }
}
const obj6 = new MyDetails('John', 30, 'Maharashtra', 'Mumbai', 400001);
console.log(obj6.getPinCode()); // 400001
// console.log(obj6.pincode) // error:'pincode' is private, only accessible within class
//--------------------------------------------
//getter ans setter function
class Address2 {
    constructor(state, city, pincode) {
        this.pincode = pincode;
    }
    get getPinCode() {
        return this.pincode;
    }
    set setPinCode(pincode) {
        this.pincode = pincode;
    }
}
const obj7 = new Address2('Maharashtra', 'Mumbai', 400001);
obj7.setPinCode = 400002; // set new pin code
console.log(obj7.getPinCode); //dont call function just use it as property
//--------------------------------------------
//Type Assertion
const str = 'Hello World';
const strLength = str.length; // type assertion using 'as'
const strLength2 = str.length; // type assertion using '<>'
const btn = document.getElementById('btn'); // type assertion using 'as'
// const btn2 = <HTMLButtonElement> document.getElementById('btn'); // type assertion using '<>'
btn.addEventListener('click', () => {
    console.log('Button clicked');
});
