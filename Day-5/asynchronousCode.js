// Synchronous program

function sayHello(name) {
  console.log(`Hello my name is ${name}`);
}

const name = "Tarun";

sayHello(name); // Output: Hello my name is Tarun

let greet_one = "Hello";

let greet_two = "World!!!";

console.log(greet_one);

// A for loop that runs 1,000,000,000 times, but does not perform any operations
// This loop is used to simulate a long-running synchronous operation
for (let i = 0; i < 1000000000; i++) {}

console.log(greet_two);

// Async Program

let greeting1 = "Bonjour";
let greeting2 = "Monde!!!";

// Print the value of greeting1
console.log(greeting1);

// Set a timeout to print the string "Asynchronous" after 10 seconds
// This is an example of an asynchronous operation
setTimeout(function () {

  console.log("Asynchronous");
}, 10000); 


console.log(greeting2);
