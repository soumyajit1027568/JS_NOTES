// var x = 10;
// setTimeout(() => {
//     console.log(x);
// }, 2000);
// x=11
// console.log(x);
// x=12
// console.log(x)
// let i = 0
// setTimeout(() => {
//     console.log(i);
// },2000);
// i =1
// setTimeout(() => {
//     console.log(i);
// },1000);
"use strict";
//**************Capturing and Bubbling*****************

// In the capturing phase, the event starts from the root and goes down to the target element.
// In the bubbling phase, the event starts from the target element and goes up to the root.
// The event listener can be set to either capturing or bubbling phase by passing a boolean value as the third argument to addEventListener() method.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("grand-grandparent").addEventListener('click', (e) => { 
        console.log("Grand Grandparent Clicked!"); 
    },false)

    document.getElementById("grandparent").addEventListener('click', (e) => { 
        console.log("Grandparent Clicked!"); 
    },true) // false for capturing, befault bubling false

    document.getElementById("parent").addEventListener('click', (e) => { 
        console.log("Parent Clicked!"); 
    },true);

    document.getElementById("child").addEventListener('click', (e) => { 
        console.log("Child Clicked!"); 
    },false); // true for bubbling
});

// ******************Promises********************

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     },2000);
// });

// async function asyncFunction() {
//     console.log("Async function started");
//     const result1 = await p1;
//     console.log(result1);
//     const result2 = await p2;
//     console.log(result2);
//     console.log("Async function completed");    
// }
// asyncFunction();

//****************objects and arrays*****************

const abj = {
    "1":"a",
    "1":"b",
}
console.log(abj);

const key1 = Symbol("1");
const key2 = Symbol(1);     
const obj = {
    [key1]: "a",
    [key2]: "b",
};
console.log(obj);

// *******************call(), apply(), bind()********************
const details = {
    firstName: "Soumyajit",
    surname: "Bag",
    age: 23,
    description : function(state,pin) {
        return this.firstName + " " + this.surname + " from " + state +" "+ pin;
    },
};
console.log(details.description());
const castomDetails = {
    firstName: "Arbajit",
    surname: "Sen",
};
//function borrowing
//call method
console.log(details.description.call(castomDetails,"West Bengal",722152));
//apply method
console.log(details.description.apply(castomDetails,["West Bengal",722152]));
//bind method return copy of same function and use it / invoke later
const Usersdescription = details.description.bind({
    firstName: "Papai",
    surname: "Bag",
},"West Bengal");
console.log(Usersdescription("700001"));

//******************Pollyfil of bind()********************

Function.prototype.myBind = function(...args){
    let fnc = this
    // console.log(fnc);
    return function(...args2){
        return fnc.apply(args[0], [ ...args.slice(1), ...args2]) //When you use the rest parameter syntax (...args), JavaScript automatically gathers the remaining arguments into a real array.
    }
}

const detail = {
    firstName: "Papai",
    surname: "Bag",
}
const mybincheck = details.description.myBind(detail,"West Bengal MyBind");
console.log(mybincheck("700001"));

// ********************Function Currying********************
// Currying is a functional programming technique in JavaScript where a function is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions, making code more modular and reusable.
function multiply(x,y){
    console.log(x*y);
}
multiply(2,9);

const multiplyByTwo =  multiply.bind(this,2)
multiplyByTwo(3) // 6

const multiplyByThree =  multiply.bind(this,3)
multiplyByTwo(3) // 9

multiply.bind(this,4)(2) // 8 ,,  multiply by 4

// ********************Prototype********************
// In JavaScript, a prototype is an object that is associated with every function and object by default. It provides a mechanism through which objects can inherit properties and methods from other objects.

// ********************Prototype Inheritance********************
const o1 = {
     p : "inside o1"
}
const o2 = {
     p2 : "inside o2",
     __proto__:o1
}
const o3 = {
     p3 : "inside o3",
     __proto__:o2
}

console.log(o3.p);  //but we should never change the __proto__ it's ok for understanding

// ********************Prototype vs __proto__********************
class Student{
    constructor(){
    }
    getName(){
        return 'inside getname : I am soumyajit'
    }
}
const ob1 = new Student()

const ob2 = {__proto__ : Student.prototype}
console.log(ob2.getName());

// obj.__proto__ is a reference to the object's prototype ([[Prototype]]), mostly used for inspection.
// ConstructorFn.prototype is the object that will become the prototype of instances created using new ConstructorFn().

// ********************localStorage and sessionStorage********************

// Both localStorage and sessionStorage are part of the Web Storage API that allow storing key-value pairs in the browser.
// ┌──────────────────────┬──────────────────────────────┬──────────────────────────────┐
// │ Feature              │ localStorage                 │ sessionStorage               │
// ├──────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │ Lifetime             │ Persists even after tab or   │ Cleared when tab or browser  │
// │                      │ browser is closed            │ is closed                    │
// ├──────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │ Scope                │ Shared across tabs/windows   │ Specific to a single tab     │
// │                      │ of the same origin           │                              │
// ├──────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │ Storage Capacity     │ ~5–10 MB                     │ ~5 MB                        │
// ├──────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │ Access Methods       │ setItem(), getItem(),        │ setItem(), getItem(),        │
// │                      │ removeItem(), clear()        │ removeItem(), clear()        │
// ├──────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │ Use Case             │ Storing data that should     │ Temporary data like form     │
// │                      │ persist across sessions      │ inputs, filters, etc.        │
// └──────────────────────┴──────────────────────────────┴──────────────────────────────┘

// ********************map(),filter(),reduce()********************

let arr = [1,3,4,2,5,4,5]

let arrAfterMap = arr.map((e)=>{
    return e*2;
})
console.log("arrAfterMap",arrAfterMap);

let arrAfterReduce = arr.reduce((acc,e)=>{
    acc = acc+ e;
    return acc;
},0)
console.log("arrAfterReduce",arrAfterReduce);

let arrAfterFilter = arr.filter((e)=>{
 return e >= 5   
})
console.log("arrAfterFilter",arrAfterFilter);

// ********************Callback********************

// Good Part of callback - Callback are super important while writing asynchronous code in JS
// Bad Part of Callback - Using callback we can face issue: Callback Hell, Inversion of control

// JavaScript is synchronous, single threaded language. It can Just do one thing at a time, it has just one call-stack and it can execute one thing at a time. Whatever code we give to Javascript will be quickly executed by Javascript engine, it does not wait.

console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Namaste
// JavaScript
// Season 2

// 💡 It is quickly printing because `Time, tide & Javascript waits for none.`
// But what if we have to delay execution of any line, we could utilize callback, How?

console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");
// Namaste
// Season 2
// JavaScript

// 💡 Here we are delaying the execution using callback approach of setTimeout.

// ********************Callback Hell, Inversion of control********************

// 🛒 e-Commerce web app situation
// Assume a scenario of e-Commerce web, where one user is placing order, he has added items like, shoes, pants and kurta in cart and now he is placing order. So in backend the situation could look something like this.

const cart = ["shoes", "pants", "kurta"];
// Two steps to place a order
// 1. Create a Order
// 2. Proceed to Payment

// Assumption, once order is created then only we can proceed to payment, so there is a dependency. So How to manage this dependency. Callback can come as rescue, How?

api.createOrder(cart, function () {
  api.proceedToPayment();
});
// 💡 Over here `createOrder` api is first creating a order then it is responsible to call `api.proceedToPayment()` as part of callback approach.
// To make it a bit complicated, what if after payment is done, you have to show Order summary by calling api.showOrderSummary() and now it has dependency on api.proceedToPayment() Now my code should look something like this:

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});
// Now what if we have to update the wallet, now this will have a dependency over showOrderSummary

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
// 💡 Callback Hell
// When we have a large codebase and multiple apis and have dependency on each other, then we fall into callback hell. These codes are tough to maintain. These callback hell structure is also known as Pyramid of Doom.

// Till this point we are comfortable with concept of callback hell but now lets discuss about Inversion of Control. It is very important to understand in order to get comfortable around the concept of promise.

// 💡 Inversion of control is like that you lose the control of code when we are using callback.

// Let's understand with the help of example code and comments:

api.createOrder(cart, function () {
  api.proceedToPayment();
});

// 💡 So over here, we are creating a order and then we are blindly trusting `createOrder` to call `proceedToPayment`.

// 💡 It is risky, as `proceedToPayment` is important part of code and we are blindly trusting `createOrder` to call it and handle it.

// 💡 When we pass a function as a callback, basically we are dependant on our parent function that it is his responsibility to run that function. This is called `inversion of control` because we are dependant on that function. What if parent function stopped working, what if it was developed by another programmer or callback runs two times or never run at all.

// 💡 In next session, we will see how we can fix such problems.
// 💡 Async programming in JavaScript exists because callback exits.

// ********************async and await********************

// total time = 10 seconds, not 15.
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise resolved value by p1!!");
    resolve("Promise resolved value by p1!!");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise resolved value by p2!!");
    resolve("Promise resolved value by p2!!");
  }, 10000);
});
async function handlePromise() {
  console.log("Hi");
//   debugger;
  const val = await p1;
  console.log("Hello There!");
//   debugger;
  console.log(val);
  const val2 = await p2;
  console.log("Hello There! 2");
//   debugger;
  console.log(val2);
}
handlePromise();
//*** p1 and p2 start at the same time, because they are created before the await. await suspends the async function — but it doesn't pause other parts of the code that already ran (like timers).
// So total time = 10 seconds, not 15.

//even if handlePromise() is never called — both p1 and p2 will still resolve.p1 and p2 don’t care about that suspension. They were already running because the Promises were created outside the async function.These promises are created immediately when the script runs.The setTimeout() callbacks are scheduled immediately.Their timers start immediately, regardless of whether you ever await or .then() on them.

// here if i create promise inside async function.
// it will take 5 + 10 = 15 sec

// async function handlePromise() {  
//   console.log("Hi");
//   const p1 = new Promise(...); // starts at this point
//   const val = await p1;
//   const p2 = new Promise(...); // p2 starts only after p1 resolves
//   const val2 = await p2;
// }

// ********************this keyword,this substitution********************

// this in global space
// this inside a function
// this in strict mode (this substitution)
// this value depends on how this is called (window)
// this inside a object's method
// this inside arrow function
// this inside nested arrow function
// this inside dom

console.log(this) // refers to global object (i.e., window in browsers, global in Node.js). global object differs based on runtime environment.

//this inside a function
function x(){
    // the below value depends on strict/non-strict mode
    console.log(this);
    // in strict mode - undefined
    // in non-strict mode - refers to global window object because replaced by globalObject for the rule of 'this substitution' 

    // ***this inside non-strict mode (this substitution) 
    // -> According to this substitution, if the value of this keyword is null/undefined, it will be replaced by globalObject only in non-strict mode. This is the reason why this refers to global window object inside function in non-strict mode
}
x(); 
// ***this keyword value depends on how the function is called.
// For eg: In strict mode: if i call using a window reference it will not return undefined will return undefined
window.x(); // window object

//this inside object's method
const object1 = {
    a:10,
    y:function(){
        console.log(this);
    }
}
object1.y() //if i call with a reference of object return object1 {a: 10, x: ƒ}

//this inside arrow function

//this inside arrow functionArrow function doesn't have their own this value, they take the value from enclosing lexical context
const object2 = {
    a:10,
    y:()=>{
        console.log("inside arrow fun",this);
    }
}
object2.y(); //return window obj , take the value from enclosing lexical context

const object3 = {
    a:10,
    y:function(){
        console.log("enclosing lexical context",this);
        const y2 = ()=>{
            console.log("inside arrow fun but inside another funtion",this); 
            // in line 301 it will retun window thats why it also returning window that is presnt inside enclosing lexical context
        }
        y2()
    }
}
object3.y();

// this inside DOMIt refers to HTML element
// It refers to HTML element.

// <buttononclick="alert(this)">Click Me</button> --> [object HTMLButtonElement] - Button element  
