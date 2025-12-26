# CSS Migration Guide

Complete guide for adding new pages and components to the Andromeda CSS architecture.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Adding New Pages](#adding-new-pages)
3. [Creating New Components](#creating-new-components)
4. [Extending Design Tokens](#extending-design-tokens)
5. [Testing Checklist](#testing-checklist)
6. [Troubleshooting](#troubleshooting)

---

## Quick Start

### For New Pages

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="theme-color" content="#0088FF" />
    <title>Page Title - Andromeda</title>

    <!-- CSS (Single Import) -->
    <link rel="stylesheet" href="../css/index.css" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Icons -->
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="light">
    <!-- Page content -->
  </body>
</html>
```

### For New Components

1. Create component HTML structure
2. Use existing CSS classes from `css/components/`
3. Add custom CSS to appropriate component file
4. Update COMPONENTS.md documentation

---

## Adding New Pages

### Step 1: Create HTML File

**Location:** `html/new_page.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="theme-color" content="#0088FF" />
    <title>New Page - Andromeda</title>
    <link rel="stylesheet" href="../css/index.css" />
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <!-- Material Symbols -->
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="light">
    <!-- Header -->
    <header class="app-header">
      <div class="app-header-left">
        <button class="app-header-btn" aria-label="Back">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
      </div>
      <h1 class="app-header-title">Page Title</h1>
      <div class="app-header-right">
        <button class="app-header-notify-btn" aria-label="Notifications">
          <span class="material-symbols-outlined">notifications</span>
          <div class="notify-badge"></div>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="warehouse-main">
      <div class="warehouse-content">
        <!-- Your page content here -->
      </div>
    </main>

    <!-- Bottom Navigation -->
    <nav class="warehouse-nav">
      <div class="warehouse-nav-content">
        <a href="select_warehouse.html" class="warehouse-nav-item">
          <span class="material-symbols-outlined">home</span>
          <span class="warehouse-nav-item-text">Home</span>
        </a>
        <a href="select_customer_task.html" class="warehouse-nav-item">
          <span class="material-symbols-outlined">assignment</span>
          <span class="warehouse-nav-item-text">Tasks</span>
        </a>
        <a href="timer.html" class="warehouse-nav-item">
          <span class="material-symbols-outlined">schedule</span>
          <span class="warehouse-nav-item-text">Timer</span>
        </a>
        <a href="my_time_cards.html" class="warehouse-nav-item">
          <span class="material-symbols-outlined">description</span>
          <span class="warehouse-nav-item-text">Time Cards</span>
        </a>
        <a href="settings.html" class="warehouse-nav-item">
          <span class="material-symbols-outlined">settings</span>
          <span class="warehouse-nav-item-text">Settings</span>
        </a>
      </div>
    </nav>

    <script src="../js/main.js"></script>
  </body>
</html>
```

### Step 2: Mark Active Navigation

Update the current page's navigation link to be active:

```html
<!-- On new_page.html, if it's the "Home" equivalent -->
<a href="new_page.html" class="warehouse-nav-item active">
  <span class="material-symbols-outlined">home</span>
  <span class="warehouse-nav-item-text">Home</span>
</a>
```

### Step 3: Set Proper Back Navigation

```html
<!-- Make back button navigate to previous page -->
<a href="select_warehouse.html" class="app-header-btn" aria-label="Back">
  <span class="material-symbols-outlined">arrow_back</span>
</a>
```

---

## Creating New Components

### Step 1: Identify Component Type

Is your component a:

- **Layout** (affects page structure)? → Add to `css/layouts/`
- **Component** (reusable UI element)? → Add to `css/components/`
- **Utility** (helper class)? → Add to `css/utilities/`

### Step 2: Write Component CSS

**Example: New card component**

File: `css/components/card.css`

```css
/* ================================
   Card Component
   ================================ */

.card {
  background-color: var(--surface-light);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  border: 1px solid var(--gray-100);
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

body.dark-mode .card {
  background-color: var(--surface-dark);
  border-color: var(--gray-800);
  box-shadow: none;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

body.dark-mode .card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.card-header {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-light);
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--gray-200);
  padding-bottom: 0.75rem;
}

body.dark-mode .card-header {
  color: var(--text-dark);
  border-bottom-color: var(--gray-800);
}

.card-body {
  color: var(--text-secondary-light);
}

body.dark-mode .card-body {
  color: var(--text-secondary-dark);
}

.card-footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--gray-200);
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

body.dark-mode .card-footer {
  border-top-color: var(--gray-800);
}

/* Responsive */
@media (max-width: 767px) {
  .card {
    padding: 1rem;
  }

  .card-header {
    font-size: var(--text-base);
    margin-bottom: 0.75rem;
  }
}
```

### Step 3: Update index.css

Add new component import to `css/index.css`:

```css
/* ================================
   CSS Master Index
   Import all CSS partials in correct order
   ================================ */

/* 1. Design Tokens */
@import "variables.css";

/* 2. Reset & Normalization */
@import "reset.css";

/* 3. Base Styles */
@import "base.css";

/* 4. Component Styles */
@import "components/header.css";
@import "components/form.css";
@import "components/button.css";
@import "components/navigation.css";
@import "components/notify.css";
@import "components/card.css"; /* ← NEW COMPONENT */

/* 5. Layout Styles */
@import "layouts/login.css";
@import "layouts/app.css";

/* 6. Utility Classes */
@import "utilities/spacing.css";
@import "utilities/typography.css";
@import "utilities/flex.css";
@import "utilities/responsive.css";
```

### Step 4: HTML Usage

```html
<div class="card">
  <div class="card-header">Card Title</div>
  <div class="card-body">Card content goes here...</div>
  <div class="card-footer">
    <button class="btn-primary">Action</button>
  </div>
</div>
```

### Step 5: Update COMPONENTS.md

Add documentation for new component in `COMPONENTS.md`:

````markdown
### Card Component

**File:** `css/components/card.css`

Main content container for section grouping.

#### HTML Structure

```html
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content</div>
  <div class="card-footer">
    <button>Action</button>
  </div>
</div>
```
````

#### Classes

- `.card` - Container with padding and border
- `.card-header` - Title section (top border)
- `.card-body` - Main content area
- `.card-footer` - Action area (bottom border)

#### Styling

- Background: White (light) / #1a2632 (dark)
- Border-radius: 0.75rem
- Padding: 1.5rem
- Shadow on hover
- Dark mode support

#### Props

- Responsive: Padding reduced on mobile
- Interactive: Hover shadow increases

````

---

## Extending Design Tokens

### Adding New Color

File: `css/variables.css`

```css
:root {
  /* Existing colors... */

  /* New semantic color */
  --alert: #FF6B6B;       /* Bright red for urgent alerts */
  --alert-light: #FFE5E5; /* Light red background */
  --alert-dark: #CC5555;  /* Dark red for dark mode */
}

body.dark-mode {
  --alert: #FF8787;
  --alert-light: #2D1F1F;
  --alert-dark: #FF6B6B;
}
````

Usage in component:

```css
.alert-urgent {
  background-color: var(--alert-light);
  border-left: 4px solid var(--alert);
  color: var(--alert-dark);
}

body.dark-mode .alert-urgent {
  background-color: var(--alert-dark);
  color: var(--alert-light);
}
```

### Adding New Spacing Value

File: `css/variables.css`

```css
:root {
  /* Existing spacing... */
  --space-3xl: 3.5rem; /* 56px - Extra large spacing */
}
```

Create utility class in `css/utilities/spacing.css`:

```css
.m-14 {
  margin: 3.5rem;
}
.mt-14 {
  margin-top: 3.5rem;
}
.mb-14 {
  margin-bottom: 3.5rem;
}
.p-14 {
  padding: 3.5rem;
}
/* ... etc for all directions */
```

### Adding New Breakpoint

⚠️ **Not recommended** - Stick to existing 3 breakpoints:

- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px

If absolutely necessary, update all media query files.

---

## Testing Checklist

### For New Pages

- [ ] Link to correct CSS (`../css/index.css`)
- [ ] Fonts load (Inter 400, 500, 600, 700)
- [ ] Material Symbols icons display
- [ ] Header appears and is sticky
- [ ] Navigation bar at bottom
- [ ] Content doesn't overlap header/nav
- [ ] Dark mode toggle works
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1024px)
- [ ] All links work
- [ ] Back button navigation correct
- [ ] Active navigation item highlighted
- [ ] No console errors

### For New Components

- [ ] CSS file created with proper naming
- [ ] Imported in `css/index.css` in correct order
- [ ] HTML structure matches documentation
- [ ] Light mode colors correct
- [ ] Dark mode colors correct
- [ ] Hover/active states work
- [ ] Responsive behavior on 3 breakpoints
- [ ] Padding/spacing uses variables
- [ ] No hardcoded colors (all CSS variables)
- [ ] No !important (except reset)
- [ ] Works with existing utilities
- [ ] Documentation updated in COMPONENTS.md

### Browser Testing

- [ ] Chrome/Chromium (desktop & mobile)
- [ ] Firefox (desktop)
- [ ] Safari (Mac)
- [ ] Safari iOS (iPhone)
- [ ] Edge (Windows)

### Performance

- [ ] CSS loads quickly (<100ms)
- [ ] No layout shift when CSS loads
- [ ] Animations are smooth (60fps)
- [ ] No memory leaks in browser

---

## Troubleshooting

### Problem: Styles not applying

**Checklist:**

1. Is `index.css` linked correctly?
   ```html
   <link rel="stylesheet" href="../css/index.css" />
   ```
2. Is component CSS imported in `index.css`?
3. Check browser DevTools - do styles show in computed?
4. Is specificity high enough? (typically 0-2 selectors needed)
5. Is there a conflicting utility class?

**Solution:**

```bash
# Check import order in index.css
# 1. Variables
# 2. Reset
# 3. Base
# 4. Components (your new component here)
# 5. Layouts
# 6. Utilities (might override)
```

### Problem: Dark mode colors wrong

**Checklist:**

1. Are you using CSS variables? (not hardcoded colors)
2. Is `body.dark-mode` selector present in CSS?
3. Did you update all color variants?
4. Is dark mode class being applied? (check body element)

**Solution:**

```css
/* Wrong - hardcoded color */
.component {
  color: #111827;
}

/* Correct - uses CSS variable */
.component {
  color: var(--text-light);
}

/* Dark mode override */
body.dark-mode .component {
  color: var(--text-dark);
}
```

### Problem: Responsive layout breaks

**Checklist:**

1. Are you using flex/grid utilities?
2. Is there a max-width constraint that's too small?
3. Are media queries in correct order (mobile-first)?
4. Is safe-area-inset applied to fixed elements?

**Solution:**

```css
/* Mobile-first approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    max-width: 640px;
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}
```

### Problem: Safe-area-inset not working

**Checklist:**

1. Is CSS syntax correct?
   ```css
   padding-top: max(1rem, env(safe-area-inset-top));
   ```
2. Is element position relative/absolute/fixed?
3. Are you testing on real notched device?
4. Is viewport-fit=cover in meta tag?
   ```html
   <meta name="viewport" content="viewport-fit=cover" />
   ```

**Solution:** Only visible on actual notched devices (iPhone X+, Pixel 3 XL+)

### Problem: Component looks different in dark mode

**Solution:**

1. Check both light and dark color CSS rules exist
2. Verify contrast ratio (WCAG AA: 4.5:1 minimum)
3. Test on actual devices/emulators
4. Use browser DevTools to inspect computed colors

### Problem: CSS file size growing too large

**Solution:**

1. Review utilities/spacing.css - remove unused values
2. Check for duplicate rules across files
3. Consider consolidating similar components
4. Use CSS compression for production

---

## Best Practices

### ✅ DO

- ✅ Use CSS variables for colors and spacing
- ✅ Follow mobile-first approach
- ✅ Test dark mode for every component
- ✅ Use semantic class names
- ✅ Group related CSS rules
- ✅ Document complex components
- ✅ Keep specificity low (0-2 selectors)
- ✅ Organize imports logically

### ❌ DON'T

- ❌ Use !important (except in reset)
- ❌ Hardcode colors (use CSS variables)
- ❌ Create vendor prefixes (use autoprefixer)
- ❌ Nest selectors deeply (>3 levels)
- ❌ Mix component and utility classes excessively
- ❌ Ignore dark mode support
- ❌ Skip responsive testing
- ❌ Commit untested code

---

## Quick Reference

### File Structure

```
css/
├── variables.css          # Design tokens
├── reset.css              # CSS reset
├── base.css               # Global utilities
├── index.css              # Master import
├── components/            # Reusable components
│   ├── header.css
│   ├── form.css
│   ├── button.css
│   ├── navigation.css
│   └── notify.css
├── layouts/               # Page-specific layouts
│   ├── login.css
│   └── app.css
└── utilities/             # Helper classes
    ├── spacing.css
    ├── typography.css
    ├── flex.css
    └── responsive.css
```

### CSS Class Naming

```
.{component}-{element}
.{component}-{element}-{state}

Examples:
- .app-header              (component)
- .app-header-title        (element)
- .app-header-btn          (element)
- .warehouse-nav-item      (element)
- .warehouse-nav-item.active (state)
```

### Media Query Syntax

```css
/* Mobile (320px - 767px) - DEFAULT */
.element {
  width: 100%;
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .element {
    width: 33.333%;
  }
}
```

---

**Version:** 1.0.0
**Last Updated:** December 25, 2025
**Applies To:** Phase 1+ CSS Architecture
