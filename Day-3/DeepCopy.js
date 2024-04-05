const array = [
    "apple",
    { 
      category: "fruits",
      properties: {
        color: "red",
        taste: "sweet"
      }
    }
  ];
  
  console.log("Original Array is:", array);
  
  const arrayCopy = JSON.parse(JSON.stringify(array)); // Create a deep copy of the array
  console.log("Copied array is:", arrayCopy);
  
  arrayCopy[1].properties.color = "pink"; // Update the color property in the copied array
  
  console.log("Copied array is:", arrayCopy);
  console.log("Original Array is:", array);
  