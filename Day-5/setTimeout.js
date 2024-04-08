// This function logs "Hello World!" to the console after a delay of 3 seconds
function myFunction(){
    console.log("Hello World!");
}

// Set a timeout to call myFunction after 3 seconds
setTimeout(myFunction, 3000);

// Store the timeout ID for later use
const setTimeoutId  = setTimeout((name, role) => {
    // Log a message with the provided name and role after a delay of 2 seconds
    console.log(`Hello my name is ${name} and i am a ${role}`)
}, 2000, 'John Doe', 'Developer');

// Clear the timeout with the stored ID
clearTimeout(setTimeoutId);
console.log(`Timeout with id ${setTimeoutId} is cleared`);

// Nested setTimeout to log "tick tac toe" every second after an initial delay of 2 seconds
let timerId = setTimeout(function tick(){
    console.log("tick tac toe");
    timerId = setTimeout( tick, 1000); // Restart the timer every second
},2000); 

// Stop the interval
clearInterval(timerId);

// Log the time elapsed every 100ms, starting from the current time
let start = Date.now();
let times = [];

setTimeout(function run(){
    times.push( Date.now() - start); 
    if(start+100 < Date.now()) console.log('Times: ',times);
    else setTimeout(run);
})

// Log numbers from 'from' to 'to' every second
function printNumbers(from,to){
    let curr = from;

    let timerId   = setInterval(()=>{
        console.log(curr);
        if(curr === to){
            clearInterval(timerId);

        }
        curr++;
    },1000)
}

printNumbers(1,10);