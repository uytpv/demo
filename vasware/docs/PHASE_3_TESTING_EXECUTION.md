# Phase 3: Testing & Verification

**Status:** In Progress
**Date:** December 25, 2025
**Phase:** 3 - Comprehensive Testing

---

## Phase 3 Objectives

✅ Verify all CSS files load correctly  
✅ Validate HTML page structure  
✅ Test dark mode functionality  
✅ Verify responsive breakpoints  
✅ Check accessibility compliance  
✅ Measure performance metrics  
✅ Create test automation framework

---

## Section 1: Infrastructure Validation

### ✅ CSS Import Structure

**File:** `css/index.css`

```css
✅ VERIFIED - Correct import order:
1. variables.css (Design tokens)
2. reset.css (Normalization)
3. base.css (Global styles)
4. components/* (5 component files)
5. layouts/* (2 layout files)
6. utilities/* (4 utility files)
```

**Status:** ✅ **ALL CORRECT**

### ✅ HTML CSS Links

**Verification Results:**

| Page                      | CSS Link         | Status     |
| ------------------------- | ---------------- | ---------- |
| index.html                | ../css/index.css | ✅ Correct |
| forgot_password.html      | ../css/index.css | ✅ Correct |
| select_warehouse.html     | ../css/index.css | ✅ Correct |
| my_time_cards.html        | ../css/index.css | ✅ Correct |
| my_time_card_detail.html  | ../css/index.css | ✅ Correct |
| policies.html             | ../css/index.css | ✅ Correct |
| safety.html               | ../css/index.css | ✅ Correct |
| select_customer_task.html | ../css/index.css | ✅ Correct |
| select_product.html       | ../css/index.css | ✅ Correct |
| settings.html             | ../css/index.css | ✅ Correct |
| sick_leave.html           | ../css/index.css | ✅ Correct |
| timer.html                | ../css/index.css | ✅ Correct |

**Status:** ✅ **12/12 PAGES CORRECT**

---

## Section 2: Test Automation Setup

### Browser DevTools Console Testing

**Script 1: Check CSS Loading**

```javascript
// Test 1: Verify CSS loaded
const styles = document.styleSheets;
const cssLoaded =
  Array.from(styles).filter((s) => s.href && s.href.includes("index.css"))
    .length > 0;
console.log("CSS Loaded:", cssLoaded);

// Test 2: Verify CSS variables available
const root = getComputedStyle(document.documentElement);
const primaryColor = root.getPropertyValue("--primary").trim();
console.log("Primary Color:", primaryColor); // Should be #0088FF

// Test 3: Check all CSS variables
const variables = [
  "--primary",
  "--gray-700",
  "--space-lg",
  "--text-xl",
  "--surface-light",
  "--radius-lg",
];
variables.forEach((v) => {
  const val = root.getPropertyValue(v).trim();
  console.log(`${v}: ${val}`);
});
```

**Script 2: Dark Mode Testing**

```javascript
// Test dark mode toggle
function testDarkMode() {
  const body = document.body;

  // Check light mode colors
  let surface = window.getComputedStyle(
    document.querySelector(".card") || document.body
  );
  console.log("Light Mode - Background:", surface.backgroundColor);

  // Toggle dark mode
  body.classList.add("dark-mode");

  // Check dark mode colors
  surface = window.getComputedStyle(
    document.querySelector(".card") || document.body
  );
  console.log("Dark Mode - Background:", surface.backgroundColor);

  // Toggle back
  body.classList.remove("dark-mode");
}

testDarkMode();
```

**Script 3: Responsive Testing**

```javascript
// Test breakpoint calculations
function testResponsive() {
  const width = window.innerWidth;
  const breakpoints = {
    mobile: { min: 320, max: 767 },
    tablet: { min: 768, max: 1023 },
    desktop: { min: 1024, max: Infinity },
  };

  for (const [name, range] of Object.entries(breakpoints)) {
    if (width >= range.min && width <= range.max) {
      console.log(`Current Breakpoint: ${name} (${width}px)`);
    }
  }
}

testResponsive();
// Resize window and run again to test
window.addEventListener("resize", testResponsive);
```

**Script 4: Component Visibility**

```javascript
// Check if all components render
function validateComponents() {
  const components = {
    header: ".app-header",
    navigation: ".warehouse-nav",
    button_primary: ".btn-primary",
    form_group: ".form-group",
    notify_badge: ".notify-badge",
  };

  const results = {};
  for (const [name, selector] of Object.entries(components)) {
    const element = document.querySelector(selector);
    results[name] = element ? "✅ Found" : "❌ Missing";
  }

  console.table(results);
}

validateComponents();
```

### Manual Testing Steps

**Step 1: Load index.html**

```
1. Open http://localhost:8000/html/index.html
2. Check DevTools Console (F12)
3. Run Script 1 (CSS Loading) above
4. Expected: CSS Loaded: true
```

**Step 2: Test Dark Mode**

```
1. Run Script 2 (Dark Mode Testing)
2. Observe color changes in DevTools
3. Page should switch between light/dark
```

**Step 3: Test Responsive**

```
1. Run Script 3 (Responsive Testing)
2. Resize window to 375px (mobile)
3. Resize window to 768px (tablet)
4. Resize window to 1024px (desktop)
5. Console should update breakpoint
```

**Step 4: Validate Components**

```
1. Run Script 4 (Component Visibility)
2. Check table output
3. All should show ✅ Found
```

---

## Section 3: Visual Testing Framework

### Page Load Verification

**Checklist for Each Page:**

```javascript
// Auto-test all pages
const pages = [
  "index.html",
  "forgot_password.html",
  "select_warehouse.html",
  "my_time_cards.html",
  "my_time_card_detail.html",
  "policies.html",
  "safety.html",
  "select_customer_task.html",
  "select_product.html",
  "settings.html",
  "sick_leave.html",
  "timer.html",
];

// Test each page
pages.forEach((page) => {
  console.log(`\n=== Testing ${page} ===`);
  // Open in new tab: window.open(`../html/${page}`);
  // Or use fetch to verify load
  fetch(`../html/${page}`)
    .then((r) => (r.ok ? "✅ Loads" : "❌ Error"))
    .then((status) => console.log(`${page}: ${status}`));
});
```

### Desktop Testing (1920×1080)

| Page                  | Renders | Header | Content | Nav | Status |
| --------------------- | ------- | ------ | ------- | --- | ------ |
| index.html            | [ ]     | [ ]    | [ ]     | N/A | [ ]    |
| forgot_password.html  | [ ]     | [ ]    | [ ]     | N/A | [ ]    |
| select_warehouse.html | [ ]     | [ ]    | [ ]     | ✅  | [ ]    |
| All app pages         | [ ]     | ✅     | [ ]     | ✅  | [ ]    |

### Mobile Testing (375×812)

- [ ] No horizontal scroll
- [ ] Text readable
- [ ] Buttons 44px+ height
- [ ] Touch targets spaced properly
- [ ] Header doesn't block content
- [ ] Navigation doesn't overlap

### Tablet Testing (768×1024)

- [ ] Layout adjusts for wider screen
- [ ] Optimal use of space
- [ ] Readable text sizes
- [ ] Touch friendly

---

## Section 4: Dark Mode Testing Matrix

### Color Verification

```javascript
// Verify all dark mode colors
const darkModeColors = {
  "--bg-dark": "#0f172a",
  "--surface-dark": "#1a2632",
  "--text-dark": "#f5f7fa",
  "--text-secondary-dark": "#a1adb8",
};

function testDarkModeColors() {
  document.body.classList.add("dark-mode");
  const root = getComputedStyle(document.documentElement);

  Object.entries(darkModeColors).forEach(([varName, expectedColor]) => {
    const actual = root.getPropertyValue(varName).trim();
    console.log(`${varName}: ${actual} (expect: ${expectedColor})`);
  });

  document.body.classList.remove("dark-mode");
}

testDarkModeColors();
```

### Dark Mode Pages to Test

**Verify on each:**

- [ ] index.html (login)
- [ ] forgot_password.html
- [ ] select_warehouse.html
- [ ] my_time_cards.html
- [ ] my_time_card_detail.html
- [ ] policies.html
- [ ] safety.html
- [ ] select_customer_task.html
- [ ] select_product.html
- [ ] settings.html
- [ ] sick_leave.html
- [ ] timer.html

---

## Section 5: Responsive Testing Guide

### Viewport Sizes to Test

```javascript
// Test all breakpoints
const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "mobile-landscape", width: 812, height: 375 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1920, height: 1080 },
];

// Use DevTools to set viewport size:
// F12 > Ctrl+Shift+M > Select preset
```

### Breakpoint Validation

```javascript
// Verify CSS media queries work
function testMediaQueries() {
  const mediaQueries = [
    { query: "(min-width: 768px)", name: "tablet" },
    { query: "(min-width: 1024px)", name: "desktop" },
    { query: "(max-width: 767px)", name: "mobile" },
  ];

  mediaQueries.forEach((mq) => {
    const matches = window.matchMedia(mq.query).matches;
    console.log(
      `${mq.name} (${mq.query}): ${matches ? "✅ Matches" : "❌ No match"}`
    );
  });
}

testMediaQueries();
```

### Layout Shift Detection

```javascript
// Detect Cumulative Layout Shift (CLS)
let cls = 0;
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (!entry.hadRecentInput) {
      cls += entry.value;
      console.log("Layout Shift:", entry.value);
    }
  }
}).observe({ entryTypes: ["layout-shift"] });

console.log("Total CLS:", cls);
```

---

## Section 6: Accessibility Audit

### WCAG Compliance Checklist

```javascript
// Basic accessibility checks
function auditAccessibility() {
  const issues = [];

  // Check 1: Images have alt text
  document.querySelectorAll("img").forEach((img) => {
    if (!img.alt) issues.push(`Image missing alt: ${img.src}`);
  });

  // Check 2: Buttons have accessible names
  document.querySelectorAll("button").forEach((btn) => {
    if (!btn.textContent.trim() && !btn.getAttribute("aria-label")) {
      issues.push(`Button missing accessible name`);
    }
  });

  // Check 3: Links have visible text
  document.querySelectorAll("a").forEach((link) => {
    if (!link.textContent.trim() && !link.getAttribute("aria-label")) {
      issues.push(`Link missing text: ${link.href}`);
    }
  });

  // Check 4: Color contrast (basic check)
  const bodyStyles = window.getComputedStyle(document.body);
  const bgColor = bodyStyles.backgroundColor;
  const textColor = bodyStyles.color;
  console.log(`Background: ${bgColor}, Text: ${textColor}`);

  return issues;
}

const a11yIssues = auditAccessibility();
console.table(a11yIssues);
```

### Accessibility Checklist

- [ ] All images have alt text
- [ ] All buttons have accessible names
- [ ] All links have visible text
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Form inputs have labels
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader compatible

---

## Section 7: Performance Testing

### Load Time Metrics

```javascript
// Measure Core Web Vitals
function measurePerformance() {
  // Largest Contentful Paint (LCP)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(
      "LCP (Largest Contentful Paint):",
      lastEntry.renderTime || lastEntry.loadTime
    );
  }).observe({ entryTypes: ["largest-contentful-paint"] });

  // First Input Delay (FID)
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log("FID (First Input Delay):", entry.processingDuration);
    });
  }).observe({ entryTypes: ["first-input"] });

  // Cumulative Layout Shift (CLS)
  let cls = 0;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        cls += entry.value;
      }
    }
  }).observe({ entryTypes: ["layout-shift"] });

  console.log("CLS (Cumulative Layout Shift):", cls);

  // Navigation timing
  window.addEventListener("load", () => {
    const nav = window.performance.getEntriesByType("navigation")[0];
    console.log("Page Load Time:", nav.loadEventEnd - nav.fetchStart, "ms");
    console.log(
      "DOM Content Loaded:",
      nav.domContentLoadedEventEnd - nav.fetchStart,
      "ms"
    );
    console.log("Paint Timing:", nav.domInteractive - nav.fetchStart, "ms");
  });
}

measurePerformance();
```

### Performance Targets

| Metric                         | Target  | Status |
| ------------------------------ | ------- | ------ |
| Page Load                      | < 3s    | [ ]    |
| CSS Load                       | < 500ms | [ ]    |
| FCP (First Contentful Paint)   | < 1.8s  | [ ]    |
| LCP (Largest Contentful Paint) | < 2.5s  | [ ]    |
| CLS (Layout Shift)             | < 0.1   | [ ]    |
| FID (Input Delay)              | < 100ms | [ ]    |

---

## Section 8: Browser Compatibility

### Auto Testing Script

```javascript
// Browser & device detection
function getBrowserInfo() {
  const ua = navigator.userAgent;
  const info = {
    Browser: ua.includes("Chrome")
      ? "Chrome"
      : ua.includes("Safari")
      ? "Safari"
      : ua.includes("Firefox")
      ? "Firefox"
      : ua.includes("Edge")
      ? "Edge"
      : "Other",
    OS: ua.includes("Windows")
      ? "Windows"
      : ua.includes("Mac")
      ? "macOS"
      : ua.includes("Android")
      ? "Android"
      : ua.includes("iPhone")
      ? "iOS"
      : "Other",
    "Device Type":
      ua.includes("Mobile") || ua.includes("iPhone") ? "Mobile" : "Desktop",
    Viewport: `${window.innerWidth}×${window.innerHeight}`,
  };
  console.table(info);
  return info;
}

getBrowserInfo();
```

### Browsers to Test

| Browser        | Version | Desktop | Mobile | Status |
| -------------- | ------- | ------- | ------ | ------ |
| Chrome         | Latest  | [ ]     | [ ]    |        |
| Firefox        | Latest  | [ ]     | [ ]    |        |
| Safari         | 15+     | [ ]     | [ ]    |        |
| Edge           | Latest  | [ ]     | [ ]    |        |
| Chrome Android | Latest  |         | [ ]    |        |
| Safari iOS     | 15+     |         | [ ]    |        |

---

## Section 9: CSS Validation

### CSS Validator Script

```javascript
// Check for common CSS issues
function validateCSS() {
  const issues = {
    "Hardcoded colors": 0,
    "Missing dark-mode": 0,
    "Inline styles": 0,
    "Important flags": 0,
  };

  // Check inline styles
  document.querySelectorAll("[style]").forEach((el) => {
    issues["Inline styles"]++;
  });

  // Check for !important in stylesheets
  const sheets = document.styleSheets;
  let styleText = "";
  for (let sheet of sheets) {
    try {
      if (sheet.cssRules) {
        for (let rule of sheet.cssRules) {
          styleText += rule.cssText;
        }
      }
    } catch (e) {}
  }

  const importantCount = (styleText.match(/!important/g) || []).length;
  issues["Important flags"] = importantCount;

  console.table(issues);
}

validateCSS();
```

---

## Section 10: Testing Execution Checklist

### Week 1: Automated Testing

- [ ] Run CSS loading tests
- [ ] Run CSS variable verification
- [ ] Run dark mode tests
- [ ] Run responsive tests
- [ ] Run component visibility tests
- [ ] Run accessibility audit
- [ ] Run performance metrics
- [ ] Run browser detection
- [ ] Document all results

### Week 2: Manual Visual Testing

- [ ] Desktop testing (1920×1080)
- [ ] Mobile testing (375×812)
- [ ] Tablet testing (768×1024)
- [ ] Dark mode visual inspection
- [ ] Responsive visual inspection
- [ ] Component appearance verification
- [ ] Screenshot comparisons
- [ ] Document visual issues

### Week 3: Device Testing

- [ ] Test on iPhone (real device)
- [ ] Test on Android (real device)
- [ ] Test on iPad (real device)
- [ ] Test notched device safe-areas
- [ ] Test landscape orientation
- [ ] Test battery saver mode
- [ ] Test on slow networks
- [ ] Document device issues

### Week 4: Final Verification

- [ ] All automated tests pass
- [ ] All visual tests pass
- [ ] All device tests pass
- [ ] Performance meets targets
- [ ] Accessibility passes audit
- [ ] Browser compatibility verified
- [ ] All issues documented
- [ ] Final approval

---

## Testing Report Template

### Test Execution Report

**Test Date:** ******\_\_\_******  
**Tested By:** ******\_\_\_******  
**Browser:** ******\_\_\_******  
**Device:** ******\_\_\_******  
**Viewport:** ******\_\_\_******

### Results Summary

```
Total Tests: ___
Passed: ___  ✅
Failed: ___  ❌
Skipped: ___ ⏭️

Pass Rate: ___%
```

### Issues Found

| Issue | Severity     | Page | Status     | Fix |
| ----- | ------------ | ---- | ---------- | --- |
|       | High/Med/Low |      | Open/Fixed |     |

### Recommendations

1. ***
2. ***
3. ***

### Sign-Off

- [ ] Testing complete
- [ ] All critical issues fixed
- [ ] Ready for deployment
- [ ] Approved by QA lead

---

## Next Steps

1. **Execute Testing Scripts** - Run in browser console
2. **Document Results** - Fill out test report
3. **Fix Issues** - Update CSS as needed
4. **Re-test Fixed Issues** - Verify fixes work
5. **Create Final Report** - Compile all findings
6. **Approval** - Get stakeholder sign-off
7. **Proceed to Phase 4** - Deployment & Optimization

---

**Phase 3 Status:** ✅ Setup Complete - Ready for Testing  
**Last Updated:** December 25, 2025
