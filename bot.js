const puppeteer = require('puppeteer')

const bot = async () => {
	const browser = puppeteer.launch({
		// executablePath: '/C:/Program Files/Google/Chrome/Application/chrome.exe',
		headless: true, 
		// slowMo: 500, 
		args: ['--no-sandbox']})
	const page = await browser.newPage()
	// await page.setDefaultNavigationTimeout(0);
	/*await page.goto('http://example.com/')
	await page.waitForSelector('h1')
	await page.screenshot({path: 'example.png'})*/
	
	/*await page.goto('https://google.com')
	await page.type('#searchInput', 'cat', {delay: 200})
	await page.click('#searchButton', {clickCount: 1})
	await page.waitForSelector('#footer-info-lastmod')*/

	/*const subTittle = await page.$eval('.mw-headline', element => element.textContent)
	console.log("Text :"+subTittle)*/

	// await page.goto('https://www.tradingview.com/')
	// body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent > div.widgetbar-page.active > div.widget-_I5Xtw7b.widgetbar-widget.widgetbar-widget-watchlist > div.widgetbar-widgetbody > div > div.content-kWDrsMbN > div > div > div.listContainer-zol_jClG > div > div:nth-child(3) > div
	// const a = document.querySelector("body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent")// >';// div.widgetbar-page';// > div.widget-_I5Xtw7b.widgetbar-widget.widgetbar-widget-watchlist > div.widgetbar-widgetbody > div > div.content-kWDrsMbN > div > div > div.listContainer-zol_jClG > div > div > div';
	// await page.click(a, {clickCount: 1})
	// await page.click('.bar-cbCWDq_M', {clickCount: 1})icon-uO7HM85b
	// await page.click('button[data-main-menu-root-track-id="products"]', {clickCount: 1})
	// <div role="button" data-main-menu-root-track-id="products">Products</div>
	/*const [button] = await page.$x("//div[contains(., 'Button text')]");
	if (button) {
	    await button.click();
	}*/

	/*const a = await page.evaluate(() => {
      	document.querySelector('body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent > div.widgetbar-page.active > div.widget-_I5Xtw7b.widgetbar-widget.widgetbar-widget-watchlist > div.widgetbar-widgetbody > div > div.content-kWDrsMbN > div > div > div.listContainer-zol_jClG > div > div:nth-child(3) > div').click()
    })	*/
	// await page.setViewport({ width: 1866, height: 768})
	await page.goto('https://www.tradingview.com/chart/', {
		waitUntil: 'networkidle2'
	})
	console.log("Open trading view chart")
	await page.waitForSelector('body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent > div.widgetbar-page.active > div.widget-_I5Xtw7b.widgetbar-widget.widgetbar-widget-watchlist > div.widgetbar-widgetbody > div > div.content-kWDrsMbN > div > div > div.listContainer-zol_jClG > div > div:nth-child(3) > div')
	console.log("wait until the selectors are loaded")
	await page.setDefaultNavigationTimeout(0);
	await page.click('body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent > div.widgetbar-page.active > div.widget-_I5Xtw7b.widgetbar-widget.widgetbar-widget-watchlist > div.widgetbar-widgetbody > div > div.content-kWDrsMbN > div > div > div.listContainer-zol_jClG > div > div:nth-child(3) > div', {clickCount: 1})
	console.log("Click data SPX")
	await page.waitForSelector('.layout__area--center')
	const element = await page.$('.layout__area--center')
	await element.screenshot({path: './imgg.png'})
	console.log("Take screenshot")
	await browser.close()
	return 'Done'
}

module.exports = bot;