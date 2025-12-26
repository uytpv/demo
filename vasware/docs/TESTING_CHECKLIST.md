# Phase 2 Quick Testing Checklist

**Status:** Ready for testing
**Created:** December 25, 2025

---

## ✅ Pre-Testing Verification (5 min)

- [ ] All 14 CSS files exist in correct locations
- [ ] `index.css` imports all files in correct order
- [ ] All 12 HTML files link to `index.css`
- [ ] No console errors when opening pages
- [ ] Page loads within 2 seconds

---

## 🖥️ Desktop Testing (Chrome, 1920×1080) (10 min)

### Login Page (index.html)

- [ ] Logo displays (blue letter D, 8.5rem)
- [ ] Language buttons (3 flags, 2.5rem square)
- [ ] Email input with icon
- [ ] Password input with toggle button
- [ ] Sign In button (full width, blue)
- [ ] Forgot Password link (blue, underlined)
- [ ] Backdrop circles visible
- [ ] Proper spacing/alignment

### Warehouse Page (select_warehouse.html)

- [ ] Header sticky, visible
- [ ] Notify badge (red dot, top-right)
- [ ] Search input (magnifying glass icon)
- [ ] 5 warehouse items (icon, name, address, chevron)
- [ ] Bottom navigation (5 items, Home active)
- [ ] No overlapping elements

### Other Pages (quick scan)

- [ ] my_time_cards.html - Header, nav, content
- [ ] timer.html - Header, nav, content
- [ ] settings.html - Header, nav, content

---

## 📱 Mobile Testing (Chrome DevTools, 375×812) (10 min)

### Layout & Overflow

- [ ] No horizontal scrolling
- [ ] Content fits within viewport
- [ ] Header doesn't block content
- [ ] Bottom nav doesn't overlap content
- [ ] All elements properly sized for mobile

### Touch Targets

- [ ] Buttons are at least 44px tall
- [ ] Navigation items are clickable
- [ ] Input fields are easy to tap
- [ ] No elements too close together

### Spacing

- [ ] Padding looks right on mobile
- [ ] Margins adjusted for small screen
- [ ] Text is readable (not too small)

---

## 🌙 Dark Mode Testing (Chromium DevTools) (10 min)

### Toggle Dark Mode

```javascript
// Run in console on any page
document.body.classList.add("dark-mode");
document.body.classList.remove("dark-mode");
```

### Verify Colors

- [ ] Backgrounds change to dark (#0f172a)
- [ ] Text becomes light (#f5f7fa)
- [ ] All text remains readable
- [ ] Borders change to dark gray
- [ ] Buttons maintain visibility
- [ ] Icons are visible on dark background

### Dark Mode Pages

- [ ] index.html (login)
- [ ] select_warehouse.html
- [ ] select_customer_task.html
- [ ] All other pages

---

## 📐 Responsive Testing (3 breakpoints) (15 min)

### Mobile (375px)

- [ ] Single column layout
- [ ] Full-width containers
- [ ] Smaller padding/margin
- [ ] Navigation visible
- [ ] No overflow/scrolling

### Tablet (768px)

- [ ] Layout may expand slightly
- [ ] Better use of space
- [ ] Comfortable reading
- [ ] Touch targets still good

### Desktop (1024px)

- [ ] Wider layout (if applicable)
- [ ] Max-width containers
- [ ] Generous spacing
- [ ] Bottom nav may be hidden

---

## 🔍 Component Testing (15 min)

### Headers (.app-header)

- [ ] Sticky positioning works
- [ ] Backdrop blur visible
- [ ] Title is centered
- [ ] Buttons respond to clicks
- [ ] Notify badge visible

### Forms (.input-with-icon)

- [ ] Icons aligned left
- [ ] Input text not overlapping icon
- [ ] Focus state visible
- [ ] Placeholder visible
- [ ] Password toggle works

### Buttons (.btn-primary)

- [ ] Blue background
- [ ] Full width on mobile
- [ ] Hover effect works
- [ ] Active/press feedback
- [ ] Text centered

### Navigation (.warehouse-nav)

- [ ] Fixed at bottom
- [ ] All 5 items visible
- [ ] Active item highlighted
- [ ] Links work
- [ ] Not blocking content

### Language Selector

- [ ] Active button: white bg, shadow
- [ ] Inactive buttons: gray, grayed out
- [ ] All 3 flags visible
- [ ] Proper size (2.5rem)

---

## 🎨 Visual Consistency (10 min)

### Color Consistency

- [ ] Primary color (#0088FF) consistent
- [ ] Gray shades match throughout
- [ ] Dark mode colors consistent
- [ ] No mismatched blues/grays

### Typography

- [ ] Font sizes match design
- [ ] Font weights correct (400, 500, 600, 700)
- [ ] Line heights appropriate
- [ ] Text colors readable

### Spacing

- [ ] Margins/padding consistent
- [ ] Gaps between items uniform
- [ ] No awkward whitespace
- [ ] Proper alignment

---

## 🔗 Navigation Testing (10 min)

### Link Verification

- [ ] All navigation links work
- [ ] Back buttons go to correct page
- [ ] Language selector changes visible
- [ ] Bottom nav links navigate

### Active States

- [ ] Current page highlighted in nav
- [ ] Active button styling visible
- [ ] Clear visual feedback

---

## ⚡ Performance Check (5 min)

### Load Time

- [ ] Page loads in < 2 seconds
- [ ] CSS loads quickly
- [ ] No layout shift/flashing
- [ ] Smooth transitions

### Animation Smoothness

- [ ] Button hover smooth
- [ ] Transitions don't stutter
- [ ] No janky animations
- [ ] Mobile still smooth

---

## 🌐 Browser Compatibility (Optional) (15 min)

### Browsers to Test

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Edge (if available)

### What to Check

- [ ] Styles apply correctly
- [ ] No broken layouts
- [ ] Icons display
- [ ] Colors render correctly

---

## 📱 Device Testing (Optional) (20 min)

### Real Devices

- [ ] iPhone (6.1") - iPhone 14
- [ ] iPad (7-9") - Tablet
- [ ] Android Phone (5.5") - Galaxy S21
- [ ] Landscape mode on all

### Notched Devices

- [ ] iPhone X/11/12/13/14 - Content clears notch
- [ ] Dynamic Island - Content not hidden
- [ ] Home indicator - Nav clears bottom

---

## 📝 Documentation Review (5 min)

- [ ] DESIGN_TOKENS.md is complete
- [ ] COMPONENTS.md has all components
- [ ] MIGRATION_GUIDE.md is clear
- [ ] README.md updated with new architecture
- [ ] No dead links in docs

---

## 🐛 Bug Check (10 min)

### Common Issues

- [ ] No console errors (F12 > Console)
- [ ] No console warnings
- [ ] No broken images
- [ ] No 404 errors
- [ ] No CSS import errors

### Quick Debug

```javascript
// Check for console errors
// Check network tab for failed requests
// Check for layout shift
// Verify all imports loaded
```

---

## ✨ Final Verification (5 min)

- [ ] All tests passed
- [ ] No critical issues
- [ ] Documentation complete
- [ ] Ready for production deployment

---

## Summary

### Total Test Time: ~2 hours

**Test Coverage:**

- Desktop: 1920×1080
- Mobile: 375×812
- Tablet: 768×1024
- Dark mode: All pages
- Browsers: Chrome (required), others (optional)
- Devices: Desktop (required), mobile (optional)

### Success Criteria

✅ **MUST HAVE:**

- All pages render without errors
- Dark mode works correctly
- Responsive on 3 breakpoints
- All components look correct
- No console errors

⚠️ **SHOULD HAVE:**

- All browsers compatible
- Smooth animations
- Fast load time
- Proper spacing/alignment

### Next Steps

If all tests pass:

1. Create testing report
2. Commit changes to git
3. Deploy to staging
4. Deploy to production

If issues found:

1. Document issue
2. Fix and re-test
3. Update documentation if needed
4. Re-run complete testing suite

---

**Testing Started:** [Date/Time]
**Testing Completed:** [Date/Time]
**Tested By:** [Name]
**Overall Status:** [ ] Pass [ ] Fail

**Notes:**

```
[Add any findings, issues, or notes here]
```
