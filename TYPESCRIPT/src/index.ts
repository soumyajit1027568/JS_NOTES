const a = 20
function add(a:number,b:number): number {
    return a + b
}

//type alias
type sum = (a: number, b: number) => number;
const add2: sum = (a, b) => a + b

//array
const arr:Array<number> = [1, 2, 3, 4, 5]
const arr2:Array<number|string> = [1, 2, 3, 4, 5, '6']

//------------------------------------------
// objects
const obj: {name: string, age: number} = {
    name: 'John',
    age: 30
}

//-------------------------------------------
//type alias
type Person = {
    name: string,
    age: number
}
const obj2: Person = {
    name: 'John',
    age: 30
}

//-------------------------------------------
//inrerface
interface Address {
    state: string,
    city?: string, //optional property
    pin: number
}
type FunType = () => void;
interface Description {
    description?: FunType
}
interface PersonalDetails extends Address,Description {
    name: string,
    age: number
}

const obj4:Address = {
    state: 'Maharashtra',
    pin: 400001,
    // name: 'John', // error: name is not a property of Address
    // age: 30 // error: age is not a property of Address
}
const obj5: PersonalDetails = {
    name: 'John',
    age: 30,
    state: 'Maharashtra',
    pin: 400001,
    city: 'Mumbai',
    description:()=>{
        console.log(`${obj5.name} is ${obj5.age} years old and lives in ${obj5.city}, ${obj5.state}.`);
    }
}

//-------------------------------------------
// Functions
type FuncType = (a: number, b: number, c?: number) => number|string;
const myFunc:FuncType = (a, b, c) => {
    if(c === undefined) {
        return a + b;
    }
    return a * b * c;
}
myFunc(1, 2);
//------------
type FuncType2 = (a: number, b: number, c: number) => number|string;

const myFunc2:FuncType2 = (a, b, c = 2) => {
    return a * b * c;
}
// myFunc2(1, 2); // error: Argument of type 'number' is not assignable to parameter of type 'number | undefined'.
// ** but if i not use type alias and define type of function directly then it will work fine.

//-------------------------------------------
//Default parameter value
const myFunc3 = (a:number, b:number, c:number = 2) => {
    return a * b * c;
}
myFunc3(1, 2); // works fine
//--------------------------------------------
//Function with object as parameter

// const getData = (product:{name:string,stock:number,price:number}):void => {
//     console.log(`Product Name: ${product.name}`);
//     console.log(`Product Stock: ${product.stock}`);
//     console.log(`Product Price: ${product.price}`);
// }


// type getDataType = (product:{name:string,stock:number,price:number}) => void;
interface Product {
    name: string,
    age?: number,
    stock: number,
    readonly price: number
}
type getDataType = (product: Product) => void;
const getData:getDataType = (product) => {
    product.stock = 20 // works fine
    // product.price = 90 // error: Cannot assign to 'price' because it is a read-only property.
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Stock: ${product.stock }`);
    console.log(`Product Price: ${product.price}`);
}
const product1 = {
    name: 'Laptop',
    stock: 10,
    price: 50000
}
getData(product1);

//--------------------------------------------
//Type Never : for throw error it gives the type never
const throwError = (message: string): never => {
    throw new Error(message);
}

//--------------------------------------------
//Class
class MyAddress {
    constructor(state:string, city:string, private pincode:number) {}
    getPinCode():number{
        return this.pincode;
    }
}
class MyDetails extends MyAddress {
    constructor(name:string, age:number,state:string, city:string, pincode:number) {
        super(state, city, pincode);
    }
}
const obj6 = new MyDetails('John', 30, 'Maharashtra', 'Mumbai', 400001);
console.log(obj6.getPinCode()) // 400001
// console.log(obj6.pincode) // error:'pincode' is private, only accessible within class

//--------------------------------------------
//getter ans setter function
class Address2 {
    private pincode: number;
    constructor(state:string, city:string, pincode:number) {
        this.pincode = pincode;
    }
    get getPinCode():number{
        return this.pincode;
    }
    set setPinCode(pincode:number){
        this.pincode = pincode;
    }
}
const obj7 = new Address2('Maharashtra', 'Mumbai', 400001);
obj7.setPinCode = 400002; // set new pin code
console.log(obj7.getPinCode) //dont call function just use it as property

//--------------------------------------------
//Type Assertion
const str = 'Hello World';
const strLength:number = (str as string).length; // type assertion using 'as'
const strLength2 = (<string>str).length; // type assertion using '<>'

const btn = document.getElementById('btn') as HTMLElement; // type assertion using 'as'
// const btn2 = <HTMLButtonElement> document.getElementById('btn'); // type assertion using '<>'
btn.addEventListener('click', () => {
    console.log('Button clicked');
})
