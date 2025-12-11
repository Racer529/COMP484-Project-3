// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
toggleButton.setAttribute("data-action", "status-toggle");
// to add the required 'data-action' attribute.

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
// Task 9: Highlight list items
function highlightListItems() {
  const items = document.querySelectorAll("#item-list li");
  items.forEach(li => {
    // Change text color to blue
    li.style.color = "blue";
  });
}

// Run once on load
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
function toggleStatus(e) {
  e.preventDefault(); 
  statusOutput.classList.toggle("hidden");

  // Change mainTitle background color based on visibility of statusOutput
  if (!statusOutput.classList.contains("hidden")) {
    mainTitle.style.backgroundColor = "yellow";
    createTimestamp(); // Task 8: add timestamp
  } else {
    mainTitle.style.backgroundColor = "";
  }
}
function createTimestamp() { // Task 8: create and append timestamp
  const span = document.createElement("span"); // make a new span
  span.innerHTML = new Date().toLocaleTimeString(); // set its content to current time
  statusOutput.appendChild(span); // add it inside the status-output div
}

// here to handle the click event on the toggleButton [6, 7].
  toggleButton.addEventListener("click", toggleStatus);
/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
// Task 10: Flashing Timer
function startFlashing() {
  clearInterval(intervalId); // stop any existing interval first (prevents stacking)
  intervalId = setInterval(() => {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  clearInterval(intervalId);
}

// Event listeners for timerButton
// Single-click to start
timerButton.addEventListener("click", startFlashing);
// Double-click to stop
timerButton.addEventListener("dblclick", stopFlashing);