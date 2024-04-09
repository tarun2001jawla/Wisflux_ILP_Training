// Resolved promises
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 2000);
  });
  
  // Rejected promises
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise 3 rejected");
    }, 1500);
  });
  
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise 4 rejected");
    }, 2500);
  });

  
//Promise.all()
Promise.all([promise1, promise2,promise3,promise4]).then((values)=>{
    console.log(values);
}).catch((reason)=>console.log(reason)); // output : promise 3 is rejected 


//Promise.allSettled()

const promises = [promise1,promise2,promise3,promise4]; 
Promise.allSettled(promises).then((result)=>{
    console.log(result) 
});


//Promise.any() 
Promise.any(promises)
.then((value)=>console.log(value)) // output: "Promise 1 resolved"
.catch((error)=>console.log(error)) 

//Promise.race()

Promise.race(promises)
.then((value)=>console.log(value))
.catch(err=>console.log('Error', err))