function doIt() {
  alert("SUP BRITCHES");
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