// Create a new promise that resolves after a 4-second delay with a value of 10
new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(10)
    }, 4000);
})
// When the first promise resolves, log the value to the console and return a new promise
.then(function(res){
    console.log(res);
    return new Promise(function (resolve,reject) {
        // This promise resolves after a 3-second delay with a value of 3 times the previous value
        setTimeout(() => {
            resolve(res*3);
            
        },3000);
    });
})
// When the second promise resolves, log the value to the console and return a new promise
.then(function(res){
    console.log(res);
    return new Promise(function  (resolve,reject) {
        // This promise resolves after a 2-second delay with a value of 3 times the previous value
        setTimeout(() => {
            resolve(res*3);
        },2000);
    });
})
// When the third promise resolves, log the value to the console and return a new promise
.then(function (res){
    console.log(res);
    return new Promise(function (resolve,reject){
        // This promise resolves after a 1-second delay with a value of 3 times the previous value
        setTimeout(() => {
            resolve(res*3);
        },1000);
    });
})
// When the fourth promise resolves, log the value to the console
.then(function (res){
    console.log(res);
});