let str = "abcd"

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



