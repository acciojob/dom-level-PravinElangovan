//your JS code here. If required.
var element = document.getElementById("level");

// Initialize a counter variable to keep track of the DOM level
var level = 0;

// Use a loop to climb up the DOM tree and count the levels
while (element) {
  level++;
  element = element.parentNode;
}

// Display the result using an alert box
alert("The level of the element is: " + level);
