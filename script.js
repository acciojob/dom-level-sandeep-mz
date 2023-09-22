const targetElement = document.getElementById('level');

// Initialize a variable to keep track of the DOM level
let domLevel = 1;
 
while (true) {
    // If a parent element exists and it's not the root HTML element, increment the DOM level
    if (targetElement.tagName === 'HTML') {
        break;
    }
    targetElement = targetElement.parentNode;
    domLevel++;
}
// Display the DOM level using an alert
alert(`The level of the element is: ${Level}`); 