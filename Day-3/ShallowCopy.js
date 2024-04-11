// const foodItems = [
//      "Pizza",
//      "Burger",
//      "Oats",
//      {Noodles : ['Maggie','Yipee']},

// ];
// console.log("Original array is:",foodItems);
// const newItem =  Array.from(foodItems)
// console.log("Copy of original array is",newItem);

// newItem[3].Noodles = ["Atta Noodles","Maida Noodels"]; //Re-assigning the value of a nested property will be visible in both objects
// console.log(newItem);

// console.log(foodItems) 

// newItem[2] = "Pasta"; // Re-assigning the value of a top-level property will only be visible in the changed object.
// console.log(newItem);
// console.log(foodItems)


//creating a object 

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    owner: {
      name: "Alice",
      age: 35,
      address: {
        street: "456 Oak St",
        city: "Los Angeles",
        zipCode: "90001"
      }
    },
    features: ["GPS", "Bluetooth", "Backup Camera"]
  };
  
 

 const car2 = Object.assign({},car)


 car2.brand = "Ford";
 car2.model = "Endeavour";
 console.log("original car object:",car);
 console.log("Copy of car object",car2);

  car2.owner.name = "John";

  console.log("Copy of car object",car2);
  console.log("original car object:",car);


 
  