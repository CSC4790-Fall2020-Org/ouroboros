function doIt() {
  alert("SUP BRITCHES");
}
function buttonTask() {
  doIt();
}

function clickHandler(e) {
  setTimeout(buttonTask, 0);
}

function main() {
  // Initialization work goes here.
}


$(document).ready(function() {
  $("button").click(function() {
    var sloth = $(this).attr('src');
    var script = 'var form = document.activeElement;' +
      + 'form.value = (form.value + " ' + sloth + '");';
    chrome.tabs.executeScript({code : script});
  });
});