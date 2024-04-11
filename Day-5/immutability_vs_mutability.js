// Mutability Example

let myArray = [10,20,30,40,50];
console.log(myArray);

myArray.push(60)  // Add element to array using push() method
console.log(myArray);


// Immutability Example
let immutableString = "hello";
console.log("Original String: ",immutableString);

let originalString = immutableString;

immutableString+=" world"   // Adding string to the existing string

console.log("Modified immutableString:", immutableString);
console.log("Original string:", originalString) //  Outputs same as Original String because it is not


