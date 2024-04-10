//A tuple is an array with a fixed number of elements whose types are known.

let values : [string,number];
values = ["Tarun",21];
console.log(values)

let color : [number,number,number] = [255,0,0];
console.log(color[0])

//Optional Tuple Elements
 let optional : [number,string?,boolean?];
 optional = [1,"Tarun",true];
 console.log(optional);

 optional = [1,"Tarun"];
 console.log(optional);

 optional = [1];
 console.log(optional);



 function fn(a: string | number): any {
    if (typeof a === "string") {
      return true;
    } else if (typeof a === "number") {
      return false;
    }   
    return neverOccur();
  }

  let neverOccur = () => {
    throw new Error('Never!');
 } 

 console.log(fn(55))