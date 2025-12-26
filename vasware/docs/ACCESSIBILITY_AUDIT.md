# Accessibility (A11Y) Audit Guide

Complete guide for ensuring WCAG 2.1 compliance across all pages.

---

## Table of Contents

1. [WCAG Principles](#wcag-principles)
2. [Checklist](#accessibility-checklist)
3. [Testing Tools](#testing-tools)
4. [Common Issues & Fixes](#common-issues--fixes)

---

## WCAG Principles

### 1. **Perceivable**

Users must be able to perceive content

- [ ] Color not sole method to convey info
- [ ] Images have alt text
- [ ] Audio content has captions
- [ ] Content is distinguishable

### 2. **Operable**

Users must be able to operate the interface

- [ ] Keyboard navigation works
- [ ] No keyboard traps
- [ ] Page functions without mouse
- [ ] Enough time to read/interact

### 3. **Understandable**

Users must understand the content

- [ ] Language is clear
- [ ] Pages behave predictably
- [ ] Help & error handling available
- [ ] Text is readable

### 4. **Robust**

Content compatible with assistive technologies

- [ ] Valid HTML
- [ ] ARIA labels present
- [ ] Screen reader friendly
- [ ] Code quality high

---

## Accessibility Checklist

### Perceivability

#### Text Alternatives

- [ ] All images have descriptive alt text

  ```html
  <!-- Bad -->
  <img src="icon.png" />

  <!-- Good -->
  <img src="icon.png" alt="Home icon" />
  ```

- [ ] Icons without text have aria-label

  ```html
  <!-- Good -->
  <button aria-label="Close menu">
    <span class="material-symbols-outlined">close</span>
  </button>
  ```

- [ ] SVGs have title or aria-label
  ```html
  <svg aria-label="Warehouse icon">
    <title>Warehouse</title>
  </svg>
  ```

#### Color & Contrast

- [ ] Text contrast minimum 4.5:1 (WCAG AA)
- [ ] Color not sole method to convey status

  ```html
  <!-- Bad - color only -->
  <span style="color: red">Error</span>

  <!-- Good - icon + color + text -->
  <span class="text-error">
    <span class="material-symbols-outlined">error</span>
    Error message
  </span>
  ```

- [ ] UI components have 3:1 contrast

#### Adaptability

- [ ] Content readable at 200% zoom
- [ ] No horizontal scrolling at 200% zoom
- [ ] Text resizable without loss

### Operability

#### Keyboard Access

- [ ] All functionality available via keyboard
- [ ] Tab order is logical
- [ ] Tab focuses visible elements only
- [ ] Enter/Space trigger buttons

  ```html
  <!-- Good - semantic HTML -->
  <button type="submit">Submit</button>
  <a href="/page">Link</a>

  <!-- Bad - non-interactive divs -->
  <div onclick="submit()">Submit</div>
  ```

#### Focus Indicators

- [ ] Focus outline visible on all interactive elements

  ```css
  /* Good */
  button:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  /* Bad - removing focus */
  button:focus {
    outline: none; /* ❌ Don't do this! */
  }
  ```

- [ ] Focus indicator has minimum 2px size
- [ ] Color contrast 3:1 against adjacent colors

#### No Keyboard Traps

- [ ] User can move away from every element via keyboard
- [ ] Modals have focus management
  ```javascript
  // Trap focus within modal
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      const focusable = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      // Manage focus within focusable elements
    }
  });
  ```

#### Touch Targets

- [ ] All buttons at least 44×44 pixels
- [ ] Touch targets adequately spaced

  ```css
  /* Good */
  button {
    min-width: 44px;
    min-height: 44px;
  }

  gap: 0.75rem; /* Space between targets */
  ```

### Understandability

#### Readable Text

- [ ] Font size minimum 16px (mobile) / 12px (desktop)
- [ ] Line height minimum 1.5
- [ ] Letter spacing minimum 0.02em
- [ ] Paragraph width not exceeding 80 characters

  ```css
  /* Good */
  body {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    max-width: 80ch;
  }
  ```

#### Understandable Navigation

- [ ] Navigation labels are clear
- [ ] Current page indicated
- [ ] Consistent navigation location
- [ ] Breadcrumbs for multi-level nav

#### Error Handling

- [ ] Error messages specific (not "Error")
- [ ] Error location indicated
- [ ] Correction suggestions provided
- [ ] Form preserves user data on error

  ```html
  <!-- Bad -->
  <label>Invalid input</label>

  <!-- Good -->
  <label id="error-email">
    Email must be valid format (example@domain.com)
  </label>
  <input aria-describedby="error-email" />
  ```

### Robustness

#### Semantic HTML

- [ ] Use semantic tags

  ```html
  <!-- Good -->
  <header>Navigation</header>
  <nav>Links</nav>
  <main>Content</main>
  <article>Post</article>
  <section>Group</section>
  <footer>Info</footer>

  <!-- Bad -->
  <div class="header">Navigation</div>
  <div class="nav">Links</div>
  <div class="main">Content</div>
  ```

- [ ] Proper heading hierarchy (h1 → h2 → h3)

  ```html
  <!-- Good -->
  <h1>Page Title</h1>
  <h2>Section 1</h2>
  <h3>Subsection</h3>
  <h2>Section 2</h2>

  <!-- Bad -->
  <h1>Title</h1>
  <h3>Subsection</h3>
  <!-- ❌ Skipped h2 -->
  <h2>Section</h2>
  ```

#### ARIA Labels

- [ ] Buttons have accessible names

  ```html
  <!-- Good - semantic -->
  <button>Close</button>

  <!-- Good - aria-label for icon -->
  <button aria-label="Close menu">
    <span class="material-symbols-outlined">close</span>
  </button>

  <!-- Good - aria-labelledby -->
  <h2 id="dialog-title">Confirm</h2>
  <div role="dialog" aria-labelledby="dialog-title">
    <!-- Content -->
  </div>
  ```

- [ ] Form inputs have labels

  ```html
  <!-- Good -->
  <label for="email">Email</label>
  <input id="email" type="email" />

  <!-- Good - aria-label -->
  <input type="email" aria-label="Email address" />
  ```

- [ ] Links have descriptive text

  ```html
  <!-- Bad -->
  <a href="/page">Click here</a>

  <!-- Good -->
  <a href="/about">Learn more about our company</a>
  ```

- [ ] Custom components have roles
  ```html
  <!-- Good -->
  <div role="button" tabindex="0">Action</div>
  <div role="alert">Important message</div>
  <div role="navigation">Navigation list</div>
  ```

#### Form Accessibility

- [ ] Every input has label
- [ ] Label associated with input
- [ ] Required fields marked
- [ ] Error messages linked to fields

  ```html
  <!-- Good -->
  <div class="form-group">
    <label for="username">
      Username <span aria-label="required">*</span>
    </label>
    <input id="username" required aria-describedby="username-error" />
    <span id="username-error" role="alert"> Username is required </span>
  </div>
  ```

---

## Testing Tools

### Browser Extensions

1. **axe DevTools**

   - Automated accessibility testing
   - Identifies WCAG violations
   - [Download axe](https://www.deque.com/axe/devtools/)

2. **WAVE**

   - Visual accessibility checker
   - Highlights issues on page
   - [Download WAVE](https://wave.webaim.org/extension/)

3. **Lighthouse**

   - Built into Chrome DevTools
   - Accessibility audit included
   - Open F12 > Lighthouse

4. **Screen Reader Readers**
   - NVDA (Windows, free)
   - JAWS (Windows, commercial)
   - VoiceOver (Mac, built-in)

### Online Tools

- [WCAG Contrast Checker](https://contrast-ratio.com/)
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [Web Accessibility Checker](https://achecker.ca/)

### Manual Testing

**Keyboard Only**

1. Unplug mouse
2. Use Tab to navigate
3. Use Enter/Space to activate
4. Verify all features work

**Screen Reader Testing**

1. Enable screen reader (VoiceOver on Mac: Cmd+F5)
2. Navigate with arrow keys
3. Verify all content announces properly
4. Check heading structure reads correctly

**Zoom Testing**

1. Set browser zoom to 200%
2. Verify no horizontal scrolling
3. Verify all text readable
4. Verify layout doesn't break

---

## Common Issues & Fixes

### Issue 1: Missing Alt Text

**Problem:** Images don't have alt text

```html
<!-- ❌ Bad -->
<img src="warehouse.jpg" />

<!-- ✅ Good -->
<img src="warehouse.jpg" alt="Warehouse building exterior" />

<!-- ✅ Decorative image -->
<img src="divider.png" alt="" />
```

### Issue 2: Color Only Indicator

**Problem:** Status conveyed by color alone

```html
<!-- ❌ Bad -->
<span style="color: red">Error</span>

<!-- ✅ Good -->
<span class="text-error">
  <span class="material-symbols-outlined">error</span>
  Error
</span>
```

### Issue 3: Poor Focus Indicator

**Problem:** Focus outline invisible or missing

```css
/* ❌ Bad */
button:focus {
  outline: none;
}

/* ✅ Good */
button:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### Issue 4: Keyboard Inaccessible Button

**Problem:** Non-semantic button not keyboard accessible

```html
<!-- ❌ Bad -->
<div onclick="submit()">Submit</div>

<!-- ✅ Good -->
<button type="submit">Submit</button>
```

### Issue 5: Missing Form Label

**Problem:** Input without associated label

```html
<!-- ❌ Bad -->
<input type="email" placeholder="Email" />

<!-- ✅ Good -->
<label for="email">Email</label>
<input id="email" type="email" placeholder="Email" />
```

### Issue 6: Skipped Heading Levels

**Problem:** Heading hierarchy broken (h1 → h3, skipping h2)

```html
<!-- ❌ Bad -->
<h1>Title</h1>
<h3>Subsection</h3>

<!-- ✅ Good -->
<h1>Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

### Issue 7: Icon Button Without Label

**Problem:** Icon button has no accessible name

```html
<!-- ❌ Bad -->
<button>
  <span class="material-symbols-outlined">close</span>
</button>

<!-- ✅ Good -->
<button aria-label="Close">
  <span class="material-symbols-outlined">close</span>
</button>
```

### Issue 8: Poor Contrast

**Problem:** Text too light/dark to read (< 4.5:1)

```css
/* ❌ Bad - #999 on white = 5.4:1 (borderline) */
color: #999;
background: white;

/* ✅ Good - #666 on white = 9.4:1 */
color: #666;
background: white;
```

---

## Testing Procedures

### Automated Testing (Browser)

```javascript
// 1. Open DevTools (F12)
// 2. Go to Lighthouse tab
// 3. Click "Analyze page load"
// 4. Check Accessibility score
// 5. Review identified issues
```

### Manual Keyboard Testing

```
1. Click on page
2. Press Tab repeatedly
3. Verify:
   - Focus indicator visible
   - Tab order logical
   - Can access all interactive elements
   - Can escape/return from modals
4. Press Enter/Space on buttons
5. Verify buttons activate
```

### Screen Reader Testing (Mac)

```bash
# Enable VoiceOver
Cmd + F5

# Navigate
VO = Control + Option
VO + Right Arrow = Next element
VO + Left Arrow = Previous element
VO + U = Rotor (headings, links, etc)

# Disable
Cmd + F5
```

---

## Accessibility Test Report

### Page: ******\_\_\_\_******

| Check               | Status   | Issue | Fix |
| ------------------- | -------- | ----- | --- |
| Alt text on images  | ✅/⚠️/❌ |       |     |
| Color contrast      | ✅/⚠️/❌ |       |     |
| Keyboard navigation | ✅/⚠️/❌ |       |     |
| Focus indicators    | ✅/⚠️/❌ |       |     |
| Form labels         | ✅/⚠️/❌ |       |     |
| Heading hierarchy   | ✅/⚠️/❌ |       |     |
| ARIA labels         | ✅/⚠️/❌ |       |     |
| Touch targets       | ✅/⚠️/❌ |       |     |

### Lighthouse Score

- Accessibility: \_\_/100
- Target: ≥ 90

### Issues Found

1. ***
2. ***
3. ***

### Next Steps

- [ ] Issues documented
- [ ] Fixes prioritized
- [ ] Fixes implemented
- [ ] Re-test completed
- [ ] Approved by QA

---

## WCAG Compliance Summary

| Level         | Requirement            | Status       |
| ------------- | ---------------------- | ------------ |
| **Level A**   | Basic accessibility    | [ ] Pass     |
| **Level AA**  | Enhanced accessibility | [ ] Pass     |
| **Level AAA** | Advanced accessibility | [ ] Optional |

**Target:** WCAG 2.1 Level AA (industry standard)

---

**Last Updated:** December 25, 2025
**Version:** 1.0.0
