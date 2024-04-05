//Global Variable 

var number  = 50;

function findSquare(){
        var sqaure = number *number;
        console.log(sqaure);
}
console.log(number);
findSquare();

//Local Variable
function findCube(){
    var num = 3;
    var cube = num*num*num;
    console.log(cube);
}

findCube();
//console.log(num); this will give a ref error because num is  alocal variable 

//Hoisting
var a = 22;
console.log(a); // this will work 

console.log("Th value of b is ", b); // this will gve undefined 
var b = 15;

console.log(firstName);
let firstName = "Tarun";


