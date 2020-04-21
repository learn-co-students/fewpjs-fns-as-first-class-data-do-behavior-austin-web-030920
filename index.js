/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(string){
// split time and capture first two numbers
var hour = string.split(":")
// if before 12 good morning
  if (hour[0] < 12) {
  message = "Good Morning"
  // else if 17 or later good evening
  } else if (hour[0]  >= 17) {
  message = "Good Evening"
  // else good afternoon
  } else { 
  message = "Good Afternoon"
  }
// return display message
return displayMessage(message)
}

/* Write your implementation of displayMessage() */
function displayMessage() {
  const input = document.getElementById('time');
  time.addEventListener('click',function(event){
    alert(message)
  });
}