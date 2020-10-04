function doIt() {
  alert("Ouroboros has scanned the page\nWe've highlighted instances of \"data,\" \"person-,\" and \"priv-\"");
}
function awesomeTask() {
  doIt();
}

function clickHandler(e) {
  setTimeout(awesomeTask, 0);
}

function main() {
  // Initialization work goes here.
}


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  main();
});
