// Arithmetic Operators
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log("Arithmetic Operators:");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Comparison Operators
let x = 5;
let y = 10;

console.log("\nComparison Operators:");
console.log("x =", x, "and y =", y);
console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);
console.log("x === y:", x === y);
console.log("x !== y:", x !== y);

// Logical Operators
let isLogged = true;
let isAdmin = false;

console.log("\nLogical Operators:");
console.log("isLogged && isAdmin:", isLogged && isAdmin);
console.log("isLogged || isAdmin:", isLogged || isAdmin);
console.log("!isLogged:", !isLogged);

// Assignment Operators
let a = 5;
let b = 10;

console.log("\nAssignment Operators:");
a += 5; // Equivalent to: a = a + 5;
b -= 3; // Equivalent to: b = b - 3;
console.log("a += 5:", a);
console.log("b -= 3:", b);

// Conditional (Ternary) Operator
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("\nConditional (Ternary) Operator:");
console.log("Can vote?", canVote);
