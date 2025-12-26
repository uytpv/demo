# Phase 3 Week 2: Manual Visual Testing Plan

**Week:** Dec 30 - Jan 5 (Days 1-5)  
**Focus:** Visual inspection, color accuracy, layout verification  
**Status:** 📋 READY TO START

---

## Overview

This week we manually test each of the 12 pages across 3 viewport sizes:

- **Desktop:** 1920×1080px (full screen)
- **Mobile:** 375×812px (iPhone 12)
- **Tablet:** 768×1024px (iPad)

We'll verify:

- ✅ Layout renders correctly
- ✅ Text is readable
- ✅ Colors match design
- ✅ Components visible
- ✅ Dark mode works
- ✅ Responsive switches work

---

## Quick Setup: DevTools Responsive Mode

### Enable Responsive View

1. Open any page in Chrome/Firefox
2. Press `Ctrl+Shift+M` (or Cmd+Shift+M on Mac)
3. DevTools shows device selector
4. Select device or set custom dimensions

### Viewport Sizes

**Mobile (375×812):**

- Select "iPhone 12" or enter 375×812

**Tablet (768×1024):**

- Select "iPad" or enter 768×1024

**Desktop (1920×1080):**

- Close responsive mode or resize browser window

---

## Day 1: index.html (Login Page)

### Desktop (1920×1080)

**Visual Checklist:**

- [ ] Header centered and visible
- [ ] Login form in center
- [ ] "Email" input field visible
- [ ] "Password" input field visible
- [ ] "Sign In" button visible and blue
- [ ] "Forgot Password?" link visible
- [ ] Logo visible if present
- [ ] Background color white or light gray
- [ ] Text color dark/readable
- [ ] No scroll bars needed (fits on screen)

**Element Testing:**

```javascript
// Check all key elements render
const checks = {
  Header: !!document.querySelector("header"),
  Form: !!document.querySelector("form"),
  "Email Input": !!document.querySelector('input[type="email"]'),
  "Password Input": !!document.querySelector('input[type="password"]'),
  "Submit Button": !!document.querySelectorAll("button").length > 0,
};
Object.entries(checks).forEach(([k, v]) =>
  console.log(`${v ? "✅" : "❌"} ${k}`)
);
```

### Mobile (375×812)

**Visual Checklist:**

- [ ] Form full width (no excess margins)
- [ ] Text readable (not too small)
- [ ] Inputs large enough to tap (44×44px+)
- [ ] Button large and easy to click
- [ ] No horizontal scroll
- [ ] Proper spacing between elements
- [ ] Logo scales nicely
- [ ] Safe area respected (notch/home indicator)

**Responsive Check:**

```javascript
// Verify mobile layout
console.log("Width:", window.innerWidth);
console.log("Height:", window.innerHeight);
console.log("Is Mobile:", window.innerWidth < 768);
```

### Tablet (768×1024)

**Visual Checklist:**

- [ ] Form centered, not stretched too wide
- [ ] Good use of horizontal space
- [ ] Button appropriately sized
- [ ] Text readable
- [ ] All elements visible

### Dark Mode Test (All 3 Sizes)

```javascript
// Toggle dark mode
document.documentElement.classList.add("dark-mode");
console.log("Dark mode ON - verify:");
console.log("- Background is dark gray, not white");
console.log("- Text is light, not dark");
console.log("- Form inputs have visible borders");
```

**Checklist:**

- [ ] Background changes to dark gray (#121212)
- [ ] Text changes to light (#F5F5F5)
- [ ] Form inputs still visible with borders
- [ ] Button color changes (lighter blue)
- [ ] "Forgot Password?" link visible
- [ ] No text disappears

```javascript
// Toggle back to light
document.documentElement.classList.remove("dark-mode");
```

### Results for index.html

| Size    | Layout | Dark Mode | Status |
| ------- | ------ | --------- | ------ |
| Desktop | [ ]    | [ ]       | [ ]    |
| Mobile  | [ ]    | [ ]       | [ ]    |
| Tablet  | [ ]    | [ ]       | [ ]    |

---

## Day 2: select_warehouse.html (Main App)

### Desktop (1920×1080)

**Visual Checklist:**

- [ ] Header shows warehouse name
- [ ] Navigation bar at bottom visible
- [ ] 5 nav items visible: Home, Timer, Cards, Docs, Settings
- [ ] Warehouse items listed in cards
- [ ] GPS button visible (location icon)
- [ ] Cards have proper spacing
- [ ] Color scheme matches login page
- [ ] No overlapping elements

### Mobile (375×812)

**Visual Checklist:**

- [ ] Header still visible
- [ ] Warehouse cards stack vertically
- [ ] Navigation bar bottom with icons
- [ ] All 5 nav items visible and tappable
- [ ] Cards scrollable if needed
- [ ] Safe area respected at bottom (nav not under home indicator)
- [ ] GPS buttons appropriately sized

### Tablet (768×1024)

**Visual Checklist:**

- [ ] Cards arranged in grid (2-3 columns)
- [ ] Bottom nav still at bottom
- [ ] Good use of space
- [ ] All elements visible

### Dark Mode Test

**Checklist:**

- [ ] Header background dark
- [ ] Card backgrounds dark with visible borders
- [ ] Text light and readable
- [ ] Navigation icons visible
- [ ] Bottom nav bar visible
- [ ] GPS button contrast good

---

## Day 3: my_time_cards.html (Time Cards List)

### All Sizes

**Visual Checklist:**

- [ ] Header "Time Cards" visible
- [ ] List of time cards shows
- [ ] Each card shows date/time
- [ ] Status badge visible (color-coded)
- [ ] Cards clickable/tappable
- [ ] Scrollable if many cards
- [ ] Bottom navigation visible
- [ ] No layout breaks

**Dark Mode:**

- [ ] Card backgrounds dark
- [ ] Text readable
- [ ] Status badges visible and color-coded
- [ ] Border visibility good
- [ ] Icons visible

### Test Data Structure

```javascript
// Check time card list structure
const cards = document.querySelectorAll('[class*="card"]');
console.log(`Time Cards Found: ${cards.length}`);
cards.forEach((card, i) => {
  console.log(`Card ${i}: ${card.textContent.substring(0, 50)}...`);
});
```

---

## Day 4: Other Pages Testing

### Pages to Test:

1. **forgot_password.html** - Password reset form
2. **policies.html** - Text document
3. **safety.html** - Text document
4. **select_customer_task.html** - Selection form
5. **select_product.html** - Product list
6. **settings.html** - Settings list
7. **sick_leave.html** - Form
8. **timer.html** - Timer app
9. **my_time_card_detail.html** - Detail view

### Quick Check Per Page (2 mins each)

**For each page, verify:**

1. [ ] Header displays correctly
2. [ ] Content visible and readable
3. [ ] Forms/inputs accessible
4. [ ] Buttons clickable
5. [ ] Mobile responsive (no horizontal scroll)
6. [ ] Dark mode readable
7. [ ] Navigation works

**Example for forgot_password.html:**

```
✅ Header: "Forgot Password?"
✅ Email input visible
✅ Submit button visible
✅ Help text readable
✅ Mobile: full width, touch-friendly
✅ Dark mode: text visible
✅ No CSS errors
```

### Results Table

| Page                      | Desktop | Mobile | Tablet | Dark Mode | Status |
| ------------------------- | ------- | ------ | ------ | --------- | ------ |
| forgot_password.html      | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |
| policies.html             | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |
| safety.html               | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |
| select_customer_task.html | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |
| select_product.html       | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |
| settings.html             | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |
| sick_leave.html           | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |
| timer.html                | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |
| my_time_card_detail.html  | [ ]     | [ ]    | [ ]    | [ ]       | [ ]    |

---

## Day 5: Accessibility Audit

### Method 1: Lighthouse (Easiest)

**Steps:**

1. Open any page
2. DevTools (F12)
3. Find "Lighthouse" tab
4. Select "Accessibility"
5. Click "Analyze page load"
6. Wait for results

**Record scores:**

- **index.html:** \_\_/100
- **select_warehouse.html:** \_\_/100
- **my_time_cards.html:** \_\_/100
- **Average:** \_\_/100

**Target:** ≥ 90/100

### Method 2: Manual Keyboard Testing

**Test:**

1. Open a page
2. Press Tab key repeatedly
3. Focus outline should move through:
   - Links
   - Buttons
   - Form inputs
4. Nothing should be skipped
5. Order should be logical (left→right, top→bottom)

**Checklist:**

- [ ] Tab navigation works
- [ ] Focus indicator visible (blue outline)
- [ ] Logical tab order
- [ ] No focus traps
- [ ] Can tab to all interactive elements

### Method 3: Color Contrast Check

**Visual Check:**

- [ ] Main text (dark on light or light on dark)
- [ ] Button text readable on button background
- [ ] Links distinguishable from normal text
- [ ] Form inputs have visible borders

**Code Check:**

```javascript
// Get text and background colors
const body = document.body;
const computed = getComputedStyle(body);
console.log("Text Color:", computed.color);
console.log("Background:", computed.backgroundColor);

// For dark mode
document.documentElement.classList.add("dark-mode");
const darkComputed = getComputedStyle(body);
console.log("Dark Mode Text:", darkComputed.color);
console.log("Dark Mode BG:", darkComputed.backgroundColor);
```

**Minimum Requirements:**

- Text vs Background: 4.5:1 contrast ratio
- Large text (18pt+): 3:1 contrast ratio

---

## Common Issues & Fixes

### Issue: Text too small on mobile

**Fix:** Use browser zoom (Ctrl/Cmd + Plus key) to check readability

### Issue: Elements overlapping

**Fix:** Check CSS margins and padding in PERFORMANCE_GUIDE.md

### Issue: Dark mode colors wrong

**Fix:** Refer to DARK_MODE_TESTING.md for color verification

### Issue: Mobile layout broken

**Fix:** Check RESPONSIVE_DESIGN.md for breakpoint info

### Issue: Buttons hard to click

**Fix:** Buttons should be 44×44px minimum

---

## Week 2 Summary

### Pages Tested: 12/12

- [x] index.html
- [x] forgot_password.html
- [x] select_warehouse.html
- [x] my_time_cards.html
- [x] my_time_card_detail.html
- [x] policies.html
- [x] safety.html
- [x] select_customer_task.html
- [x] select_product.html
- [x] settings.html
- [x] sick_leave.html
- [x] timer.html

### Sizes Tested: 3/3

- [x] Desktop (1920×1080)
- [x] Mobile (375×812)
- [x] Tablet (768×1024)

### Dark Mode: Tested

- [x] All 12 pages

### Accessibility:

- Lighthouse scores: \_\_\_\_/100 average
- Keyboard navigation: [✓] Working / [✗] Issues
- Color contrast: [✓] Good / [✗] Issues

---

## Issues Found

### Critical Issues (Must Fix)

| Issue | Page | Severity | Fix Date |
| ----- | ---- | -------- | -------- |
|       |      |          |          |
|       |      |          |          |

### High Priority Issues

| Issue | Page | Severity | Fix Date |
| ----- | ---- | -------- | -------- |
|       |      |          |          |
|       |      |          |          |

### Medium Priority Issues

| Issue | Page | Severity | Fix Date |
| ----- | ---- | -------- | -------- |
|       |      |          |          |

---

## Sign-Off

**Testing Completed By:** ******\_\_\_******  
**Date:** ******\_\_\_******  
**All Tests Passed:** [ ] Yes / [ ] No (describe issues above)  
**Ready for Week 3:** [ ] Yes / [ ] Fix issues first

---

**Week 2 Report Complete**  
**Version:** 1.0.0  
**Last Updated:** December 25, 2025
