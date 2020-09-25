const puppeteer = require('puppeteer');


  getTopNWords('https://twitter.com/en/privacy',10);
  //getTopNWords('https://www.facebook.com/help/instagram/196883487377501',10);
  //getTopNWords('https://www.snap.com/en-US/privacy/privacy-policy',10);

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
          if (words.hasOwnProperty(word))
          {
              wordList.push([word, words[word]]);
          }
      }
      wordList.sort(function(a, b) { return b[1] - a[1]; });

      var topWords = [];
      for (var i = 0; i < n; i++)
      {
          topWords.push(wordList[i][0]);
      }
      console.log({topWords});
      //return topWords;
  }
