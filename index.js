const puppeteer = require("puppeteer");
const fs = require('fs');
// const url = "https://www.instagram.com/p/C5lecH8NqJS/";
const url = "https://www.instagram.com/bakchod_gang1/";
// const url = "https://books.toscrape.com/";

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    url,
    /* until page loads */
    { waitUntil: "networkidle2" }
  );
  // evaluate() takes all the code from the screen and create a document
  const Scrapper = await page.evaluate((url) => {
    const posts = Array.from(
      document.querySelectorAll(
        ".x1lliihq .x1n2onr6 .xh8yej3 .x4gyw5p .xfllauq .xo2y696 .x11i5rnm .x2pgyrj"
      )
      // document.querySelectorAll(".product_pod")
    );
    const postData = posts.map((post) => ({
        title: post.querySelector('h3 a').getAttribute('title'),
        price: post.querySelector('.price_color').innerText,
        imgSrc: url + post.querySelector('img').getAttribute('src')
    }))
    return postData;
  }, url);
  console.log("Completed");
  await browser.close();

  fs.writeFile('post.json', JSON.stringify(Scrapper), (err) => console.log(err))

};
main();
