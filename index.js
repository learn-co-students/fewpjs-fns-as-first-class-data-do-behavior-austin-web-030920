/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
// function greet(time){
// // split time and capture first two numbers
// // var hour = time.split(":")
// var hour = parseInt(time)
// // if before 12 good morning
//   if (hour < 12) {
//   message = "Good Morning"
//   // else if 17 or later good evening
//   } else if (hour  >= 17) {
//   message = "Good Evening"
//   // else good afternoon
//   } else { 
//   message = "Good Afternoon"
//   }
// // return display message
// return displayMessage(message)
// }

// /* Write your implementation of displayMessage() */
// function displayMessage() {
//   const input = document.getElementById('time');
//   time.displayMessage('click',function(event){
//     alert(message)
//   });
// }

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

function greet(timeStr) {
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour >= 17) return "Good Evening"
  return "Good Afternoon"
}

