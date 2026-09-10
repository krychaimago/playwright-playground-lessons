import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.playground.bondaracademy.com/pages/iot-dashboard');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
  await page.getByRole('textbox', { name: 'Jane Doe' }).fill('Anna K');
  await page.locator('form', { hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill('test@test1.pl');
  await page.getByText('Remember me').first().click();
  await page.locator('form', { hasText: 'Remember meSubmit' }).getByRole('button').click();
});