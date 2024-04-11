let number = 50;
function print(){
   let square = number*number;
   

   if(number<60){
    var largeNumber = 80;
    let anotherNumber = 100;
    console.log(square);

   }
   console.log(largeNumber); //local variable
   console.log(anotherNumber); //block variable 
}

print();
console.log(largeNumber);

