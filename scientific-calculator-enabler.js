let scientificButtonsEnabled = false;
let standardButton = document.getElementById("standard-button");
let scientificButton = document.getElementById("scientific-button");

standardButton.addEventListener("click", () => {
  disableScientificButtons();
});

scientificButton.addEventListener("click", () => {
  enableScientificButtons();
});

function enableScientificButtons() {
  let className = getClassToActivate();
  let scientificButtons = document.querySelectorAll(className);
  for (let i = 0; i < scientificButtons.length; i++) {
    scientificButtons[i].style.display = "block";
  }
}

function disableScientificButtons() {
  let className = getClassToActivate();
  let scientificButtons = document.querySelectorAll(className);
  for (let i = 0; i < scientificButtons.length; i++) {
    scientificButtons[i].style.display = "none";
  }
}

function getClassToActivate() {
  if (document.body.clientWidth < 1105) {
    return ".scientific-btn-bottom";
  } else {
    return ".scientific-btn-left";
  }
}
