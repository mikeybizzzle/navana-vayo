import { test, expect } from '@playwright/test';

test.describe('Basic Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Vayo/);
  });

  test('Hero section displays correctly', async ({ page }) => {
    const heading = page.getByRole('heading', {
      name: /business travel.*expense management/i
    });
    await expect(heading).toBeVisible();

    const demoButton = page.getByRole('button', { name: /get a demo/i }).first();
    await expect(demoButton).toBeVisible();
  });

  test('Navigation header is visible', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();

    const logo = page.getByText('Vayo').first();
    await expect(logo).toBeVisible();
  });

  test('Features section displays all feature cards', async ({ page }) => {
    // Scroll to features section
    const featuresHeading = page.getByRole('heading', {
      name: /everything you need/i
    });
    await featuresHeading.scrollIntoViewIfNeeded();
    await expect(featuresHeading).toBeVisible();

    // Check that feature cards are visible
    const featureCards = page.locator('section').filter({
      has: featuresHeading
    }).locator('[class*="group"]');

    const count = await featureCards.count();
    expect(count).toBeGreaterThanOrEqual(6); // Should have 6 feature cards
  });

  test('Footer displays correctly', async ({ page }) => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    // Check for social links
    const socialLinks = footer.locator('a[aria-label]');
    const count = await socialLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('CTA buttons are interactive', async ({ page }) => {
    const primaryButton = page.getByRole('button', { name: /get a demo/i }).first();

    await primaryButton.hover();
    await expect(primaryButton).toBeVisible();

    // Check button has hover effects (via classes)
    const classes = await primaryButton.getAttribute('class');
    expect(classes).toContain('transition');
  });

  test('Page has no console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    expect(errors.length).toBe(0);
  });

  test('Images load properly', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      if (await img.isVisible()) {
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        expect(naturalWidth).toBeGreaterThan(0);
      }
    }
  });

  test('All sections are present', async ({ page }) => {
    const sections = page.locator('section');
    const count = await sections.count();

    // Should have at least: Hero, LogoCloud, Features, ValueProp, Testimonials, CTA
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test('Scroll animations work', async ({ page }) => {
    // Check an element that should animate on scroll
    const featuresSection = page.getByRole('heading', {
      name: /everything you need/i
    });

    await featuresSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    await expect(featuresSection).toBeVisible();
  });
});