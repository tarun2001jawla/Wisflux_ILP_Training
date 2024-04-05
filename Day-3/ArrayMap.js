const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map((num) => {
    return num * 10;
})


console.log(newNumbers)

const newArr = numbers.map((num) => num * 10)
    .map((num) => num + 5)
    .filter((num) => num > 30)
console.log(newArr)