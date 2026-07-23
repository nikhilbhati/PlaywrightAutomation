import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
    test('should perform a specific functionality', async ({ page }) => {
        await page.goto('http://example.com');
        const title = await page.title();
        expect(title).toBe('Expected Title');
    });

    test('should check another functionality', async ({ page }) => {
        await page.goto('http://example.com/another-page');
        const element = await page.locator('selector-for-element');
        await expect(element).toBeVisible();
    });
});