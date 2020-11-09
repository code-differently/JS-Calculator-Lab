let scientificButtonsEnabled = false;
let standardButton = document.getElementById("standard-button");
let scientificButton = document.getElementById("scientific-button");

standardButton.addEventListener("click", () => {
  toggleScientificButtons(false);
});

scientificButton.addEventListener("click", () => {
  toggleScientificButtons(true);
});

function toggleScientificButtons(enable) {
  let className = getClassToActivate();
  let scientificButtons = document.querySelectorAll(className);
  let displayProperty = getNewDisplayProperty(enable);
  for (let i = 0; i < scientificButtons.length; i++) {
    scientificButtons[i].style.display = displayProperty;
  }
}

function getClassToActivate() {
  if (document.body.clientWidth < 1105) {
    return ".scientific-btn-bottom";
  } else {
    return ".scientific-btn-left";
  }
}

function getNewDisplayProperty(enable) {
  if (enable) {
    return "block";
  }
  return "none";
}
