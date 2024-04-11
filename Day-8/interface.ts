interface Person {
  firstname: string;
  lastName: string;
}

function fullname(person: Person): string {
  return `${person.firstname}${person.lastName}`;
}
let john = {
  firstname: "tarun",
  lastName: "jawla",
};
console.log(fullname(john));

interface Product {
  productName: string;
  productPrice: number;
  productQty: number;
  

  
}
function getDetails(laptop:Product):string {
    return `${laptop.productName} ${laptop.productPrice} ${laptop.productQty}`;

  }

let laptop :  Product = {
  productName: "Dell",
  productPrice: 100000,
  productQty: 10,
};

console.log(getDetails(laptop))


//
interface Home{
   homeName:string;
   homePrice:number;
   readonly resident : {name:  string, age : number};
  
}

function wishBirthday(home:Home){
   console.log(`Happy Birthday ${home.resident.name}`);
   home.resident.age++;
}

function getDetails2(home:Home){
          console.log(`${home.homeName} ${home.homePrice} ${home.resident.name} ${home.resident.age} `) ;
          

}

let home : Home = {
  homeName: "Apartment",
  homePrice: 100000,
  resident: {
    name: "tarun",
    age: 20,
  },
};

wishBirthday(home);
getDetails2(home);


interface stringArray{
  [index:number] : string;

}
function getStringArray(): stringArray{
  return ["ram", "kumar", "yadav"];
};

const myarr : stringArray = getStringArray();
myarr[2] = "apple";

console.log(myarr[2]);


interface DataDictionary {
  [index: string]: string | number;
 
  size: string; 
  category: number; 
 
}


  

 

