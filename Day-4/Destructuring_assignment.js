let a ,b,rest;
[a,b] = [10,20];

console.log(a);
console.log(b);

[a,b,...rest] = [10,20,30,40,50,60];
console.log(rest);

let [firstName,lastName] = ["John","Doe"];
console.log(firstName);
console.log(lastName);

const [,two,,three,four,five] = ["apple", "banana", "orange", "strawberry", "kiwi"]; //we can skip the elements using ,
console.log(two);
console.log(three);

//object destructuring

let person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    occupation: "engineer"
  };

  let {name,age,gender,job} = person;

  console.log(name);
  console.log(age);
  console.log(gender);

 

  let{name2,age2,gender2, occupation} = {
    name2: "Jane Smith",
    age2: 25,
    gender2: "female",
    occupation: "teacher"
  };

  console.log(name2);
  console.log(age2);


  let person2 = {name1: "Sarah", country1: "Nigeria", job1: "Developer"}; 

  let name1,country1,job1;

  ({name1,country1,job1} = person2);
  console.log(name1);

  
  function person3({name: x, job: y} = {}) {
    console.log(x,y);
}
person3({name : "Tarun",job:"Web Dev"});
