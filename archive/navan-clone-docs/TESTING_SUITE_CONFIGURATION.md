# VISUAL REGRESSION TESTING SUITE

## 🎯 Purpose
Automated testing to ensure pixel-perfect accuracy between replica and original Navan.com

---

## 📁 File Structure

```
/tests
  /fixtures
    - reference-screenshots/    # Original navan.com screenshots
    - replica-screenshots/      # Our replica screenshots
    - diff-screenshots/         # Visual diff outputs
  /specs
    - visual-regression.spec.ts
    - responsive.spec.ts
    - interactions.spec.ts
    - performance.spec.ts
  /utils
    - comparison.ts
    - screenshot.ts
    - metrics.ts
  playwright.config.ts
```

---

## ⚙️ Playwright Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'test-results/html' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list'],
  ],
  
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    // Desktop browsers
    {
      name: 'chromium-desktop',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'firefox-desktop',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'webkit-desktop',
      use: { 
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    
    // Tablet
    {
      name: 'ipad',
      use: { ...devices['iPad Pro'] },
    },
    {
      name: 'tablet',
      use: { 
        viewport: { width: 1024, height: 768 },
        deviceScaleFactor: 2,
      },
    },
    
    // Mobile
    {
      name: 'iphone',
      use: { ...devices['iPhone 13 Pro'] },
    },
    {
      name: 'android',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-small',
      use: { 
        viewport: { width: 375, height: 667 },
        deviceScaleFactor: 2,
      },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
```

---

## 🔧 Utility Functions

### Screenshot Comparison Utility

```typescript
// tests/utils/comparison.ts
import { Page } from '@playwright/test';
import { compareImages } from 'resemblejs';
import fs from 'fs/promises';
import path from 'path';

export interface ComparisonResult {
  similarity: number;
  mismatchPercentage: number;
  diffImage: Buffer;
  analysisTime: number;
  passed: boolean;
}

export class VisualComparison {
  constructor(
    private threshold: number = 0.02, // 2% difference allowed
  ) {}

  async compareScreenshots(
    page: Page,
    referenceName: string,
    options: {
      fullPage?: boolean;
      clip?: { x: number; y: number; width: number; height: number };
    } = {}
  ): Promise<ComparisonResult> {
    const referenceDir = path.join(__dirname, '../fixtures/reference-screenshots');
    const replicaDir = path.join(__dirname, '../fixtures/replica-screenshots');
    const diffDir = path.join(__dirname, '../fixtures/diff-screenshots');
    
    // Ensure directories exist
    await fs.mkdir(referenceDir, { recursive: true });
    await fs.mkdir(replicaDir, { recursive: true });
    await fs.mkdir(diffDir, { recursive: true });
    
    const referencePath = path.join(referenceDir, `${referenceName}.png`);
    const replicaPath = path.join(replicaDir, `${referenceName}.png`);
    const diffPath = path.join(diffDir, `${referenceName}-diff.png`);
    
    // Take screenshot of replica
    await page.screenshot({
      path: replicaPath,
      fullPage: options.fullPage ?? true,
      clip: options.clip,
    });
    
    // Check if reference exists
    const referenceExists = await fs.access(referencePath)
      .then(() => true)
      .catch(() => false);
    
    if (!referenceExists) {
      console.warn(`Reference screenshot not found: ${referenceName}`);
      return {
        similarity: 0,
        mismatchPercentage: 100,
        diffImage: Buffer.from(''),
        analysisTime: 0,
        passed: false,
      };
    }
    
    // Compare images
    const startTime = Date.now();
    const data = await compareImages(
      await fs.readFile(referencePath),
      await fs.readFile(replicaPath),
      {
        output: {
          errorColor: { red: 255, green: 0, blue: 255 },
          errorType: 'movement',
          transparency: 0.3,
          largeImageThreshold: 1200,
        },
        scaleToSameSize: true,
        ignore: 'antialiasing',
      }
    );
    const analysisTime = Date.now() - startTime;
    
    // Save diff image
    await fs.writeFile(diffPath, data.getBuffer());
    
    const mismatchPercentage = parseFloat(data.misMatchPercentage);
    const similarity = 100 - mismatchPercentage;
    
    return {
      similarity,
      mismatchPercentage,
      diffImage: data.getBuffer(),
      analysisTime,
      passed: mismatchPercentage <= this.threshold,
    };
  }
  
  async captureReference(
    page: Page,
    name: string,
    url: string,
    options: {
      fullPage?: boolean;
      clip?: { x: number; y: number; width: number; height: number };
    } = {}
  ): Promise<void> {
    const referenceDir = path.join(__dirname, '../fixtures/reference-screenshots');
    await fs.mkdir(referenceDir, { recursive: true });
    
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    
    const referencePath = path.join(referenceDir, `${name}.png`);
    await page.screenshot({
      path: referencePath,
      fullPage: options.fullPage ?? true,
      clip: options.clip,
    });
    
    console.log(`✓ Captured reference: ${name}`);
  }
}

export async function generateComparisonReport(
  results: Array<{ name: string; result: ComparisonResult }>
): Promise<string> {
  const passed = results.filter(r => r.result.passed).length;
  const total = results.length;
  const passRate = (passed / total * 100).toFixed(2);
  
  let report = `# Visual Regression Test Report\n\n`;
  report += `**Date:** ${new Date().toISOString()}\n`;
  report += `**Pass Rate:** ${passRate}% (${passed}/${total})\n\n`;
  report += `## Results\n\n`;
  report += `| Test | Similarity | Mismatch % | Status |\n`;
  report += `|------|-----------|------------|--------|\n`;
  
  for (const { name, result } of results) {
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    report += `| ${name} | ${result.similarity.toFixed(2)}% | ${result.mismatchPercentage.toFixed(2)}% | ${status} |\n`;
  }
  
  report += `\n## Failed Tests\n\n`;
  const failed = results.filter(r => !r.result.passed);
  
  if (failed.length === 0) {
    report += `All tests passed! 🎉\n`;
  } else {
    for (const { name, result } of failed) {
      report += `### ${name}\n`;
      report += `- **Similarity:** ${result.similarity.toFixed(2)}%\n`;
      report += `- **Mismatch:** ${result.mismatchPercentage.toFixed(2)}%\n`;
      report += `- **Diff Image:** fixtures/diff-screenshots/${name}-diff.png\n\n`;
    }
  }
  
  return report;
}
```

### Performance Metrics Utility

```typescript
// tests/utils/metrics.ts
import { Page } from '@playwright/test';

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
  tbt: number; // Total Blocking Time
  tti: number; // Time to Interactive
}

export async function measurePerformance(page: Page): Promise<PerformanceMetrics> {
  const metrics = await page.evaluate(() => {
    return new Promise<PerformanceMetrics>((resolve) => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(e => e.name === 'first-contentful-paint')?.startTime || 0;
        
        // Get LCP
        const lcpEntry = entries.find(e => e.entryType === 'largest-contentful-paint');
        const lcp = lcpEntry ? (lcpEntry as any).renderTime || (lcpEntry as any).loadTime : 0;
        
        // Get CLS
        let cls = 0;
        entries.filter(e => e.entryType === 'layout-shift').forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        });
        
        // Get navigation timing
        const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const tti = navTiming.domInteractive;
        const tbt = navTiming.domContentLoadedEventEnd - navTiming.domContentLoadedEventStart;
        
        resolve({
          fcp,
          lcp,
          cls,
          fid: 0, // FID requires user interaction
          tbt,
          tti,
        });
      });
      
      observer.observe({ 
        entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift']
      });
      
      // Timeout after 10 seconds
      setTimeout(() => {
        observer.disconnect();
      }, 10000);
    });
  });
  
  return metrics;
}

export function evaluatePerformance(metrics: PerformanceMetrics): {
  score: number;
  passed: boolean;
  details: Array<{ metric: string; value: number; threshold: number; passed: boolean }>;
} {
  const thresholds = {
    fcp: 1800,  // 1.8s
    lcp: 2500,  // 2.5s
    cls: 0.1,   // 0.1
    tbt: 300,   // 300ms
    tti: 3800,  // 3.8s
  };
  
  const details = [
    {
      metric: 'First Contentful Paint',
      value: metrics.fcp,
      threshold: thresholds.fcp,
      passed: metrics.fcp <= thresholds.fcp,
    },
    {
      metric: 'Largest Contentful Paint',
      value: metrics.lcp,
      threshold: thresholds.lcp,
      passed: metrics.lcp <= thresholds.lcp,
    },
    {
      metric: 'Cumulative Layout Shift',
      value: metrics.cls,
      threshold: thresholds.cls,
      passed: metrics.cls <= thresholds.cls,
    },
    {
      metric: 'Total Blocking Time',
      value: metrics.tbt,
      threshold: thresholds.tbt,
      passed: metrics.tbt <= thresholds.tbt,
    },
    {
      metric: 'Time to Interactive',
      value: metrics.tti,
      threshold: thresholds.tti,
      passed: metrics.tti <= thresholds.tti,
    },
  ];
  
  const passedCount = details.filter(d => d.passed).length;
  const score = (passedCount / details.length) * 100;
  
  return {
    score,
    passed: score >= 80, // 80% of metrics must pass
    details,
  };
}
```

---

## 🧪 Test Specifications

### 1. Visual Regression Tests

```typescript
// tests/specs/visual-regression.spec.ts
import { test, expect } from '@playwright/test';
import { VisualComparison, generateComparisonReport } from '../utils/comparison';

test.describe('Visual Regression Tests', () => {
  const comparison = new VisualComparison(0.02); // 2% threshold
  const results: Array<{ name: string; result: any }> = [];
  
  test.beforeAll(async () => {
    // Optionally capture new references from original site
    // Only run this when you need to update references
  });
  
  test.afterAll(async () => {
    // Generate comparison report
    const report = await generateComparisonReport(results);
    await fs.writeFile('test-results/visual-report.md', report);
    console.log(report);
  });
  
  test('homepage full page comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const result = await comparison.compareScreenshots(page, 'homepage-full', {
      fullPage: true,
    });
    
    results.push({ name: 'homepage-full', result });
    
    expect(result.passed).toBeTruthy();
    expect(result.similarity).toBeGreaterThan(98);
  });
  
  test('hero section comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const heroElement = await page.locator('section').first();
    const box = await heroElement.boundingBox();
    
    if (box) {
      const result = await comparison.compareScreenshots(page, 'hero-section', {
        clip: box,
      });
      
      results.push({ name: 'hero-section', result });
      expect(result.passed).toBeTruthy();
    }
  });
  
  test('navigation comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const nav = await page.locator('nav, header').first();
    const box = await nav.boundingBox();
    
    if (box) {
      const result = await comparison.compareScreenshots(page, 'navigation', {
        clip: box,
      });
      
      results.push({ name: 'navigation', result });
      expect(result.passed).toBeTruthy();
    }
  });
  
  test('footer comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const footer = await page.locator('footer').first();
    const box = await footer.boundingBox();
    
    if (box) {
      const result = await comparison.compareScreenshots(page, 'footer', {
        clip: box,
      });
      
      results.push({ name: 'footer', result });
      expect(result.passed).toBeTruthy();
    }
  });
});
```

### 2. Responsive Tests

```typescript
// tests/specs/responsive.spec.ts
import { test, expect } from '@playwright/test';
import { VisualComparison } from '../utils/comparison';

const viewports = [
  { name: 'mobile-small', width: 375, height: 667 },
  { name: 'mobile-medium', width: 414, height: 896 },
  { name: 'mobile-large', width: 428, height: 926 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'tablet-large', width: 1024, height: 768 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'desktop-large', width: 1920, height: 1080 },
  { name: 'desktop-xl', width: 2560, height: 1440 },
];

test.describe('Responsive Tests', () => {
  const comparison = new VisualComparison();
  
  for (const viewport of viewports) {
    test(`${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Check for horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      
      expect(hasHorizontalScroll).toBeFalsy();
      
      // Take screenshot
      const result = await comparison.compareScreenshots(
        page,
        `responsive-${viewport.name}`,
        { fullPage: true }
      );
      
      expect(result.passed).toBeTruthy();
      
      // Check text readability (minimum font size)
      const minFontSize = await page.evaluate(() => {
        const elements = Array.from(document.querySelectorAll('p, span, div, a'));
        const fontSizes = elements.map(el => {
          const size = window.getComputedStyle(el).fontSize;
          return parseFloat(size);
        });
        return Math.min(...fontSizes);
      });
      
      expect(minFontSize).toBeGreaterThanOrEqual(14); // Minimum 14px
    });
  }
  
  test('mobile touch target sizes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const touchTargets = await page.evaluate(() => {
      const interactive = Array.from(
        document.querySelectorAll('button, a, input, [role="button"]')
      );
      
      return interactive.map(el => {
        const rect = el.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          area: rect.width * rect.height,
        };
      });
    });
    
    // Touch targets should be at least 44x44px (iOS HIG)
    touchTargets.forEach(target => {
      if (target.area > 0) { // Ignore hidden elements
        expect(target.width).toBeGreaterThanOrEqual(44);
        expect(target.height).toBeGreaterThanOrEqual(44);
      }
    });
  });
});
```

### 3. Interaction Tests

```typescript
// tests/specs/interactions.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Interaction Tests', () => {
  test('navigation hover states', async ({ page }) => {
    await page.goto('/');
    
    const navLinks = await page.locator('nav a, header a').all();
    
    for (const link of navLinks) {
      const initialColor = await link.evaluate(el => 
        window.getComputedStyle(el).color
      );
      
      await link.hover();
      await page.waitForTimeout(100);
      
      const hoverColor = await link.evaluate(el => 
        window.getComputedStyle(el).color
      );
      
      // Colors should change on hover (or some visual change)
      const hasHoverEffect = initialColor !== hoverColor || 
        await link.evaluate(el => {
          const styles = window.getComputedStyle(el);
          return styles.transform !== 'none' || 
                 styles.textDecoration !== 'none';
        });
      
      expect(hasHoverEffect).toBeTruthy();
    }
  });
  
  test('button hover states', async ({ page }) => {
    await page.goto('/');
    
    const buttons = await page.locator('button, [role="button"]').all();
    
    for (const button of buttons.slice(0, 5)) { // Test first 5 buttons
      await button.scrollIntoViewIfNeeded();
      
      const initialBg = await button.evaluate(el => 
        window.getComputedStyle(el).backgroundColor
      );
      
      await button.hover();
      await page.waitForTimeout(100);
      
      const hoverBg = await button.evaluate(el => 
        window.getComputedStyle(el).backgroundColor
      );
      
      expect(initialBg).not.toBe(hoverBg);
    }
  });
  
  test('mobile menu toggle', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Find hamburger menu
    const menuButton = page.locator('[aria-label*="menu"], .hamburger, [data-testid*="menu"]').first();
    
    if (await menuButton.count() > 0) {
      // Click to open
      await menuButton.click();
      await page.waitForTimeout(300); // Wait for animation
      
      // Check if menu is visible
      const menu = page.locator('nav [role="navigation"], .mobile-menu, [data-testid*="mobile-menu"]').first();
      await expect(menu).toBeVisible();
      
      // Click to close
      await menuButton.click();
      await page.waitForTimeout(300);
      
      await expect(menu).not.toBeVisible();
    }
  });
  
  test('smooth scroll to sections', async ({ page }) => {
    await page.goto('/');
    
    // Find anchor links
    const anchorLinks = await page.locator('a[href^="#"]').all();
    
    if (anchorLinks.length > 0) {
      const link = anchorLinks[0];
      const href = await link.getAttribute('href');
      
      if (href) {
        await link.click();
        await page.waitForTimeout(500);
        
        // Check if scrolled to target
        const target = page.locator(href);
        if (await target.count() > 0) {
          await expect(target).toBeInViewport();
        }
      }
    }
  });
  
  test('scroll animations trigger', async ({ page }) => {
    await page.goto('/');
    
    // Get all sections
    const sections = await page.locator('section').all();
    
    for (const section of sections) {
      // Scroll section into view
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      
      // Check if animation classes are applied or opacity changed
      const hasAnimation = await section.evaluate(el => {
        const styles = window.getComputedStyle(el);
        const classes = el.className;
        return styles.opacity === '1' || 
               classes.includes('animate') || 
               classes.includes('visible') ||
               styles.transform !== 'none';
      });
      
      expect(hasAnimation).toBeTruthy();
    }
  });
});
```

### 4. Performance Tests

```typescript
// tests/specs/performance.spec.ts
import { test, expect } from '@playwright/test';
import { measurePerformance, evaluatePerformance } from '../utils/metrics';

test.describe('Performance Tests', () => {
  test('core web vitals', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const metrics = await measurePerformance(page);
    const evaluation = evaluatePerformance(metrics);
    
    console.log('Performance Metrics:', metrics);
    console.log('Evaluation:', evaluation);
    
    expect(evaluation.passed).toBeTruthy();
    expect(metrics.lcp).toBeLessThan(2500);
    expect(metrics.cls).toBeLessThan(0.1);
  });
  
  test('resource loading', async ({ page }) => {
    const resourceSizes: Record<string, number> = {};
    
    page.on('response', async (response) => {
      const url = response.url();
      const type = response.request().resourceType();
      
      try {
        const body = await response.body();
        resourceSizes[type] = (resourceSizes[type] || 0) + body.length;
      } catch (e) {
        // Ignore errors
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    console.log('Resource sizes:', resourceSizes);
    
    // Check JavaScript bundle size (should be < 500KB)
    const jsSize = resourceSizes['script'] || 0;
    expect(jsSize).toBeLessThan(500 * 1024);
    
    // Check CSS size (should be < 100KB)
    const cssSize = resourceSizes['stylesheet'] || 0;
    expect(cssSize).toBeLessThan(100 * 1024);
  });
  
  test('image optimization', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        loading: img.loading,
        width: img.naturalWidth,
        height: img.naturalHeight,
        rendered: {
          width: img.width,
          height: img.height,
        },
      }));
    });
    
    // Check lazy loading is used for below-fold images
    const belowFoldImages = images.slice(2); // Skip first 2 (likely above fold)
    belowFoldImages.forEach(img => {
      expect(img.loading).toBe('lazy');
    });
    
    // Check images are not oversized
    images.forEach(img => {
      if (img.width > 0 && img.height > 0) {
        const scaleFactor = Math.max(
          img.width / img.rendered.width,
          img.height / img.rendered.height
        );
        
        // Images shouldn't be more than 2x larger than rendered size
        expect(scaleFactor).toBeLessThan(2);
      }
    });
  });
});
```

---

## 📊 Test Execution Scripts

```json
// package.json scripts
{
  "scripts": {
    "test": "playwright test",
    "test:visual": "playwright test tests/specs/visual-regression.spec.ts",
    "test:responsive": "playwright test tests/specs/responsive.spec.ts",
    "test:interactions": "playwright test tests/specs/interactions.spec.ts",
    "test:performance": "playwright test tests/specs/performance.spec.ts",
    "test:headed": "playwright test --headed",
    "test:debug": "playwright test --debug",
    "test:ui": "playwright test --ui",
    "test:report": "playwright show-report",
    "capture:references": "playwright test tests/capture-references.spec.ts",
    "compare:generate-report": "node scripts/generate-comparison-report.js"
  }
}
```

---

## 🎯 Success Criteria

Tests must achieve:
- **Visual Regression:** >98% similarity on all tests
- **Responsive:** 100% pass rate on all viewports
- **Interactions:** All interaction tests passing
- **Performance:** All Core Web Vitals passing
- **Overall:** >95% test pass rate

---

## 📝 Continuous Validation

Run these commands during development:

```bash
# Quick visual check
npm run test:visual -- --grep "homepage"

# Check specific viewport
npm run test:responsive -- --grep "mobile"

# Debug failing test
npm run test:debug -- --grep "navigation"

# Full test suite
npm run test

# Generate report
npm run test:report
```

---

This testing suite ensures continuous validation throughout development, maintaining pixel-perfect accuracy at all times.
