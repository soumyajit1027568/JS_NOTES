let str = "abcd/"

//Check string has any uppercase or not
console.log(str !== str.toLowerCase()); //if it has any uppercase letter, it will return true

//Check string has any lowercase or not
console.log(str !== str.toUpperCase()); //if it has any lowercase letter, it will return true

//Check if string has any number or not
console.log(/\d/.test(str)); //if it has any number, it will return true

//Check if string has any special character or not
console.log(/[^a-zA-Z0-9]/.test(str)); //if it has any special character, it will return true

//String to array
let stringToArray = str.split("")
console.log("String to Array: ",stringToArray);       //[ 'a', 'b', 'c', 'd' ]

//Reverse Array 
let reversedArray = stringToArray.reverse()
console.log("Reversed Array: ",reversedArray);        //[ 'd', 'c', 'b', 'a' ]

// Array to String
console.log("ArrayToString: ",stringToArray.join(""));//dcba

// reverse a string
let reversedString = str.split("").reverse().join("")//dcba
console.log(reversedString);

//toggle value
function toggle(mode){
    return !mode
}
console.log(toggle(true))

//map function in js 
// Input:
// arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
// arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Charlie" }]

// Output:
// [
// { id: 1, name: "Alice" },
// { id: 2, name: "Bob", age: 30},
// { id: 3, name: "Charlie" }
// ]
let arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
let arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Charlie" }]

function mergeArr(arr1=[],arr2=[]){
    const map = new Map();
    [...arr1,...arr2].map((e)=>{
        if(map.has(e.id)){
            map.set(e.id,{...map.get(e.id),...e})
        }else{
            map.set(e.id,{...e})
        }
    })

    return [...map.values()]
}
console.log(mergeArr(arr1,arr2));

//Create an array of a given size/Fixed size
const size = 5;
const arr = Array.from({ length: size });
//Also fill all index with 0 using .fill()
console.log(arr.fill(0));

//Render given size stars using a loop ★★★★★ 
Array.from({ length: size }).forEach((_, i) =>       
    console.log("★")
);





