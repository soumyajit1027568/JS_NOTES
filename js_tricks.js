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



