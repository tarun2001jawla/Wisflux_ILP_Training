//Number 

let a = 10;
console.log(a);

let b = 1.25;
console.log(b);

console.log(Infinity);

//Bigint (represent integer values larger than (253-1))

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

//String 

let name = "John";
console.log(`My name is ${name}`);


//boolean 
function isGreater(num,num1){
    return num>num1;
}

const res = isGreater(10,20);
const res1 = isGreater(20,5);

console.log(res,res1);

//Null
let age = null;

console.log(age);

//undefined

let c;
console.log(c);

const age2 = null;
console.log(age2);

console.log(typeof(age2));

let name1 = "Ilya";

console.log((`hello ${1}`));
