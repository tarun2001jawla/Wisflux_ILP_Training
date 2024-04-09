function resolveAfterSomeTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("resolved")
        },10000)
    });

    
}

async function asyncCall(){
    console.log("calling");
    const res = await resolveAfterSomeTime();
    console.log(res)
}

asyncCall();    



function asyncOperation1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Result of asyncOperation1")
        });
    });
};


function asyncOperation2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Result of asyncOperation2")
        });
    });
};


function asyncOperation3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Result of asyncOperation3")
        });
    });
};


//using promise chaining 
// asyncOperation1().then((result1)=>{
//     console.log(result1);
//     return asyncOperation2();  
// }).then((result2)=>{
//     console.log(result2);
//     return asyncOperation3();   //this will be passed as argument to the next then block
// }).then((result3)=>{
//     console.log(result3)
//    console.log("All operations completed successfully");

// }).catch((error)=>{
//     console.log(error);
// })

//using  async and await keywords to make this better 

async function executeAsyncOperations(){
    try{
        const result1 = await asyncOperation1(); // wait till it gets resolved
        console.log(result1); // prints "Result of asyncOperation1"

        const result2  = await asyncOperation2() ;
        console.log(result2); //prints "Result of asyncOperation2"
      
        const result3 = await asyncOperation3();
        console.log(result3); //prints "Result of asyncOperation3".

        console.log("All operations completed successfully");
    } 
    catch(error)
    {
        console.log("An error occurred:", error)
    }
}

executeAsyncOperations(); 