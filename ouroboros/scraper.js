const puppeteer = require('puppeteer');


  getTopNWords(window.location.href,5);
  //getTopNWords('https://www.facebook.com/help/instagram/196883487377501',10);
  //getTopNWords('https://www.snap.com/en-US/privacy/privacy-policy',10);
  defineWords();

  function getURL() {
    return(window.location.href);
  }
  

  async function getTopNWords(url,n)
  {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/head');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();
        //var n = name.search("data"); //Contains all words from site
        //var split;
        //var result = string1.localeCompare(string2);  //Need to work on parsing the string
        //var text = name.search("data");

        // Find 'em!

    browser.close();

      var wordRegExp = /\w+(?:'\w{1,2})?/g;
      var words = {};
      var matches;
      while ((matches = wordRegExp.exec(name)) != null)
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
                wordList.push([word, words[word]]);
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
        topWords[i]= (i+1)+ ". "+topWords[i]+define(topWords[i]);
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

  async function defineWords() {
	const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/head');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();
        //var n = name.search("data"); //Contains all words from site
        //var split;
        //var result = string1.localeCompare(string2);  //Need to work on parsing the string
        //var text = name.search("data");

        // Find 'em!

    browser.close();

      var wordRegExp = /\w+(?:'\w{1,2})?/g;
      var words = {};
      var matches;
      while ((matches = wordRegExp.exec(name)) != null)
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
                wordList.push([word, words[word]]);
            }
          }
      }
       for (var i = 0; i < 5; i++)
       {
       wordList[i][0]=wordList[i][0]+define(wordList[i][0]);
       }
      wordList.sort(function(a, b) { return b[1] - a[1]; });

      var topWords = [];
      for (var i = 0; i < 5; i++)
      {
          topWords.push(wordList[i][0]);
      }
	  
	  var wordMeanings = [];
		for(var i=0;i<topWords.length;i++){
			}
	  
	  for(var i=0;i<wordMeanings.length;i++){
		  console.log(wordMeanings[i]);
		  console.log(wordMeanings[i]);
	  }
	  
	 // final = wordMeanings.split('  ');
	 // console.log({final});
	 // return final
  }