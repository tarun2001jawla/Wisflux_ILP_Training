// Function to toggle the class name of the text element
function flashText(){
  const textElement = document.getElementById('myDiv');
  textElement.className = textElement.className === "go"? "stop":"go";
}

// Variable to store the interval ID
let intervalId;

// Function to start changing the color of the text element
function changeColor(){
  if(!intervalId){
    intervalId = setInterval(flashText,1000);
  }
}

// Function to stop changing the color of the text element
function stopColor(){
  clearInterval(intervalId);
  intervalId = null;
}

// Add event listeners to the start and stop buttons
document.getElementById( 'start' ).addEventListener('click',changeColor);
document.getElementById( 'stop' ).addEventListener('click',stopColor);