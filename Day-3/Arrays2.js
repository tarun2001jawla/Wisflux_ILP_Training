const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Superman", "Batman", "Wonder Woman", "The Flash", "Aquaman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// const heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes)

const allheroes = [...dcHeroes,...marvelHeroes]; 
console.log(allheroes)


const nestedArray = [10,20,
    [1, 2, 3],
    [4, 5, 6],
    [
      [7, 8],
      [9, 10]
    ]
  ];
  
  console.log(nestedArray);

  const flattenedArray = nestedArray.flat(Infinity);
  console.log(flattenedArray);
  