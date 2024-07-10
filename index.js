const puppeteer = require("puppeteer");
const url = "https://www.instagram.com/bakchod_gang1/";

const main = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    await new Promise(resolve => setTimeout(resolve, 8000));

    const Scraper = await page.evaluate(() => {
      const posts = document.querySelectorAll("article > div > div > div > div");
      return posts.length;
    });

    await browser.close();
    console.log(Scraper);
  } catch (error) {
    console.error("Error:", error);
  }
};

main();
