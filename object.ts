let employee: {
  name: string;
  age: number;
  salary: number;
  job: string;
};
employee = {
  name: "Jane",
  age: 23,
  salary: 20000,
  job: "developer",
  //city : "Pune",  // error : city is not present in the object employee
};

console.log(employee);

//we can combine the both

const person2: {
  name: string;
  age: number;
  city: string;
  isAdmin: boolean;
  salary: number;
  job: string;
} = {
  name: "John",
  age: 30,
  city: "New York",
  isAdmin: false,
  salary: 50000,
  job: "Software Developer",
};

person2.age = 56;
person2.city = "Pune";


console.log(person2);

let marks2 : Object;

marks2 = {
     maths : 90,
     science : 80,
     english : 70
    
}
console.log((marks2 as any).maths)



let vacant: {} = {};

console.log(vacant.toString());