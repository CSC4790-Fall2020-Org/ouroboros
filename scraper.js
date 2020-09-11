const puppeteer = require('puppeteer');

async function scrapeKeywords(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/main');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();
    var n = name.search("data"); //Contains all words from site
    //var split;
    //var result = string1.localeCompare(string2);  //Need to work on parsing the string
    browser.close();
    console.log({n}); //
    return {n}

}
scrapeKeywords('https://twitter.com/en/privacy'); //Inputing webpage for now but will auto grab it 
