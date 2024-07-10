# Using PUPPETEER
***
**import the puppeteer**
```js
const puppeteer = require('puppeteer');
const url = '__some__url__';
const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2"}); // { waitUntil: "networkidle2"} wait till page loads
  await browser.close();
};
main();
```
post-3-horizontal-container: _ac7v xras4av xgc1b0m xat24cr xzboxd6
x1lliihq x1n2onr6 xh8yej3 x4gyw5p xfllauq xo2y696 x11i5rnm x2pgyrj
post-image: ".x5yr21d .xu96u03 .x10l6tqk .x13vifvy .x87ps6o .xh8yej3"
const puppeteer = require("puppeteer");
const url = "https://www.instagram.com/bakchod_gang1/";

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  await new Promise(resolve => setTimeout(resolve, 8000));

  const Scrapper = await page.evaluate(() => {
    const posts = Array.from(
      document.querySelectorAll(
        ".x1lliihq.x1n2onr6.xh8yej3.x4gyw5p.xfllauq.xo2y696.x11i5rnm.x2pgyrj"
      )
    );
    return posts.length;
  });
  await browser.close();
  console.log(Scrapper);
};
main();
