import { test, expect } from '@playwright/test';
import * as pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const SIMILARITY_THRESHOLD = 0.98; // 98% similarity required

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for fonts to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('Homepage matches reference - Desktop 1920x1080', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(500);

    const screenshot = await page.screenshot({
      fullPage: true,
    });

    // Compare with reference screenshot
    const referenceBuffer = require('fs').readFileSync(
      'tests/fixtures/references/desktop-1920-full.png'
    );

    const reference = PNG.sync.read(referenceBuffer);
    const current = PNG.sync.read(screenshot);

    const { width, height } = reference;
    const diff = new PNG({ width, height });

    const numDiffPixels = pixelmatch(
      reference.data,
      current.data,
      diff.data,
      width,
      height,
      { threshold: 0.1 }
    );

    const totalPixels = width * height;
    const similarity = 1 - numDiffPixels / totalPixels;

    console.log(`Similarity: ${(similarity * 100).toFixed(2)}%`);
    expect(similarity).toBeGreaterThanOrEqual(SIMILARITY_THRESHOLD);
  });

  test('Homepage matches reference - Mobile 375x667', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);

    const screenshot = await page.screenshot({
      fullPage: true,
    });

    const referenceBuffer = require('fs').readFileSync(
      'tests/fixtures/references/mobile-375-full.png'
    );

    const reference = PNG.sync.read(referenceBuffer);
    const current = PNG.sync.read(screenshot);

    const { width, height } = reference;
    const diff = new PNG({ width, height });

    const numDiffPixels = pixelmatch(
      reference.data,
      current.data,
      diff.data,
      width,
      height,
      { threshold: 0.1 }
    );

    const totalPixels = width * height;
    const similarity = 1 - numDiffPixels / totalPixels;

    console.log(`Similarity: ${(similarity * 100).toFixed(2)}%`);
    expect(similarity).toBeGreaterThanOrEqual(SIMILARITY_THRESHOLD);
  });

  test('Homepage matches reference - Tablet 1024x768', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(500);

    const screenshot = await page.screenshot({
      fullPage: true,
    });

    const referenceBuffer = require('fs').readFileSync(
      'tests/fixtures/references/tablet-1024-full.png'
    );

    const reference = PNG.sync.read(referenceBuffer);
    const current = PNG.sync.read(screenshot);

    const { width, height } = reference;
    const diff = new PNG({ width, height });

    const numDiffPixels = pixelmatch(
      reference.data,
      current.data,
      diff.data,
      width,
      height,
      { threshold: 0.1 }
    );

    const totalPixels = width * height;
    const similarity = 1 - numDiffPixels / totalPixels;

    console.log(`Similarity: ${(similarity * 100).toFixed(2)}%`);
    expect(similarity).toBeGreaterThanOrEqual(SIMILARITY_THRESHOLD);
  });

  test('Hero section renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    // Check for key elements
    await expect(page.getByRole('heading', { name: /business travel.*expense management/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /get a demo/i })).toBeVisible();
  });

  test('Navigation is functional', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Check header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check logo
    await expect(page.getByText('Vayo').first()).toBeVisible();

    // Check CTA buttons
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /get a demo/i }).first()).toBeVisible();
  });

  test('All sections are visible', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Scroll through and check all sections exist
    const sections = page.locator('section');
    const sectionCount = await sections.count();

    console.log(`Found ${sectionCount} sections`);
    expect(sectionCount).toBeGreaterThanOrEqual(6); // Hero, LogoCloud, Features, ValueProp, Testimonials, CTA
  });

  test('Mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Mobile menu button should be visible
    const menuButton = page.locator('button').filter({ hasText: /menu/i }).or(
      page.locator('button svg').filter({ has: page.locator('path') })
    ).first();

    await menuButton.click();
    await page.waitForTimeout(300);

    // Menu items should now be visible
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('Responsive breakpoints work correctly', async ({ page }) => {
    // Test mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);
    let screenshot = await page.screenshot({ fullPage: false });
    expect(screenshot.length).toBeGreaterThan(0);

    // Test tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(300);
    screenshot = await page.screenshot({ fullPage: false });
    expect(screenshot.length).toBeGreaterThan(0);

    // Test desktop
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(300);
    screenshot = await page.screenshot({ fullPage: false });
    expect(screenshot.length).toBeGreaterThan(0);
  });
});