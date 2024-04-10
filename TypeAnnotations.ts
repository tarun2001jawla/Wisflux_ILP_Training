// let variableName : type;
// let variableName : type = value;

let mark : Number;
mark = 100;
console.log(mark);

let name1 : String="John";
console.log(name1);



let age: number = 25;
let active: boolean = true;
console.log(age);
console.log(active);


//using type annotations for arrays
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
console.log(names);


//using type annotations for objects
let person: {
    name: string,
    age: number,
    hobbies:String[],
}
person = {
    name: 'John',
    age: 25,
    hobbies: ['Sports', 'Cooking']
}
console.log(person);


//using type annotations for functions
function add(a: number, b: number): number //return type 
 {
    return a + b;
}
console.log(add(10, 20));

// function annotation with parameter type annotation and return type annotation:
let sub : (x:number,y:number) =>number;

// assigning function to variable that has type annotation as number and return type annotation as number 
sub = function(x:number,y:number){
    return x - y;
}

console.log(sub(10,5));

// when you don't explicitly define the type of the variable, typescript will infer the type of the variable

let num = 10; //typescript will infer the type of the variable as number 
//let num : number = 10 both are same


let items:String[] = ["tarun","Hello"];
console.log(typeof items)
