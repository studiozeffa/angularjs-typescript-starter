import {Page} from 'puppeteer';

const testTimeout = 30000;

describe('/ (Home Page)', () => {
  let page: Page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    await page.goto('http://localhost:8080');
  }, testTimeout);

  afterAll(async () => {
    await page.close();
  });

  it(
    'should boot to loading page',
    async () => {
      let text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('Loading');
    },
    testTimeout
  );

  it(
    'should display the xkcd image after it has loaded',
    async () => {
      await page.waitForSelector('[data-e2e=comic-img]');
      const imgSource = await page.$eval('[data-e2e=comic-img]', (el: HTMLImageElement) => el.src);
      expect(imgSource).toContain('https://imgs.xkcd.com/comics');
    },
    testTimeout
  );

  it(
    'should display a different image after the button was clicked',
    async () => {
      await page.waitForSelector('[data-e2e=comic-img]');
      const imgSource1 = await page.$eval('[data-e2e=comic-img]', (el: HTMLImageElement) => el.src);

      // Click randomiser button
      await page.click('[data-e2e=comic-btn] button');

      // Wait for new image
      await page.waitForSelector('[data-e2e=comic-img]');
      const imgSource2 = await page.$eval('[data-e2e=comic-img]', (el: HTMLImageElement) => el.src);

      expect(imgSource2).toContain('https://imgs.xkcd.com/comics');

      expect(imgSource1).not.toEqual(imgSource2);
    },
    testTimeout
  );
});
