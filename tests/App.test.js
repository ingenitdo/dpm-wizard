const { toMatchImageSnapshot } = require( 'jest-image-snapshot' );
const puppeteer = require( 'puppeteer' );
//@ts-ignore
expect.extend( { toMatchImageSnapshot } );

jest.setTimeout( 30000 );
const iPhone = puppeteer.devices['iPhone X'];
const customDiffConfig = { threshold: 0.2 };

it( 'home', async () => {
  await (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto( 'http://localhost:9000' );
    const screenshot_desktop = await page.screenshot();
    expect( screenshot_desktop ).toMatchImageSnapshot( {
      customDiffConfig: customDiffConfig,
      customSnapshotIdentifier: "home"
    } );

    // Mobile
    await page.emulate( iPhone );
    const screenshot_mobile = await page.screenshot();
    expect( screenshot_mobile ).toMatchImageSnapshot( {
      customDiffConfig: customDiffConfig,
      customSnapshotIdentifier: "home-mobile"
    } );

    await browser.close();
  })();
} );
