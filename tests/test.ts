import { expect, test } from '@playwright/test';

test('basic - renders as a centered row', async ({ page }) => {
  await page.goto('/');

  const element = page.getByTestId('basic');
  await expect(element).toHaveCSS('display', 'flex');
  await expect(element).toHaveCSS('align-items', 'center');
  await expect(element).toHaveCSS('justify-content', 'center');
});

test('start - renders with flex positions at the start', async ({ page }) => {
  await page.goto('/');

  const element = page.getByTestId('start');
  await expect(element).toHaveCSS('display', 'flex');
  await expect(element).toHaveCSS('align-items', 'flex-start');
  await expect(element).toHaveCSS('justify-content', 'flex-start');
});

test('column - renders with flex positions at the start', async ({ page }) => {
  await page.goto('/');

  const element = page.getByTestId('column');
  await expect(element).toHaveCSS('display', 'flex');
  await expect(element).toHaveCSS('flex-direction', 'column');
});

test('reverse - will apply proper reverse direction', async ({ page }) => {
  await page.goto('/');

  const element = page.getByTestId('reverse');
  await expect(element).toHaveCSS('display', 'flex');
  await expect(element).toHaveCSS('flex-direction', 'row-reverse');
});

test('will spread additional props', async ({ page }) => {
  await page.goto('/');

  const element = page.getByTestId('additionalProps');
  await expect(element).toHaveCSS('display', 'flex');
  await expect(element).toHaveAttribute('class', 'test-class');
  await expect(element).toHaveAttribute('data-foo', 'bar');
});
