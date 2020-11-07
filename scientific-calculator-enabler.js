let scientificCalculatorActive = false;

window.addEventListener("resize", () => {
  if (document.body.clientWidth < 800) {
    console.log("now");  
  }
});

let scientificButton = document.querySelector("a");
  a.addEventListener("click", () => {
    scientificCalculatorActive = !scientificCalculatorActive;
    if (scientificCalculatorActive) {
      enableScientificCalculator();
    } else {
      disableScientificCalculator();
    }
});

function enableScientificCalculator() {
  let rows = document.getElementsByClassName("row");
  for (let row = 0; row < rows.length; row++) {
    let newHTML = getScientificButtons(row);
    let existingHTML = rows[row].innerHTML;
    rows[row].innerHTML = newHTML + existingHTML;
  }  
}

function disableScientificCalculator() {
  let scientificButtons = document.querySelectorAll(".scientific");
  for (let row = 0; row < scientificButtons.length; row++) {
    scientificButtons[row].remove();
  }  
}

function getScientificButtons(row) {
  switch(row) {
    case 0:
      return `
        <button class="scientific btn-light-gray">Rad</button>
        <button class="scientific btn-light-gray">Deg</button>
        <button class="scientific btn-light-gray">x!</button>
      `
    case 1:
      return `
        <button class="scientific btn-light-gray">Inv</button>
        <button class="scientific btn-light-gray">sin</button>
        <button class="scientific btn-light-gray">In</button>
      `
    case 2:
      return `
        <button class="scientific btn-light-gray">Pie</button>
        <button class="scientific btn-light-gray">cos</button>
        <button class="scientific btn-light-gray">log</button>
      `
    case 3:
      return `
        <button class="scientific btn-light-gray">e</button>
        <button class="scientific btn-light-gray">tan</button>
        <button class="scientific btn-light-gray">check</button>
      `
    case 4:
      return `
        <button class="scientific btn-light-gray">Ans</button>
        <button class="scientific btn-light-gray">EXP</button>
        <button class="scientific btn-light-gray">X^y</button>
      `
  }
}