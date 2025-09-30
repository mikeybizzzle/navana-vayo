import { chromium, Browser, Page } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';

interface ViewportConfig {
  name: string;
  width: number;
  height: number;
}

const VIEWPORTS: ViewportConfig[] = [
  { name: 'mobile-375', width: 375, height: 667 },
  { name: 'mobile-414', width: 414, height: 896 },
  { name: 'mobile-428', width: 428, height: 926 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-1024', width: 1024, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1920', width: 1920, height: 1080 },
  { name: 'desktop-2560', width: 2560, height: 1440 },
];

const TARGET_URL = 'https://www.navan.com';
const OUTPUT_DIR = path.join(__dirname, '../tests/fixtures/reference-screenshots');

class ReferenceCapture {
  private browser: Browser | null = null;

  async initialize() {
    console.log('🚀 Initializing browser...');
    this.browser = await chromium.launch({
      headless: true,
    });

    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  }

  async captureFullPage() {
    if (!this.browser) throw new Error('Browser not initialized');

    console.log('\n📸 Capturing full page screenshots...\n');

    for (const viewport of VIEWPORTS) {
      const page = await this.browser.newPage();

      try {
        console.log(`  📱 ${viewport.name} (${viewport.width}x${viewport.height})`);

        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });

        await page.goto(TARGET_URL, {
          waitUntil: 'networkidle',
          timeout: 60000,
        });

        // Wait for any lazy-loaded content
        await page.waitForTimeout(2000);

        // Scroll to bottom to trigger lazy loading
        await page.evaluate(async () => {
          await new Promise<void>((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
              const scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if (totalHeight >= scrollHeight) {
                clearInterval(timer);
                window.scrollTo(0, 0);
                setTimeout(resolve, 1000);
              }
            }, 100);
          });
        });

        // Capture screenshot
        const filename = `full-page-${viewport.name}.png`;
        await page.screenshot({
          path: path.join(OUTPUT_DIR, filename),
          fullPage: true,
        });

        console.log(`    ✅ Saved: ${filename}`);
      } catch (error) {
        console.error(`    ❌ Failed: ${error}`);
      } finally {
        await page.close();
      }
    }
  }

  async captureSections() {
    if (!this.browser) throw new Error('Browser not initialized');

    console.log('\n📸 Capturing individual sections...\n');

    const page = await this.browser.newPage();

    try {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto(TARGET_URL, {
        waitUntil: 'networkidle',
        timeout: 60000,
      });

      // Wait for page to load
      await page.waitForTimeout(2000);

      // Capture header/navigation
      const nav = await page.locator('nav, header').first();
      if (await nav.count() > 0) {
        await nav.screenshot({
          path: path.join(OUTPUT_DIR, 'section-navigation.png'),
        });
        console.log('  ✅ Navigation captured');
      }

      // Capture hero section
      const sections = await page.locator('section').all();
      if (sections.length > 0) {
        await sections[0].screenshot({
          path: path.join(OUTPUT_DIR, 'section-hero.png'),
        });
        console.log('  ✅ Hero section captured');

        // Capture other sections
        for (let i = 1; i < Math.min(sections.length, 6); i++) {
          await sections[i].screenshot({
            path: path.join(OUTPUT_DIR, `section-${i + 1}.png`),
          });
          console.log(`  ✅ Section ${i + 1} captured`);
        }
      }

      // Capture footer
      const footer = await page.locator('footer').first();
      if (await footer.count() > 0) {
        await footer.screenshot({
          path: path.join(OUTPUT_DIR, 'section-footer.png'),
        });
        console.log('  ✅ Footer captured');
      }
    } catch (error) {
      console.error(`  ❌ Section capture failed: ${error}`);
    } finally {
      await page.close();
    }
  }

  async extractDesignTokens() {
    if (!this.browser) throw new Error('Browser not initialized');

    console.log('\n🎨 Extracting design tokens...\n');

    const page = await this.browser.newPage();

    try {
      await page.goto(TARGET_URL, {
        waitUntil: 'networkidle',
        timeout: 60000,
      });

      const designTokens = await page.evaluate(() => {
        // Extract colors
        const colors = new Set<string>();
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
          const styles = window.getComputedStyle(el);
          colors.add(styles.color);
          colors.add(styles.backgroundColor);
          colors.add(styles.borderColor);
        });

        // Extract typography
        const typography = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'button'].map(tag => {
          const el = document.querySelector(tag);
          if (!el) return null;
          const styles = window.getComputedStyle(el);
          return {
            tag,
            fontFamily: styles.fontFamily,
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            lineHeight: styles.lineHeight,
            letterSpacing: styles.letterSpacing,
          };
        }).filter(Boolean);

        // Extract spacing (from first few sections)
        const sections = Array.from(document.querySelectorAll('section')).slice(0, 5);
        const spacing = sections.map(section => {
          const styles = window.getComputedStyle(section);
          return {
            padding: styles.padding,
            margin: styles.margin,
          };
        });

        return {
          colors: Array.from(colors).filter(c => c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent'),
          typography,
          spacing,
        };
      });

      // Save design tokens
      const tokensPath = path.join(__dirname, '../docs/design-tokens.json');
      await fs.mkdir(path.dirname(tokensPath), { recursive: true });
      await fs.writeFile(tokensPath, JSON.stringify(designTokens, null, 2));

      console.log('  ✅ Design tokens extracted');
      console.log(`  📄 Saved to: ${tokensPath}`);

      // Generate readable report
      let report = '# Extracted Design Tokens\n\n';
      report += `**Source:** ${TARGET_URL}\n`;
      report += `**Date:** ${new Date().toISOString()}\n\n`;

      report += '## Colors\n\n```\n';
      designTokens.colors.slice(0, 20).forEach(color => {
        report += `${color}\n`;
      });
      report += '```\n\n';

      report += '## Typography\n\n';
      designTokens.typography.forEach((font: any) => {
        if (font) {
          report += `### ${font.tag}\n`;
          report += `- Font Family: ${font.fontFamily}\n`;
          report += `- Font Size: ${font.fontSize}\n`;
          report += `- Font Weight: ${font.fontWeight}\n`;
          report += `- Line Height: ${font.lineHeight}\n\n`;
        }
      });

      const reportPath = path.join(__dirname, '../docs/design-tokens.md');
      await fs.writeFile(reportPath, report);
      console.log(`  📄 Report saved to: ${reportPath}`);

    } catch (error) {
      console.error(`  ❌ Token extraction failed: ${error}`);
    } finally {
      await page.close();
    }
  }

  async extractContent() {
    if (!this.browser) throw new Error('Browser not initialized');

    console.log('\n📝 Extracting content...\n');

    const page = await this.browser.newPage();

    try {
      await page.goto(TARGET_URL, {
        waitUntil: 'networkidle',
        timeout: 60000,
      });

      const content = await page.evaluate(() => {
        return {
          title: document.title,
          headings: Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
            tag: h.tagName.toLowerCase(),
            text: h.textContent?.trim(),
          })),
          paragraphs: Array.from(document.querySelectorAll('p')).map(p => p.textContent?.trim()),
          buttons: Array.from(document.querySelectorAll('button, a[role="button"]')).map(btn => ({
            text: btn.textContent?.trim(),
            href: btn.getAttribute('href'),
          })),
          images: Array.from(document.querySelectorAll('img')).map(img => ({
            src: img.src,
            alt: img.alt,
          })),
        };
      });

      const contentPath = path.join(__dirname, '../docs/extracted-content.json');
      await fs.mkdir(path.dirname(contentPath), { recursive: true });
      await fs.writeFile(contentPath, JSON.stringify(content, null, 2));

      console.log('  ✅ Content extracted');
      console.log(`  📄 Saved to: ${contentPath}`);

    } catch (error) {
      console.error(`  ❌ Content extraction failed: ${error}`);
    } finally {
      await page.close();
    }
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('\n✅ Browser closed');
    }
  }

  async run() {
    try {
      await this.initialize();
      await this.captureFullPage();
      await this.captureSections();
      await this.extractDesignTokens();
      await this.extractContent();

      console.log('\n🎉 Reference capture complete!\n');
      console.log('Next steps:');
      console.log('1. Review captured screenshots in tests/fixtures/reference-screenshots/');
      console.log('2. Review design tokens in docs/design-tokens.json');
      console.log('3. Start Claude Code with: claude-code --prompt "$(cat CLAUDE_CODE_ORCHESTRATION.md)"');

    } catch (error) {
      console.error('\n❌ Error during capture:', error);
      throw error;
    } finally {
      await this.cleanup();
    }
  }
}

// Run the script
const capture = new ReferenceCapture();
capture.run().catch(console.error);