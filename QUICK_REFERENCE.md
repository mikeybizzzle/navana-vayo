# QUICK REFERENCE GUIDE

## 🚀 Getting Started in 5 Minutes

### 1. Initialize Claude Code Session
```bash
# Navigate to your project directory
cd /path/to/project

# Start with the orchestration prompt
claude-code --prompt "$(cat CLAUDE_CODE_ORCHESTRATION.md)"
```

### 2. Claude Code's First Actions
Claude Code should immediately:
1. Read all context files
2. Launch Playwright to analyze navan.com
3. Capture reference screenshots
4. Create analysis documentation
5. Initialize project structure
6. Begin Phase 1 development

---

## ⚡ Quick Commands

### Development
```bash
# Start dev server
npm run dev

# Run linter
npm run lint

# Type check
npm run type-check

# Format code
npm run format
```

### Testing
```bash
# Quick visual test
npm run test:visual

# Test responsiveness
npm run test:responsive

# Full test suite
npm run test

# View test report
npm run test:report

# Debug test
npm run test:debug -- --grep "specific-test"
```

### Analysis
```bash
# Capture new references from navan.com
npm run capture:references

# Generate comparison report
npm run compare:generate-report

# Analyze bundle size
npm run analyze
```

---

## 🎯 Claude Code Checkpoints

### After Each Phase
Claude Code should automatically:
1. ✅ Validate deliverables
2. 📝 Update progress log
3. 🧪 Run relevant tests
4. 📊 Generate metrics
5. 🔄 Self-correct if needed
6. ⏭️ Proceed to next phase

### Validation Triggers
- After every component completion
- Every 30 minutes
- Before phase transitions
- Before git commits
- On request

---

## 🔧 Common Issues & Solutions

### Issue: Claude Code stops and asks too many questions
**Solution:** 
```markdown
Reminder: You have full autonomy. Make smart default decisions.
Reference the CONTEXT_TARGET_WEBSITE.md for design tokens.
Only ask if truly blocked (e.g., API keys needed).
Continue development.
```

### Issue: Visual accuracy below 98%
**Solution:**
```markdown
1. Run: npm run test:visual -- --headed
2. Use Playwright inspector to compare
3. Extract exact CSS from original site
4. Apply pixel-perfect adjustments
5. Revalidate
```

### Issue: Responsive layout breaks
**Solution:**
```markdown
1. Test at specific breakpoint: npm run test:responsive -- --grep "mobile"
2. Use browser DevTools responsive mode
3. Check Tailwind breakpoint classes
4. Verify container max-widths
5. Test on actual devices if possible
```

### Issue: Performance metrics failing
**Solution:**
```markdown
1. Run: npm run test:performance
2. Analyze bundle: npm run analyze
3. Apply optimizations:
   - Lazy load images below fold
   - Code split large components
   - Remove unused dependencies
   - Optimize images (WebP)
4. Revalidate
```

### Issue: Animation timing off
**Solution:**
```markdown
1. Use Chrome DevTools Animation inspector
2. Record original site animations
3. Extract exact timing values
4. Match easing functions
5. Test at 60fps
```

---

## 📋 Progress Tracking Template

```markdown
# Development Progress - [DATE]

## Current Phase: [X] - [NAME]
**Status:** 🟢 On Track | 🟡 Minor Issues | 🔴 Blocked
**Completion:** [XX]%

## Today's Accomplishments
- ✅ Component 1 completed (98% accuracy)
- ✅ Responsive tests passing
- 🚧 Animation refinements in progress

## Metrics
- Visual Similarity: 98.5%
- Test Pass Rate: 95%
- Performance Score: 92/100
- Components Complete: 8/12

## Next Up
1. Complete features section
2. Add scroll animations
3. Performance optimization pass

## Blockers
- None

## Notes
- Discovered better approach for hero animation
- Using Framer Motion for smoother transitions
```

---

## 🎨 Design Token Quick Reference

### Common Patterns from Corporate SaaS Sites

**Typography Scale:**
```
Display: 72px / 80px / 700
H1: 48px / 56px / 700
H2: 36px / 44px / 600
H3: 30px / 38px / 600
H4: 24px / 32px / 600
Body Large: 18px / 28px / 400
Body: 16px / 24px / 400
Small: 14px / 20px / 400
```

**Spacing Scale:**
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

**Color Patterns:**
```
Primary: Bold, trustworthy (often blue)
Secondary: Complementary accent
Success: Green (#10B981)
Warning: Amber (#F59E0B)
Error: Red (#EF4444)
Neutral: Gray scale (100-900)
```

---

## 🧪 Testing Cheat Sheet

### Visual Regression
```bash
# Test specific component
npm run test:visual -- --grep "hero"

# Update baseline (after confirmed changes)
npm run test:visual -- --update-snapshots

# View differences
open test-results/fixtures/diff-screenshots/
```

### Responsive Testing
```bash
# Test mobile only
npm run test:responsive -- --grep "mobile"

# Test all breakpoints
npm run test:responsive

# Specific viewport
npm run test -- --grep "375"
```

### Performance Testing
```bash
# Run performance tests
npm run test:performance

# Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Bundle analysis
npm run analyze
```

---

## 🎯 Quality Checklist

### Before Moving to Next Phase
- [ ] Visual accuracy >98%
- [ ] All tests passing
- [ ] No console errors
- [ ] Responsive on all breakpoints
- [ ] Performance metrics met
- [ ] Code formatted and linted
- [ ] Progress log updated
- [ ] Git commit with clear message

### Before Final Delivery
- [ ] All phases complete
- [ ] Comprehensive test coverage
- [ ] Documentation complete
- [ ] Deployment configuration ready
- [ ] Comparison report generated
- [ ] README with setup instructions
- [ ] No known bugs or issues
- [ ] Performance optimized

---

## 💡 Pro Tips

### For Claude Code
1. **Always reference screenshots** when building components
2. **Use Playwright inspector** for real-time CSS extraction
3. **Build mobile-first** then scale up
4. **Validate frequently** (every 30 min minimum)
5. **Document decisions** in progress log
6. **Self-correct immediately** when tests fail
7. **Use exact values** from original site (don't approximate)

### For Developers Monitoring
1. Let Claude Code work autonomously
2. Only intervene at checkpoints
3. Review progress logs for context
4. Check test reports for quality metrics
5. Trust the validation process

---

## 🔄 Iteration Pattern

```
BUILD → TEST → VALIDATE → FIX → RETEST → DOCUMENT → NEXT
  ↓       ↓       ↓         ↓       ↓         ↓        ↓
 30min   5min    5min     15min    5min     5min    Next
                                                   Component
```

**Time per component cycle: ~60-90 minutes**
**Total project: 4-6 hours**

---

## 📱 Viewport Reference

```javascript
const breakpoints = {
  mobile: {
    small: { width: 375, height: 667 },   // iPhone SE
    medium: { width: 414, height: 896 },  // iPhone 11 Pro Max
    large: { width: 428, height: 926 },   // iPhone 14 Pro Max
  },
  tablet: {
    portrait: { width: 768, height: 1024 }, // iPad
    landscape: { width: 1024, height: 768 }, // iPad landscape
    large: { width: 1024, height: 1366 },   // iPad Pro
  },
  desktop: {
    laptop: { width: 1440, height: 900 },   // MacBook
    standard: { width: 1920, height: 1080 }, // Full HD
    large: { width: 2560, height: 1440 },   // 2K
    xl: { width: 3840, height: 2160 },      // 4K
  },
};
```

---

## 🎵 Reminder Mantras

**For Development:**
- "Reference first, build second"
- "Test early, test often"
- "Mobile-first always"
- "Exact values, not approximations"

**For Validation:**
- "If it looks different, it is different"
- "98% is the minimum, 100% is the goal"
- "One pixel matters"
- "Smooth at 60fps or fix it"

**For Autonomy:**
- "Make smart decisions"
- "Document reasoning"
- "Self-correct immediately"
- "Ask only when truly blocked"

---

## 🆘 Emergency Commands

### Claude Code Appears Stuck
```markdown
Status check: Where are you in the development process?
What have you completed?
What's blocking you?
Proceed with next logical step.
```

### Tests Failing Repeatedly
```markdown
Show me the test results.
What's the specific failure?
Attempt these 3 solutions: [specific to issue]
If still failing, document and move to next component.
Come back to this after completing others.
```

### Need to Restart
```markdown
Review /docs/progress-log.md
Resume from last checkpoint: Phase [X], Component [Y]
Validate what's been completed
Continue with next item in sequence
```

---

## 📞 Support Resources

### Documentation
- Main Orchestration: CLAUDE_CODE_ORCHESTRATION.md
- Target Analysis: CONTEXT_TARGET_WEBSITE.md
- Testing Suite: TESTING_SUITE_CONFIGURATION.md
- This Guide: QUICK_REFERENCE.md

### Logs & Reports
- Progress: /docs/progress-log.md
- Components: /docs/component-inventory.md
- Tech Decisions: /docs/tech-decisions.md
- Test Results: /test-results/

### Tools
- Playwright Docs: https://playwright.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Next.js: https://nextjs.org

---

**Remember: The goal is AUTONOMOUS development. Trust the process. Let Claude Code work.**

**This guide is for quick reference only. Full details in the main orchestration document.**
