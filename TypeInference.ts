// when you don't explicitly define the type of the variable, typescript will infer the type of the variable

let num = 10; //typescript will infer the type of the variable as number 
//let num : number = 10 both are same


let items:String[] = ["tarun","Hello"];
console.log(typeof items);

//typescript will infer the type of the variable as number[]
let items2 = [0, 1, null, 'Hi'];
console.log(items2);

let items3 = [0, 1, null, 'Hi']; //typescript will infer the type of the variable as (number | string)[]


let firstName :string;
firstName = String("Tarun");
let lastName : string = "jawla";
let age2 : number = 12;
let userData: string;
userData = `My name is ${firstName} ${lastName} and I am ${age2} years old`;

console.log(firstName);
console.log(lastName);
console.log(userData);