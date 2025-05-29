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
    },true) // false for capturing

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

// const abj = {
//     "1":"a",
//     "1":"b",
// }
// console.log(abj);

// const key1 = Symbol("1");
// const key2 = Symbol(1);     
// const obj = {
//     [key1]: "a",
//     [key2]: "b",
// };
// console.log(obj);

// *******************call(), apply(), bind()********************
const details = {
    firstName: "Soumyajit",
    surname: "Bag",
    age: 23,
    description : function(state,pinCode) {
        return this.firstName + " " + this.surname + " from " + state + " " + (pinCode ? pinCode : "");
    },
};

console.log(details.description());
const castomDetails = {
    firstName: "Arbajit",
    surname: "Sen",
};

console.log(details.description.call(castomDetails,"West Bengal"));
console.log(details.description.apply(castomDetails,["West Bengal"]));
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
        return fnc.apply(args[0], [ ...args.slice(1), ...args2])
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