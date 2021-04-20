
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
    //appedns definitions to the words
     function define(toDefine){
        var text=""
        switch(toDefine.toUpperCase())
    	{
    	    case "LOCATION":
    	        text= ": The company will save and use your location";
    	        break;
    	    case "DATA":
    	        text= ": The company will keep track of what you've written or posted";
    	        break;
    	    case "PRIVACY":
      	        text= ": The company will not share your information with other users";
      	        break;
    	    case "THIRD-PARTY":
    	        text= ": The company will share your information with affiliated third-parties";
    	        break;
    	    case "SELL":
    	        text= ": The company will provide your information to other companies in exchange for money or services";
    	        break;
    	    case "ACCESS":
    	        text= ": The company reserves the right to go through any documents, photos, or similar materials you have saved \n";
    	        break;
    	    case "PERSONAL":
    	        text= ": The company has access to and can use your personal data and propoerties";
    	        break;
    	    case "PAYMENT":
    	        text= ": There are optional purchases the company is keeping track of";
    	        break;
            default:
                   text= "";
                    break;
    	}
    	return text;
      }

    var wordList = []; // this should be the regex to search over but dont know how that changes the search
    for (var word in words)
    {
        if(word !=="false" && word !=="quot"){
          if (words.hasOwnProperty(word))
          {
              if (word == "data" || word == "privacy" || word == "personal"
              || word == "location"|| word == "sell" || word == "private" || word == "payment"
              || word == "access"|| word == "sell" || word == "private" || word == "payment"){
                  wordList.push([word.toUpperCase(), words[word]]);
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
      topWords[i]= (i+1)+ ". "+topWords[i]+define(topWords[i])+"\n";
    }
    var stringOfKeywords = topWords.toString();
//    function uppercase(str)
//    {
//      var array1 = str.split('\n');
//      var newarray1 = [];
//
//      for(var x = 0; x < array1.length; x++){
//          newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//      }
//      return newarray1.join('\n');
//    }
//    uppercase(stringOfKeywords);

    var lower = stringOfKeywords.replace(/,/g, "");
//    final =lower.toUpperCase();
    console.log({lower});
    return lower;
}

document.addEventListener('DOMContentLoaded', () => {
 
  const fbshare = document.querySelector('#check-1');
  fbshare.addEventListener('click', async () => {
      // Get the active tab
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const tab = tabs[0];
      console.log(tab);
      //  Convert function to a string
     const scriptToExec = `(${scrapeThePage})()`;


           // Run the script
           const scraped = await chrome.tabs.executeScript(tab.id, { code: scriptToExec });


      alert(scraped[0]);
  });
});