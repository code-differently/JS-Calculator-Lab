console.log("Initiating Script");

let classes = document.getElementsByClassName("row");
for (let row = 0; row < classes.length; row++) {
  let newHTML = getScientificButtons(row);
  let existingHTML = classes[row].innerHTML;
  classes[row].innerHTML = newHTML + existingHTML;
}

function getScientificButtons(row) {
  switch(row) {
    case 0:
      return `
        <button class="btn-light-gray">Rad</button>
        <button class="btn-light-gray">Deg</button>
        <button class="btn-light-gray">x!</button>
      `
    case 1:
      return `
        <button class="btn-light-gray">Inv</button>
        <button class="btn-light-gray">sin</button>
        <button class="btn-light-gray">In</button>
      `
    case 2:
      return `
        <button class="btn-light-gray">Pie</button>
        <button class="btn-light-gray">cos</button>
        <button class="btn-light-gray">log</button>
      `
    case 3:
      return `
        <button class="btn-light-gray">e</button>
        <button class="btn-light-gray">tan</button>
        <button class="btn-light-gray">check</button>
      `
    case 4:
      return `
        <button class="btn-light-gray">Ans</button>
        <button class="btn-light-gray">EXP</button>
        <button class="btn-light-gray">X^y</button>
      `
  }
}