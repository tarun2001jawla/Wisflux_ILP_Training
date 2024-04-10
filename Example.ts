interface Product{
    id : Number,
    name : String,
    price : Number

};

function getProduct(id:Number): Product {
    return{
        id : id,
        name :`Awesome Gadget ${id}`,
        price : 99.5,
    }

}


const showProduct = (name:String,price:Number)=>{
    console.log(`The Product ${name} costs ${price}`);

}
const product = getProduct(1);
showProduct(product.name,product.price);
