// By default, scientific buttons have a class set to display: none.
// This script enables/disables them depending on the button pressed and the screen width.

let scientificButtonsEnabled = false;
let scientificButton = document.getElementById("scientific-button");
let standardButton = document.getElementById("standard-button");

scientificButton.addEventListener("click", () => {
  enableScientificButtons();
  scientificButtonsEnabled = true;
});

standardButton.addEventListener("click", () => {
  disableScientificButtons();
  scientificButtonsEnabled = false;
});

// Responsive: Moves buttons to the left or bottom of calculator depending on screen width.
window.addEventListener("resize", () => {
  if (scientificButtonsEnabled) {
    enableScientificButtons();
  }
});

// Enables buttons on the left or bottom depending on screen width.
function enableScientificButtons() {
  disableScientificButtons(); // Edge Case: Disable any existing buttons so left and bottom buttons are never active at the same time.
  let className = getClassToActivate();
  let scientificButtons = document.querySelectorAll(className);
  for (let i = 0; i < scientificButtons.length; i++) {
    scientificButtons[i].style.display = "block";
  }
}

function getClassToActivate() {
  if (document.body.clientWidth < 1105) {
    return ".scientific-btn-bottom";
  } else {
    return ".scientific-btn-left";
  }
}

function disableScientificButtons() {
  setDisplayToNone(document.querySelectorAll(".scientific-btn-left"));
  setDisplayToNone(document.querySelectorAll(".scientific-btn-bottom"));
}

function setDisplayToNone(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
}
