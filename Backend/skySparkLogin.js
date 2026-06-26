



// backend/skySparkLogin.js
const puppeteer = require("puppeteer");

// Use the SAME host your users will visit (cookie/session will be valid there)
const SKY_HOST = `${process.env.SKY_HOST}`;

async function loginToSkySpark(username, password) {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();

    await page.goto(`${process.env.SKY_HOST}/user/login`, { waitUntil: "networkidle2" });

    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);

    await Promise.all([
      page.click('input[type="submit"], button[type="submit"]'),
      page.waitForNavigation({ waitUntil: "networkidle2" })
    ]);

    const cookies = await page.cookies();
    const sessionCookie = cookies.find(cookie => cookie.name.includes("skyarc-auth"));

    if (!sessionCookie) throw new Error("Login failed - session cookie not found");

    return sessionCookie;
  } finally {
    await browser.close();
  }
}

module.exports = { loginToSkySpark };
