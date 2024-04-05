//object literal

const user = {
    name : "Tarun",
    "full name" : "tarun Jawla",
    age : 22,
    city : "Jaipur",
    country : "India",
};

//accessing objects 

console.log(user.name);
console.log(user["name"]);

console.log(user["full name"]);



user.greetings = function(){
    console.log("Hello");
}

user.greetings2 = function(){
    console.log(`hello from ${this.name} my age is ${this.age}`);
}

user.greetings();
user.greetings2();
console.log(user.greetings());
console.log(user.greetings2());

//singleton object 

const newUser =  new Object();
newUser.name =  "John Doe";
newUser.age = 25;
newUser.id = "123er56";
newUser.isLoggedin = false;

console.log(newUser);

const newObject = {
    email : "xyz@gmail.com",
    fullName : {
        firstName : "John",
        lastName :  "Doe",
    },
    favFood : ["apple","banana","pizza"],
    isLoggedin  : true,
    age : 35,

};

console.log(newObject);

const person = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "swimming", "hiking"],
    address: {
      street: "123 Main St",
      zipCode: "10001"
    },
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  // Accessing properties of the object
  console.log(person.name); // Output: John
  console.log(person.age); // Output: 30
  
  // Accessing nested object property
  console.log(person.address.street); // Output: 123 Main St
  
  // Accessing array elements
  console.log(person.hobbies[0]); // Output: reading
  
  // Calling a method of the object
  person.sayHello(); // Output: Hello, my name is John.


//merging objects 
  
const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e",6:"f"};

// const obj3 = obj1+obj2;
// console.log(obj3); 

//using object.assign to merge two obejcts
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

//uisng spread operator

const obj4 = {...obj1,...obj2};
console.log(obj4);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(person.hasOwnProperty('name'));
console.log(Object.hasOwn(person,'age'));