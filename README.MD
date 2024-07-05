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
_ac7v xras4av xgc1b0m xat24cr xzboxd6
x1lliihq x1n2onr6 xh8yej3 x4gyw5p xfllauq xo2y696 x11i5rnm x2pgyrj