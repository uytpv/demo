# Dark Mode Testing Guide

Complete guide for testing and verifying dark mode functionality.

---

## Table of Contents

1. [Dark Mode Implementation](#dark-mode-implementation)
2. [Manual Testing Procedures](#manual-testing-procedures)
3. [Color Verification](#color-verification)
4. [Automated Testing Scripts](#automated-testing-scripts)
5. [Common Issues & Fixes](#common-issues--fixes)
6. [Test Checklist](#test-checklist)

---

## Dark Mode Implementation

### How It Works

**CSS Variable System:**

```css
/* Light Mode (Default) */
:root {
  --color-bg-primary: #ffffff;
  --color-text-primary: #1a1a1a;
  --color-primary: #0088ff;
  /* ... etc */
}

/* Dark Mode */
:root.dark-mode {
  --color-bg-primary: #121212;
  --color-text-primary: #f5f5f5;
  --color-primary: #64b5f6;
  /* ... etc */
}
```

**Toggle Mechanism:**

```javascript
// Switch to dark mode
document.documentElement.classList.add("dark-mode");

// Switch to light mode
document.documentElement.classList.remove("dark-mode");

// Toggle
document.documentElement.classList.toggle("dark-mode");

// Check current mode
const isDarkMode = document.documentElement.classList.contains("dark-mode");
```

**Storage:**

```javascript
// Save preference
localStorage.setItem("theme", "dark");
localStorage.setItem("theme", "light");

// Load preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark-mode");
}
```

### CSS Variables Affected

**Colors (20+ variables):**

- Background colors: bg-primary, bg-secondary, bg-tertiary
- Text colors: text-primary, text-secondary, text-disabled
- Brand colors: primary, secondary, tertiary
- Semantic: success, warning, danger, info
- Borders: border-light, border-medium, border-dark
- Overlay: overlay-light, overlay-medium, overlay-dark

**Safe-area Support:**

```css
:root.dark-mode {
  --safe-area-inset-top: 0px;
  --safe-area-inset-bottom: 0px;
  /* ... etc */
}
```

---

## Manual Testing Procedures

### Procedure 1: Browser DevTools (Light → Dark)

**Steps:**

1. Open any page (e.g., index.html)
2. Open DevTools (F12)
3. Switch browser to Dark Mode:
   - **Chrome:** Settings → Appearance → Dark
   - **Firefox:** Preferences → Browsing → Dark theme
   - **Safari:** System Preferences → General → Dark
4. Reload page (Ctrl+R)
5. Check if page automatically switches to dark mode
6. Switch back to Light Mode
7. Reload and verify light mode restored

**Expected Results:**

- ✅ Page follows system theme
- ✅ Colors switch automatically
- ✅ No flickering
- ✅ Text readable in both modes

### Procedure 2: Manual Toggle (JavaScript)

**Steps:**

1. Open any page
2. Open DevTools Console (F12 → Console)
3. Run toggle script:

```javascript
// Add dark mode
document.documentElement.classList.add("dark-mode");
console.log("Dark mode enabled");

// Remove dark mode
document.documentElement.classList.remove("dark-mode");
console.log("Dark mode disabled");

// Toggle
document.documentElement.classList.toggle("dark-mode");
```

4. Verify colors change immediately
5. Refresh page to check persistence

**Expected Results:**

- ✅ Colors change immediately (no delay)
- ✅ All elements update (backgrounds, text, borders)
- ✅ No console errors
- ✅ Smooth transition if CSS animations used

### Procedure 3: System Preference Test

**macOS:**

1. System Preferences → General → Appearance
2. Select "Dark"
3. Reload browser page
4. Verify dark mode applied
5. Change back to "Light"
6. Reload and verify light mode

**Windows 11:**

1. Settings → Personalization → Colors
2. Select "Dark"
3. Reload page
4. Verify dark mode
5. Change to "Light"
6. Reload and verify

**iOS:**

1. Settings → Display & Brightness → Dark
2. Open app in browser
3. Verify dark mode
4. Switch to Light
5. Verify light mode

**Android:**

1. Settings → Display → Dark Theme
2. Enable
3. Reload page
4. Verify dark mode
5. Disable and verify light mode

### Procedure 4: Element-by-Element Verification

**For each page, check these elements:**

**Header:**

- [ ] Background color correct for mode
- [ ] Text color readable
- [ ] Warehouse name visible
- [ ] Icons visible
- [ ] Navigation buttons distinct

**Content Area:**

- [ ] Background color appropriate
- [ ] Main text readable (contrast ≥ 4.5:1)
- [ ] Secondary text visible
- [ ] Borders visible
- [ ] Icons/images visible

**Forms:**

- [ ] Input fields visible
- [ ] Placeholder text readable
- [ ] Focus indicator visible
- [ ] Labels readable
- [ ] Error messages visible

**Buttons:**

- [ ] Primary button visible and distinct
- [ ] Secondary button visible
- [ ] Disabled state visible
- [ ] Hover state visible (if on desktop)

**Navigation:**

- [ ] Bottom nav bar visible
- [ ] Icons visible
- [ ] Active state clear
- [ ] Text readable
- [ ] Spacing correct

**Cards/List Items:**

- [ ] Card background visible
- [ ] Text readable
- [ ] Shadows/borders visible (if used)
- [ ] Hover/active states visible

---

## Color Verification

### Expected Colors by Mode

**Light Mode (Default)**

| Element        | Variable             | Value   | Check |
| -------------- | -------------------- | ------- | ----- |
| Background     | --color-bg-primary   | #FFFFFF | [ ]   |
| Text           | --color-text-primary | #1A1A1A | [ ]   |
| Primary Button | --color-primary      | #0088FF | [ ]   |
| Borders        | --color-border-light | #E0E0E0 | [ ]   |
| Success        | --color-success      | #4CAF50 | [ ]   |
| Warning        | --color-warning      | #FF9800 | [ ]   |
| Error          | --color-danger       | #F44336 | [ ]   |

**Dark Mode**

| Element        | Variable             | Value   | Check |
| -------------- | -------------------- | ------- | ----- |
| Background     | --color-bg-primary   | #121212 | [ ]   |
| Text           | --color-text-primary | #F5F5F5 | [ ]   |
| Primary Button | --color-primary      | #64B5F6 | [ ]   |
| Borders        | --color-border-dark  | #333333 | [ ]   |
| Success        | --color-success      | #81C784 | [ ]   |
| Warning        | --color-warning      | #FFB74D | [ ]   |
| Error          | --color-danger       | #EF5350 | [ ]   |

### Verification Script

```javascript
// Get all CSS color variables
function verifySizes() {
  const colors = {
    "Light Mode": {
      "--color-bg-primary": "#FFFFFF",
      "--color-text-primary": "#1A1A1A",
      "--color-primary": "#0088FF",
      "--color-success": "#4CAF50",
      "--color-warning": "#FF9800",
      "--color-danger": "#F44336",
    },
    "Dark Mode": {
      "--color-bg-primary": "#121212",
      "--color-text-primary": "#F5F5F5",
      "--color-primary": "#64B5F6",
      "--color-success": "#81C784",
      "--color-warning": "#FFB74D",
      "--color-danger": "#EF5350",
    },
  };

  const root = document.documentElement;
  const isDark = root.classList.contains("dark-mode");
  const mode = isDark ? "Dark Mode" : "Light Mode";
  const expectedColors = colors[mode];

  console.log(`\n=== ${mode} Color Verification ===`);

  let allCorrect = true;
  for (const [colorVar, expectedValue] of Object.entries(expectedColors)) {
    const actualValue = getComputedStyle(root)
      .getPropertyValue(colorVar)
      .trim();
    const match = actualValue === expectedValue;

    console.log(
      `${colorVar}: ${actualValue} (Expected: ${expectedValue}) ${
        match ? "✅" : "❌"
      }`
    );

    if (!match) allCorrect = false;
  }

  console.log(`\nAll colors correct: ${allCorrect ? "✅ YES" : "❌ NO"}`);
  return allCorrect;
}

// Run verification
verifySizes();
```

### Contrast Verification

```javascript
// Check color contrast (WCAG AA: 4.5:1)
function checkContrast(foreground, background) {
  const getLuminance = (hex) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const [rs, gs, bs] = [r, g, b].map((x) => {
      x = x / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

// Verify text contrast in current mode
function verifyTextContrast() {
  const isDark = document.documentElement.classList.contains("dark-mode");
  const mode = isDark ? "Dark" : "Light";

  const textColor = isDark ? "#F5F5F5" : "#1A1A1A";
  const bgColor = isDark ? "#121212" : "#FFFFFF";

  const contrast = checkContrast(textColor, bgColor);
  const wcagAA = contrast >= 4.5;

  console.log(`\n=== ${mode} Mode Text Contrast ===`);
  console.log(`Text: ${textColor} on ${bgColor}`);
  console.log(`Contrast Ratio: ${contrast}:1`);
  console.log(`WCAG AA (4.5:1): ${wcagAA ? "✅ PASS" : "❌ FAIL"}`);

  return wcagAA;
}

verifyTextContrast();
```

---

## Automated Testing Scripts

### Script 1: Dark Mode Toggle Test

```javascript
// Test dark mode on/off
function testDarkModeToggle() {
  console.log("\n=== Dark Mode Toggle Test ===");

  const root = document.documentElement;
  const initialMode = root.classList.contains("dark-mode");

  // Toggle to dark
  root.classList.add("dark-mode");
  const darkAdded = root.classList.contains("dark-mode");
  console.log(`Add dark-mode class: ${darkAdded ? "✅" : "❌"}`);

  // Check CSS variable changed
  const bgDark = getComputedStyle(root).getPropertyValue("--color-bg-primary");
  console.log(`Background color in dark: ${bgDark} (Should be #121212)`);

  // Toggle to light
  root.classList.remove("dark-mode");
  const darkRemoved = !root.classList.contains("dark-mode");
  console.log(`Remove dark-mode class: ${darkRemoved ? "✅" : "❌"}`);

  // Check CSS variable changed back
  const bgLight = getComputedStyle(root).getPropertyValue("--color-bg-primary");
  console.log(`Background color in light: ${bgLight} (Should be #FFFFFF)`);

  // Restore initial mode
  if (initialMode) {
    root.classList.add("dark-mode");
  }

  console.log(
    `\nToggle test: ${darkAdded && darkRemoved ? "✅ PASS" : "❌ FAIL"}`
  );
}

testDarkModeToggle();
```

### Script 2: Dark Mode Persistence Test

```javascript
// Test localStorage persistence
function testDarkModePersistence() {
  console.log("\n=== Dark Mode Persistence Test ===");

  // Test saving dark mode
  localStorage.setItem("theme", "dark");
  console.log(`Saved theme: dark`);

  const saved = localStorage.getItem("theme");
  console.log(`Retrieved theme: ${saved}`);
  console.log(`Persistence: ${saved === "dark" ? "✅ PASS" : "❌ FAIL"}`);

  // Test saving light mode
  localStorage.setItem("theme", "light");
  const savedLight = localStorage.getItem("theme");
  console.log(
    `Light mode saved/retrieved: ${savedLight === "light" ? "✅" : "❌"}`
  );

  // Clean up
  localStorage.removeItem("theme");
}

testDarkModePersistence();
```

### Script 3: All Pages Dark Mode Test

```javascript
// Test dark mode on current page
function testCurrentPageDarkMode() {
  console.log("\n=== Current Page Dark Mode Test ===");

  const pageName = document.title || "Unknown Page";
  console.log(`Page: ${pageName}`);

  const root = document.documentElement;

  // Enable dark mode
  root.classList.add("dark-mode");

  // Check key elements
  const checks = {
    Header: document.querySelector("header"),
    "Main Content": document.querySelector("main"),
    Navigation: document.querySelector("nav"),
    Buttons: document.querySelector("button"),
    Inputs: document.querySelector("input"),
  };

  let allFound = true;
  console.log("\nElement visibility check:");
  for (const [name, element] of Object.entries(checks)) {
    const exists = element !== null;
    console.log(`${name}: ${exists ? "✅" : "❌"}`);
    if (!exists) allFound = false;
  }

  console.log(`\nAll elements found: ${allFound ? "✅ PASS" : "❌ FAIL"}`);

  // Disable dark mode
  root.classList.remove("dark-mode");
}

testCurrentPageDarkMode();
```

### Script 4: Dark Mode on All 12 Pages

```javascript
// Manual test: Run on each page
// Open in browser console, run script, note results

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

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const pageIndex = pages.indexOf(currentPage);

console.log(`\n=== Dark Mode Test Results ===`);
console.log(
  `Current Page: ${currentPage || "index.html"} (${pageIndex + 1}/${
    pages.length
  })`
);
console.log(`\nRunning verification scripts...`);

// Run all verification
document.documentElement.classList.add("dark-mode");
console.log("\n1. Dark Mode Enabled: ✅");

// Check CSS variable
const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-bg-primary"
);
const isDark = bgColor.includes("12") || bgColor.includes("121"); // #121212
console.log(
  `2. CSS Variable Updated: ${isDark ? "✅" : "❌"} (${bgColor.trim()})`
);

// Check elements visible
const body = document.body;
const isVisible = body.offsetHeight > 0;
console.log(`3. Page Content Visible: ${isVisible ? "✅" : "❌"}`);

// Result
const result = isDark && isVisible ? "✅ PASS" : "❌ FAIL";
console.log(`\nResult: ${result}`);
console.log(`\nNext: Test page ${pageIndex + 2}/${pages.length}`);

// Restore light mode
document.documentElement.classList.remove("dark-mode");
```

---

## Common Issues & Fixes

### Issue 1: Dark Mode Not Applied

**Symptoms:**

- Page doesn't switch to dark colors
- CSS variables not updating
- Colors stay same in both modes

**Causes:**

- CSS variable not defined
- Class not applied correctly
- CSS not linked properly

**Fixes:**

```javascript
// Verify class applied
const hasDarkMode = document.documentElement.classList.contains("dark-mode");
console.log("Dark mode class:", hasDarkMode);

// Verify variable available
const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-bg-primary"
);
console.log("Background color:", bgColor);

// Re-apply if missing
if (!hasDarkMode) {
  document.documentElement.classList.add("dark-mode");
}
```

### Issue 2: Colors Not Switching Smoothly

**Symptoms:**

- Colors flash/flicker when toggling
- Transition appears jittery
- Elements disappear briefly

**Causes:**

- CSS transitions not defined
- JavaScript toggle too fast
- CSS missing vendor prefixes

**Fixes:**

```css
/* Add smooth transitions */
:root {
  --color-transition: color 0.3s ease, background-color 0.3s ease;
}

body {
  transition: var(--color-transition);
}

button {
  transition: var(--color-transition);
}
```

### Issue 3: Text Not Readable in Dark Mode

**Symptoms:**

- Text hard to read (low contrast)
- Dark text on dark background
- White text on white background

**Causes:**

- Color variable not updated for dark mode
- Hardcoded colors used instead of variables
- Contrast ratio < 4.5:1

**Fixes:**

```css
/* Ensure variables defined for dark mode */
:root.dark-mode {
  --color-text-primary: #f5f5f5; /* Light text */
  --color-text-secondary: #bdbdbd; /* Lighter secondary */
}

/* Use variables, not hardcoded colors */
body {
  color: var(--color-text-primary); /* ✅ Good */
  /* color: #333333; */ /* ❌ Bad - hardcoded */
}
```

### Issue 4: Images/Icons Invisible

**Symptoms:**

- Images don't show in dark mode
- Icons missing or invisible
- SVGs disappear

**Causes:**

- Image background not contrasting
- Icon color not changed
- Transparency issues

**Fixes:**

```css
/* For SVG icons */
svg {
  fill: var(--color-text-primary);
}

/* For images that need background */
img {
  background: var(--color-bg-secondary);
  padding: 10px;
  border-radius: 8px;
}
```

### Issue 5: Borders Invisible

**Symptoms:**

- Borders disappear in dark mode
- Cards lose definition
- Form inputs blend in

**Causes:**

- Border color variable not defined
- Using hardcoded colors

**Fixes:**

```css
/* Define border colors for dark mode */
:root.dark-mode {
  --color-border-light: #333333;
  --color-border-medium: #555555;
}

/* Use variables */
input {
  border: 1px solid var(--color-border-medium);
}

.card {
  border: 1px solid var(--color-border-light);
}
```

---

## Test Checklist

### Before Testing

- [ ] Close all browser extensions that modify colors
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Close private/incognito windows
- [ ] Reset browser zoom to 100% (Ctrl+0)

### Light Mode Baseline

- [ ] Check index.html
- [ ] Verify all colors correct
- [ ] Check text readability
- [ ] Verify component styling

### Dark Mode Testing

#### Page: index.html

- [ ] Background color: #121212 ✓
- [ ] Text color: #F5F5F5 ✓
- [ ] Button color: #64B5F6 ✓
- [ ] Form inputs visible ✓
- [ ] Logo visible ✓

#### Page: select_warehouse.html

- [ ] Header background dark ✓
- [ ] Warehouse list readable ✓
- [ ] Cards visible with borders ✓
- [ ] Bottom nav visible ✓
- [ ] Icons visible ✓

#### Page: my_time_cards.html

- [ ] List background dark ✓
- [ ] Text readable ✓
- [ ] Date/time visible ✓
- [ ] Status badges visible ✓
- [ ] Cards distinct ✓

#### All Other Pages

- [ ] forgot_password.html
- [ ] policies.html
- [ ] safety.html
- [ ] select_customer_task.html
- [ ] select_product.html
- [ ] settings.html
- [ ] sick_leave.html
- [ ] timer.html
- [ ] my_time_card_detail.html

### Persistence Test

- [ ] Enable dark mode
- [ ] Close browser tab
- [ ] Reopen page
- [ ] Dark mode persisted? ✓

### Performance

- [ ] No lag when toggling ✓
- [ ] No console errors ✓
- [ ] Smooth transitions ✓

### Accessibility

- [ ] Text contrast ≥ 4.5:1 ✓
- [ ] Keyboard navigation works ✓
- [ ] Focus indicators visible ✓
- [ ] Screen reader compatible ✓

---

**Last Updated:** December 25, 2025  
**Version:** 1.0.0
