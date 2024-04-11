if (" ") {
    console.log("Truthy"); // Output: Truthy
} else {
    console.log("Falsy");
}

console.log(5 || 0); // Output: 5
console.log(0 || 5); // Output: 5

//if left side is truthy, it will return left side
//if left side is falsy, it will return right side
console.log(true || true);    //Output: true
console.log(true || false);  //Output: true
console.log(false || true);  //Output: true
console.log(false || false); //Output: false

// && operator (AND) - both sides need to be true for the whole expression to be true
// if left side is truthy, it will return right side
// if left side is falsy, it will return left side

console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && true);// Output: false
console.log(false && false);// Output: false


console.log(0|| 1); 
console.log(1&& 10)