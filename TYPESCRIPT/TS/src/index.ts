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
// const btn = document.getElementById('btn') as HTMLElement; // type assertion using 'as'
// const btn2 = <HTMLButtonElement> document.getElementById('btn'); // type assertion using '<>'
// btn.addEventListener('click', () => {
//     console.log('Button clicked');
// })
interface User {
    name: string,
    age: number
}
const U1: User = {
    name: 'John',
    age: 30
}
const getDataOfUser = (key: keyof User) => {
    return U1[key];
}
console.log(getDataOfUser('name')); // John
console.log(getDataOfUser('age')); // 30

//--------------------------------------------
//Utility Types

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

// Partial<Type>

// type User ={
//     name:string,
//     email:string
// }
// type User2 = Partial<User>

// Required<Type> - opposite of partial
// type User ={
//     name?:string,
//     email:string
// }
// const user: Required<User>={
//     name:"abhi",
//     email:"abhi@gmail.vom"
// }

// Readonly<Type> - makes every property readonly
// type User ={
//     name:string,
//     email:string
// }
// const user: Readonly<User> ={
//     name:"abhi",
//     email:"abhi@gmail.vom"
// }

// Record<Keys, Type>

// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Record<"name"|"email"|"gender",string>

// Example

// interface UserInfo {
//   age: number;
// }

// type UserName = "john" | "levi" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   levi: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };

// Pick<Type, Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit<Type, Keys>
// interface ShippingInfo {
//   city: string;
//   state: string;
//   country: string;
// }

// type Random = Omit<ShippingInfo,"country">

// Exclude<Type, ExcludedUnion>
// type MyUnion = string | number | boolean
// type Random = Exclude<MyUnion , boolean>

// Extract<Type, Union>
// type MyUnion = string | number | boolean
// type Random = Extract<MyUnion , boolean>

// NonNullable<Type>
// type MyUnion = string | number | boolean | null | undefined
// type Random = NonNullable<MyUnion>
// type Random2 = Exclude<MyUnion,undefined| null>

// Parameters<Type>
// const myfunc = (a: number, b: string) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myfunc>

// ConstructorParameters<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>

// ReturnType<Type>
// const myfunc = (a: number, b: string):string => {
//   return a + b;
// };
// type FuncType = ReturnType< typeof myfunc>

// InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>

// const user:Random ={
//     s:"44",
//     t:"ssds"
// }

//--------------------------------------------
//Generics

const fun = <T> (a: T): T => {
 return a
}

// const ans = fun<string>('hello')
// const ans2 = fun<number>(20)

 type Person11 = {
  name: string;
  age: number;
};
type Person22 = {
  name: string;
  age: number;
  email: string;
};
const user: Person11 = {
  name: "abhi",
  age: 109,
};

const user2: Person22= {
  name: "abhi",
  age: 109,
  email: "asd@gmail.com",
};

const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const ans = func<Person11, Person22>(user, user2);

type PersonP = {
    name: string;
    age: number;
}
const users: Array<PersonP> = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'Doe',
        age: 35
    }
]
const filterUsers = <T,U extends keyof T> (users: T[], property: U, value:T[U]):T[] =>{
    return users.filter((user) => user[property] === value)
}
const filteredPeopleByName =filterUsers(users,"name",'John') 
const filteredPeopleByAge =filterUsers(users,"age",35)
console.log(filteredPeopleByAge)
