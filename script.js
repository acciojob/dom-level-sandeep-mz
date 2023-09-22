const targetElement = document.getElementById('level');

// Initialize a variable to keep track of the DOM level
let domLevel = 1;
let currentElement = targetElement; // Use a different variable

while (true) {
    if (currentElement.tagName === 'HTML') {
        break;
    }
    currentElement = currentElement.parentNode;
    domLevel++;
}

// Display the DOM level using an alert
alert(`The level of the element is: ${domLevel}`);
