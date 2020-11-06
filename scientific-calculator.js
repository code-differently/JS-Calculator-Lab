console.log("hellfdsafdsao");

let classes = document.getElementsByClassName("row");
for (let i = 0; i < classes.length; i++) {
  let existingHTML = classes[i].innerHTML;
  let newHTML = "<p>wow</p>";
  classes[i].innerHTML = newHTML + existingHTML;
}