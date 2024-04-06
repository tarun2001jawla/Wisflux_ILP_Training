let num1 = 10;
let num2 = num1;

console.log(num1);
console.log(num2);

num1 = 20;
console.log(num1);
console.log(num2);

function multiplyByTwo(number) { //function makes a copt of he variable num and assigns to number 
    number =  number * 2;
    return number;
}
let num = 30;
let res = multiplyByTwo(num);
console.log(num) //value of num remains unchanged 
console.log(res);


//pass by reference 
const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2021
};



let car2 = car1;
console.log(car1);
console.log(car2);

car1.year = 2018; //changing the value in car1 also change it in car2 as its non primitive 

console.log(car1);
console.log(car2);


const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publicationYear: 1925
};

console.log('Book object is:',book);


function changeGenre(tempBook){
       tempBook.genre = "Romance";
       return tempBook.genre;
};

console.log(book["genre"]);
changeGenre(book);
console.log(book["genre"]); //also changes the value in original obj 
console.log('Book object is:',book);


const techCompanies = ["Google", "Apple", "Microsoft", "Amazon", "Facebook"];

function pushElement(newArray){
      newArray.push("Wisflux Tech Labs");
     return newArray;
}

console.log(techCompanies);
pushElement(techCompanies);
console.log(techCompanies);



