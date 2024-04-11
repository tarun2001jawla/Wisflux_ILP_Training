function add2(a:number, b:number):number {
    return a + b;
}
console.log(add2(10,2)); // 12 


let sub : (x:number,y:number) => number;
sub = function(a:number, b:number){
    return a - b;
}
console.log(sub(10,2)); // 8



//optional parameters 
function multiply(num1:number,num2:number,num3?:number) : number{
      if(typeof num3 !== 'undefined'){
        return num1 * num2 * num3;
      }
      else{
        return num1 * num2;

      }
}

console.log(multiply(10,2)); // 20
console.log(multiply(10,2,3)); // 60

//default parameters

function calculateFinalPrice(mrp: number, discount: number=5): number {
    const discountedPrice = mrp - (mrp * (discount / 100));
    return discountedPrice;
}

console.log(calculateFinalPrice(100)); //here, function takes default value of discount as 0.05
//or we can provide value of discount as any value we want
console.log(calculateFinalPrice(100,10));
