function isBiggerThan10(num){
      return num>10;
}
const arr = [10,12,8,55,3,0,1];

const res  = arr.some(isBiggerThan10);
console.log(res)

//we can use arrow functions too

const result = [1,,3,6,9].some((num)=>num%2==0);
console.log(result)