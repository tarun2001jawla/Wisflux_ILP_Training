//impure functions in js

function addElement(arr, element) {
    arr.push(element)
    return arr;
}
const res = addElement([10,20,30,40],50);
console.log('Result: ',res);


const message = 'Hi there!';
function xyz(val){
      return `${message}${val}`;

}

console.log(`Message with value added : ${xyz(" How are you?")}`);