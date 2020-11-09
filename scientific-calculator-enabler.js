let scientificCalculatorEnabled = false;
let standardButton = document.getElementById("a-button");
let scientificButton = document.getElementById("b-button");

// Disable scientific buttons
standardButton.addEventListener("click", () => {
  console.log("Standard button click");
  if (scientificCalculatorEnabled) {
    removeScientificButtons();
    scientificCalculatorEnabled = false;
  }
});

// Enable scientific buttons
scientificButton.addEventListener("click", () => {
  console.log("Scientific button clicked");
  if (!scientificCalculatorEnabled) {
    if (document.body.clientWidth < 1105) {
      addScientificButtonsToBottom();
    } else {
      addScientificButtonsToSide();
    }
    scientificCalculatorEnabled = true;
  }
});

// Makes buttons responsive:
// Moves scientific buttons to the left or bottom of the calculator depending on the screen's width.
window.addEventListener("resize", () => {
  if (scientificCalculatorEnabled) {
    if (document.body.clientWidth < 1105) {
      removeScientificButtons();
      addScientificButtonsToBottom();
    } else {
      removeScientificButtons();
      addScientificButtonsToSide();
    }
  }
});

// All scientific buttons have the .scientific class.
function removeScientificButtons() {
  let scientificButtons = document.querySelectorAll(".scientific");
  for (let i = 0; i < scientificButtons.length; i++) {
    scientificButtons[i].remove();
  }
}

// Creates 3 new buttons for every row
function addScientificButtonsToSide() {
  let rows = document.getElementsByClassName("row");

  if (rows.length > 5) {
    console.warn("There were more rows detected than expected.");
  }

  rows[0].innerHTML =
    `
    <button class="scientific btn-light-gray">Rad</button>
    <button class="scientific btn-light-gray">Deg</button>
    <button class="scientific btn-light-gray">x!</button>
  ` + rows[0].innerHTML;

  rows[1].innerHTML =
    `
    <button class="scientific btn-light-gray">Inv</button>
    <button class="scientific btn-light-gray">sin</button>
    <button class="scientific btn-light-gray">In</button>
  ` + rows[1].innerHTML;

  rows[2].innerHTML =
    `
    <button class="scientific btn-light-gray">Pie</button>
    <button class="scientific btn-light-gray">cos</button>
    <button class="scientific btn-light-gray">log</button>
  ` + rows[2].innerHTML;

  rows[3].innerHTML =
    `
    <button class="scientific btn-light-gray">e</button>
    <button class="scientific btn-light-gray">tan</button>
    <button class="scientific btn-light-gray">check</button>
  ` + rows[3].innerHTML;
  rows[4].innerHTML =
    `
    <button class="scientific btn-light-gray">Ans</button>
    <button class="scientific btn-light-gray">EXP</button>
    <button class="scientific btn-light-gray">X^y</button>
  ` + rows[4].innerHTML;
}

// Creates 5 new rows and adds buttons to them.
function addScientificButtonsToBottom() {
  let calcContainer = document.getElementById("calc-container");
  calcContainer.innerHTML += `
    <div class="scientific">
      <button class="scientific btn-light-gray">Rad</button>
      <button class="scientific btn-light-gray">Deg</button>
      <button class="scientific btn-light-gray">x!</button>
    </div>
    
    <div class="scientific">
      <button class="scientific btn-light-gray">Inv</button>
      <button class="scientific btn-light-gray">sin</button>
      <button class="scientific btn-light-gray">In</button>
    </div>
    
    <div class="scientific">
      <button class="scientific btn-light-gray">Pie</button>
      <button class="scientific btn-light-gray">cos</button>
      <button class="scientific btn-light-gray">log</button>
    </div>
    
    <div class="scientific">
      <button class="scientific btn-light-gray">e</button>
      <button class="scientific btn-light-gray">tan</button>
      <button class="scientific btn-light-gray">check</button>
    </div>
    
    <div class="scientific">
      <button class="scientific btn-light-gray">Ans</button>
      <button class="scientific btn-light-gray">EXP</button>
      <button class="scientific btn-light-gray">X^y</button>
    </div>
  `;
}
