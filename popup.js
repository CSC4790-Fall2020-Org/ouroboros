function scrapeThePage() {
  // Gets HTML of current tab
  var htmlCode = document.documentElement.innerHTML;
  //Scrper algorithm that parses all HTML code and content matches to our predetermined list of most important keywords
  var wordRegExp = /\w+(?:'\w{1,2})?/g;
    var words = {};
    var matches;
    while ((matches = wordRegExp.exec(htmlCode)) != null)
    {
        var word = matches[0].toLowerCase();
        if (typeof words[word] == "undefined")
        {
            words[word] = 1;
        }
        else
        {
            words[word]++;
        }
    }

    var wordList = [];
    for (var word in words)
    {
        if(word !=="false" && word !=="quot"){
          if (words.hasOwnProperty(word)) 
          {
              if (word = "data"){
                  wordList.push([word, words[word]]);
              }
          }
        }
    }
    wordList.sort(function(a, b) { return b[1] - a[1]; });

    var topWords = [];
    for (var i = 0; i < 5; i++)
    {
        topWords.push(wordList[i][0]);
    }

    for(var i=0;i<topWords.length;i++){
      topWords[i]= (i+1)+ ". "+topWords[i];
    }
    var stringOfKeywords = topWords.toString();
    function uppercase(str)
    {
      var array1 = str.split(' ');
      var newarray1 = [];

      for(var x = 0; x < array1.length; x++){
          newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
      }
      return newarray1.join(' ');
    }
    uppercase(stringOfKeywords);

    var lower = stringOfKeywords.replace(/,/g, ", ");
    final =lower.toUpperCase();
    console.log({final});
    return final;
}

document.addEventListener('DOMContentLoaded', () => {
  // Hook up #check-1 button in popup.html
  const fbshare = document.querySelector('#check-1');
  fbshare.addEventListener('click', async () => {
      // Get the active tab
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const tab = tabs[0];
      console.log(tab);
      // We have to convert the function to a string
      const scriptToExec = `(${scrapeThePage})()`;

      // Run the script in the context of the tab
      const scraped = await chrome.tabs.executeScript(tab.id, { code: scriptToExec });

      // Result will be an array of values from the execution
      // For testing this will be the same as the console output if you ran scriptToExec in the console
      alert(scraped[0]);
      //console.log(scraped[0]);
      //alert(tab);
  });
});