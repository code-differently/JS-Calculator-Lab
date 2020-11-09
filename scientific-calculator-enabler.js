let scientificButtonsEnabled = false;
let standardButton = document.getElementById("standard-button");
let scientificButton = document.getElementById("scientific-button");

standardButton.addEventListener("click", () => {
  enableScientificButtons();
});

scientificButton.addEventListener("click", () => {
  enableScientificButtons();
});

function enableScientificButtons() {
  position = getPositionToActivate();
  // if (position == "left") {
  //   let scientificBtnLeft = document.querySelectorAll("scientific-btn-left");
  //   scientificBtnLeft.style.display = "block";
  // } else {
  //   let scientificBtnBottom = document.getElementsByClassName("scientific-btn-bottom");
  //   scientificBtnBottom.style.display = "block";
  // }
  let scientificBtnLeft = document.querySelectorAll(".scientific-btn-left");
  for (let i = 0; i < scientificBtnLeft.length; i++) {
    scientificBtnLeft[i].style.display = "block";
  }
}

function getPositionToActivate() {
  if (document.body.clientWidth < 1105) {
    return "left";
  } else {
    return "bottom";
  }
}
