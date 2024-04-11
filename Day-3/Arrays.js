const myArr = [10,20,30,40,50,true,"Tarun"];

console.log(myArr[1]);
console.log(typeof myArr); //typeof array is object 

const arr = new Array("Apple","banana","Orange");
console.log(arr[2]);

//Array methods
arr.push("Lemon"); //appends new item to end of array 
console.log(arr);

arr.pop(); //removes the last element of arr - lemon will be removed 
console.log(arr);

arr.unshift("Strwaberry") //adds a new element at start of array and shft the other elements 
console.log(arr);

arr.shift(); //removes the first elementfro array 
console.log(arr);

console.log(arr.includes("Apple")); //checks if arr contains a sepecific  element 
console.log(arr.indexOf('Orange')); //returns the index of a element if not present then returns -1 


const arr2 = arr.join(); //returns a new string by concatenating all of the elements of the  array,
console.log(arr2);


//slice 
const myArray = [1, 2, 3, 4, 5];

console.log("Original Array: ", myArray);

const slicedArray = myArray.slice(0, 3); // creates a shallow copy of the

console.log("Sliced array :", slicedArray);
console.log("Original Array: ", myArray);


const splicedArray = myArray.splice(0, 3);

console.log("Spliced array :", splicedArray);
console.log("Original Array: ", myArray);
