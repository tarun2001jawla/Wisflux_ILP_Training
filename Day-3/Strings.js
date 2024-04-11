const firstName = "John";
const lastName = "Doe";

const fullName = firstName+lastName; //string concat 
console.log( typeof fullName); //this will give us String 

console.log(`Hello my first name is ${firstName} and last name is ${lastName} `)

const string4 = new String("A String object");
console.log(`type of string is: ${typeof string4}`) //object 


//String methods
console.log(string4.charAt(5)) //gives character at given index 
//also
console.log(string4[5]) //same result 


const mystr = "THIS IS A UPPER CASE STRING";
console.log(mystr.toLowerCase())

console.log(string4.toUpperCase())

const a = "c";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
}
else{
    console.log("not less")
}

const city = String("Jaipur"); //string 
console.log(typeof city) 

const s1 = "2 + 2";
const s2 = new String("2+2")
const s3 = (eval(s1));
console.log(typeof s3)
const s4 = eval(s2)
console.log(typeof s4)

const strr = 'hello';
console.log(String.prototype.charAt.call(strr,0))