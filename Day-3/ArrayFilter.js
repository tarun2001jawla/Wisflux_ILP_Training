const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const evens = myNumbers.filter((item) =>{
        return item%2==0;
});
console.log(evens);


const books = [
    { 
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishYear: 1960,
      edition: 1960
    },
    { 
      title: "Animal Farm",
      genre: "Dystopian",
      publishYear: 1949,
      edition: 1949
    },
    { 
      title: "The Great Gatsby",
      genre: "Fiction",
      publishYear: 1925,
      edition: 1925
    },
    { 
      title: "Harry Potter and the Philosopher's Stone",
      genre: "Fantasy",
      publishYear: 1997,
      edition: 1997
    },
    { 
      title: "Pride and Prejudice",
      genre: "Romance",
      publishYear: 1813,
      edition: 1813
    },
    { 
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publishYear: 1951,
      edition: 1951
    },
    { 
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishYear: 1960,
      edition: 1960
    },
    { 
      title: "Moby-Dick; or, The Whale",
      genre: "Adventure",
      publishYear: 1851,
      edition: 1851
    }
];
     
  

const userBooks =  books.filter((book)=>{
    return book.genre === "Romance";
})

console.log(userBooks);