import { test, expect } from '@playwright/test';
test('Add to Cart and Checkout', async ({ page }) => {
  //Load the page
  await page.goto('https://www.saucedemo.com');
  await page.waitForLoadState('networkidle');

  //Input username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  //Select items to add to cart
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#add-to-cart-sauce-labs-bike-light');
  await page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
  await page.click('#add-to-cart-sauce-labs-onesie');

  //Clicking the cart button
  await page.click('.shopping_cart_link');

  //Proceeds to checkout page
  await page.click('#checkout');

  //Input first name, last name, and postal code of the customer
  await page.fill('#first-name', 'Vanilla');
  await page.fill('#last-name', 'Skye');
  await page.fill('#postal-code', '1400');
  await page.click('#continue');
  
   //Finishing the checkout process
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});