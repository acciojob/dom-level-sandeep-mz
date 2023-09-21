//your JS code here. If required.

// Find the target element by its id
const targetElement = document.getElementById('level');

// Initialize a variable to keep track of the DOM level
let domLevel = 0;

// Traverse the DOM tree upwards from the target element
let currentElement = targetElement;
while (currentElement && currentElement.tagName !== 'HTML') {
    // Move to the parent element
    currentElement = currentElement.parentElement;
    // If a parent element exists and it's not the root HTML element, increment the DOM level
    if (currentElement && currentElement.tagName !== 'HTML') {
        domLevel++;
    }
}

// Display the DOM level using an alert
alert(`The level of the element is: ${domLevel}`); 
