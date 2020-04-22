/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (time) => {
  let [hour, minute] = time.split(":").map((n) => parseInt(n));
  if (hour <= 12) {
    return "Good Morning"
  } else {
    if (hour >= 17) {
      return "Good Evening"
    } else {
      return "Good Afternoon"
    }
  }
}
/* Write your implementation of displayMessage() */
const displayMessage = (message) => {
  let el = document.getElementById('greeting');

  el.innerText = message;
}