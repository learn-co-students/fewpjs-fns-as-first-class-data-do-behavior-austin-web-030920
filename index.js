/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let timeAsNum = Number(time.split(':').join(''));
  if (timeAsNum < 1200) {
    return "Good Morning";
  } else if (timeAsNum >= 1200 && timeAsNum <= 1700) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };
};
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = string
};
