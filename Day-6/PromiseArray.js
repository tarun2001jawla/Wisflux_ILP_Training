//promise.all() method 
//The Promise.all() method returns a promise that resolves when all of the passed in promises are resolved.

const promise1 = Promise.resolve(1);
const promise2 = 42;
const promise3  = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("foo"),100);
});
    Promise.all([promise1, promise2, promise3])
        .then(values => console.log(values))
        .catch(error => console.log("Error: ", error));  //Output: [1, 42, "foo"] 

   
//another example of using  Promise.all() method 
const p1 = Promise.reject(10); //rejecting any promises will reject all of these  promises too
const p2 = Promise.resolve("Hello");
const p3 =   new Promise((resolve,reject)=> {
                setTimeout(()=>{
                    resolve(50);
                },500)
            });
Promise.all([p1,p2,p3]).then((val)=>{
    console.log(val);     
})
.catch((err)=>{console.log('There was an Error')}) //  Output: There was an Error


