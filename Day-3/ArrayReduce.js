 const array1 = [1, 2, 3, 4];

 const initialVal = 0;

 const sum = array1.reduce((curr,next)=>{
    return curr+next;
 },initialVal)
console.log(sum)


const array2 = [10];
const val = 0;

const max = array2.reduce((max,curr)=>{
    console.log(`max:${max}`);
    console.log(`curr:${curr}`)
    return curr>max? curr:max;
},val)
console.log(max)




const shoppingCart = [
    { itemName: "T-shirt", price: 15.99 },
    { itemName: "Jeans", price: 29.99 },
    { itemName: "Shoes", price: 49.99 },
    { itemName: "Socks", price: 5.99 },
    { itemName: "Jacket", price: 59.99 },
    { itemName: "Dress", price: 39.99 }
  ];
  
  console.log(shoppingCart);
  
  const initialValue = 0;
  const totalBill = shoppingCart.reduce((acc,curr)=>{
    console.log(`acc:${acc} and curr:${curr.price}`);
            return acc+curr.price;
  },initialValue);

  console.log(totalBill)