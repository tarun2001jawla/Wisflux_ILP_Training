function findTotal(...numbers:number[]){
    let total = 0;
    numbers.forEach((num)=>total+=num);
    return total;
}

console.log(findTotal());
console.log(findTotal(10,22));

console.log(findTotal(10,20,30,40,50));