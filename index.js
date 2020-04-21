/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

  function greet(time) {
    const timeNumVal = parseInt(time.split(':', 1)) 
    if (timeNumVal < 12){
    return 'Good Morning'
    } else if (timeNumVal > 12 && timeNumVal < 17) {
      return 'Good Afternoon'
    } else {
      return 'Good Evening'
    }
  }
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
  function displayMessage(test){
    let content = document.getElementById('greeting')
    content.innerText = test
  }