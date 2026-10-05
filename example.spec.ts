import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder("Username").fill("locked_out_user")
  await page.getByPlaceholder("Password").fill("secret_sauce")
  await page. getByRole ("button", {name:"Login"}).click()
  // Expect a title "to contain" a substring.
  await expect(page.locator('[data-test="title"]'),"No se visualiza los productos").toBeVisible();
 
});


