/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {

  time = time.split(':')
  time.map(Number)
  
  if (time[0] < 12) {
    return "Good Morning"
  } else if (time[0] >= 12 && time[0] < 17) { 
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
