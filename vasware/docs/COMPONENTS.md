# Component Library Documentation

Complete reference for all reusable components in the Andromeda mobile app. Each component is self-contained and can be reused across pages.

## Table of Contents

- [Layout Components](#layout-components)
- [Header Components](#header-components)
- [Form Components](#form-components)
- [Button Components](#button-components)
- [Navigation Components](#navigation-components)
- [Notification Components](#notification-components)
- [Utility Classes](#utility-classes)

---

## Layout Components

### Login Container

**File:** `css/layouts/login.css`

Main container for login and forgot password pages.

```html
<body class="login-container">
  <div class="login-backdrop backdrop-top-left"></div>
  <div class="login-backdrop backdrop-bottom-right"></div>
  <main class="login-card">
    <!-- Content here -->
  </main>
</body>
```

**Classes:**

- `.login-container` - Full-screen flex container with min-height 100dvh
- `.login-card` - White card with rounded corners and subtle shadow
- `.login-backdrop` - Decorative blur circles (top-left, bottom-right)
- `.logo-container` - Flexbox for logo area
- `.logo-box` - Rounded container for logo letter (8.5rem)
- `.logo-letter` - Nasalization font, large blue letter
- `.logo-title` - App title text
- `.logo-subtitle` - Subtitle text (secondary color)

**Props:**

- Dark mode support via `body.dark-mode` class
- Responsive scaling on tablet/desktop
- Landscape mode hides non-essential elements

---

### Warehouse Container

**File:** `css/layouts/app.css`

Main app layout for warehouse selection and content pages.

```html
<div class="app-wrapper">
  <div class="app-container">
    <main class="app-main">
      <div class="app-content">
        <!-- Page content -->
      </div>
    </main>
    <nav class="app-nav"><!-- Bottom nav --></nav>
  </div>
</div>
```

**Classes:**

- `.app-wrapper` - Fixed positioning wrapper container
- `.app-container` - Flex column container with min-height 100dvh
- `.app-main` - Flex content area with auto vertical scroll
- `.app-content` - Content wrapper with max-width on larger screens
- `.app-nav` - Fixed bottom navigation bar

**States:**

- `.empty-state` - Empty list appearance (icon, title, message)
- `.loading-state` - Loading spinner with message
- `.error-state` - Error state with icon and retry action

**Props:**

- Padding auto-adjusts with safe-area-inset on notched devices
- Bottom padding reserves space for fixed bottom navigation
- Responsive layout changes on tablet/desktop

---

## Header Components

### App Header

**File:** `css/components/header.css`

Sticky header used on all app pages.

```html
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
      <div class="notify-badge active"></div>
    </button>
  </div>
</header>
```

**Classes:**

- `.app-header` - Sticky header with backdrop-filter blur
- `.app-header-left` - Left action area (flex, gap: 0.75rem)
- `.app-header-right` - Right action area (flex, gap: 0.75rem)
- `.app-header-title` - Center title (flex: 1, bold, large)
- `.app-header-btn` - Icon button with hover transform
- `.app-header-notify-btn` - Notification button (position: relative for badge)

**Props:**

- z-index: 20 (sticky positioning)
- Backdrop blur: 0.5rem
- Dark mode support
- 3rem height with proper icon alignment

---

## Form Components

### Form Group

**File:** `css/components/form.css`

Container for form inputs with labels.

```html
<div class="form-group">
  <label for="email">Email Address</label>
  <input type="email" id="email" placeholder="name@example.com" />
</div>
```

**Classes:**

- `.form-group` - Flex column with gap: 0.25rem
- `.form-group label` - Secondary text color, 0.875rem

---

### Input with Icon

**File:** `css/components/form.css`

Input field with left icon (email, password).

```html
<div class="input-with-icon">
  <span class="icon-left">
    <span class="material-symbols-outlined">mail</span>
  </span>
  <input
    type="email"
    placeholder="name@example.com"
    aria-label="Email address"
  />
</div>
```

**Classes:**

- `.input-with-icon` - Flex container, height: 44px, position: relative
- `.input-with-icon input` - Flex: 1, padding: 0 2.5rem, no border
- `.icon-left` - Position absolute left, secondary text color
- `.password-toggle` - Position absolute right (clickable for show/hide)

**Props:**

- Height: 44px (touch-friendly)
- Icon padding: 2.5rem (centered)
- Hover border color changes
- Dark mode support

---

### Warehouse Search Input

**File:** `css/components/form.css`

Search input for warehouse/product selection.

```html
<div class="warehouse-search-container">
  <span class="icon-left">
    <span class="material-symbols-outlined">search</span>
  </span>
  <input
    class="warehouse-search-input"
    type="text"
    placeholder="Search by name..."
    aria-label="Search"
  />
</div>
```

**Classes:**

- `.warehouse-search-container` - Flex container with border
- `.warehouse-search-input` - Transparent background, no border
- `.icon-left` - Search icon, secondary color

---

### Forgot Password Link

**File:** `css/components/form.css`

Link for password recovery.

```html
<a href="forgot_password.html" class="forgot-password-link">
  Forgot Password?
</a>
```

**Classes:**

- `.forgot-password-link` - Primary color, 0.875rem, underline on hover

---

## Button Components

### Primary Button

**File:** `css/components/button.css`

Main action button for form submission, primary actions.

```html
<button class="btn-primary" type="submit">Sign In</button>
```

**Classes:**

- `.btn-primary` - Width: 100%, height: 44px, primary color background
- Hover: translateY(-2px), shadow increases
- Active: scale(0.95)
- Disabled: opacity 0.5, cursor not-allowed

**Props:**

- Padding: 0.875rem 1rem
- Border-radius: 0.75rem
- Transition: all 0.2s ease
- Dark mode support

---

### Icon Button

**File:** `css/components/button.css`

Small icon-only buttons.

```html
<!-- Primary variant -->
<button class="btn-icon primary" aria-label="Back">
  <span class="material-symbols-outlined">arrow_back</span>
</button>

<!-- Secondary variant -->
<button class="btn-icon secondary" aria-label="Menu">
  <span class="material-symbols-outlined">menu</span>
</button>
```

**Classes:**

- `.btn-icon` - 2.5rem × 2.5rem, flex center
- `.btn-icon.primary` - Primary color border, white background
- `.btn-icon.secondary` - Gray border, light background
- Hover: color changes, slight background shift
- Active: scale(0.95)

---

### Warehouse Item

**File:** `css/components/button.css`

Interactive list item for warehouse selection.

```html
<div class="warehouse-item">
  <div class="warehouse-item-icon">
    <span class="material-symbols-outlined" style="font-size: 1.5rem;">
      warehouse
    </span>
  </div>
  <div class="warehouse-item-content">
    <div class="warehouse-item-name">Warehouse A</div>
    <div class="warehouse-item-address">123 Main St, City</div>
  </div>
  <span class="material-symbols-outlined warehouse-item-chevron">
    chevron_right
  </span>
</div>
```

**Classes:**

- `.warehouse-item` - Flex row, padding: 1rem, border-radius: 0.75rem
- `.warehouse-item-icon` - 3rem square, rounded, blue-gray background
- `.warehouse-item-content` - Flex: 1, flex column
- `.warehouse-item-name` - 1rem bold, primary color on hover
- `.warehouse-item-address` - 0.875rem secondary text
- `.warehouse-item-chevron` - Right-aligned, gray → primary on hover

**Props:**

- Hover: border color and chevron color change
- Active: primary border and color
- Cursor: pointer
- Dark mode support

---

### GPS Call-to-Action Button

**File:** `css/components/button.css`

Special button for location services.

```html
<button class="warehouse-gps-btn">
  <span class="material-symbols-outlined">place</span>
  <span>Use Current Location</span>
  <span class="material-symbols-outlined" style="margin-left: auto;">
    chevron_right
  </span>
</button>
```

**Classes:**

- `.warehouse-gps-btn` - Width: 100%, flex row
- Light primary blue background
- Primary blue border
- Hover: slightly darker background

---

## Navigation Components

### Bottom Navigation

**File:** `css/components/navigation.css`

Fixed bottom navigation for app pages.

```html
<nav class="warehouse-nav">
  <div class="warehouse-nav-content">
    <a href="select_warehouse.html" class="warehouse-nav-item active">
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
```

**Classes:**

- `.warehouse-nav` - Fixed bottom, z-index: 30, safe-area-inset support
- `.warehouse-nav-content` - Flex row, space-between, height: 4rem
- `.warehouse-nav-item` - Flex column center, width: 4rem
- `.warehouse-nav-item-text` - 0.625rem, medium weight
- `.warehouse-nav-item.active` - Primary color

**Props:**

- Height: 4rem (touch-friendly)
- 5 navigation items
- Safe-area-inset-bottom support for home indicators
- Dark mode support
- Smooth color transitions

---

### Language Selector

**File:** `css/components/navigation.css`

Language toggle on login pages.

```html
<div class="language-selector">
  <button aria-label="Switch to English" class="language-btn active">
    <img src="../assets/icons/gb.svg" alt="English" class="flag-icon" />
  </button>
  <button aria-label="Switch to Finnish" class="language-btn">
    <img src="../assets/icons/fi.svg" alt="Finnish" class="flag-icon" />
  </button>
  <button aria-label="Switch to Vietnamese" class="language-btn">
    <img src="../assets/icons/vn.svg" alt="Vietnamese" class="flag-icon" />
  </button>
</div>
```

**Classes:**

- `.language-selector` - Flex row, justify-end, gap: 0.75rem
- `.language-btn` - 2rem square, padding: 0, border-radius: 0.625rem
- `.language-btn.active` - White bg, subtle shadow
- `.language-btn:not(.active)` - Light gray bg, 0.6 opacity, grayscale filter
- `.flag-icon` - Width/height: 100%, object-fit: cover

**Props:**

- Touch-friendly 2rem size
- Clear active state with shadow
- Inactive buttons are grayed out
- Smooth transitions between states

---

## Notification Components

### Notify Badge

**File:** `css/components/notify.css`

Red dot indicator for unread notifications.

```html
<button class="app-header-notify-btn">
  <span class="material-symbols-outlined">notifications</span>
  <div class="notify-badge active"></div>
</button>
```

**Classes:**

- `.notify-badge` - 0.5rem × 0.5rem, red circle
- Position: absolute top-right
- Display: none by default
- `.notify-badge.active` - Display: block, badge-pulse animation

**Animation:**

- `badge-pulse` - Opacity 1 → 0.7 → 1 (2s infinite)

---

### Toast Notification

**File:** `css/components/notify.css`

Temporary notification popup at bottom of screen.

```html
<!-- Success -->
<div class="toast toast-success">
  <span class="material-symbols-outlined">check_circle</span>
  <span>Operation successful!</span>
</div>

<!-- Error -->
<div class="toast toast-error">
  <span class="material-symbols-outlined">error</span>
  <span>Something went wrong</span>
</div>

<!-- Warning -->
<div class="toast toast-warning">
  <span class="material-symbols-outlined">warning</span>
  <span>Please review this action</span>
</div>

<!-- Info -->
<div class="toast toast-info">
  <span class="material-symbols-outlined">info</span>
  <span>New update available</span>
</div>
```

**Classes:**

- `.toast` - Fixed bottom, centered, flex row, padding: 1rem
- `.toast-success` - Green background (#10B981)
- `.toast-error` - Red background (#EF4444)
- `.toast-warning` - Amber background (#F59E0B)
- `.toast-info` - Blue background (#3B82F6)

**Animation:**

- `toast-slide-up` - SlideUp from bottom with fade-in (0.3s)

**Props:**

- Auto-dismisses after 3-5 seconds (JS required)
- Bottom margin: 2rem
- Dark mode support
- z-index: 50 (above modal)

---

### Alert Boxes

**File:** `css/components/notify.css`

Persistent alert boxes for warnings and information.

```html
<!-- Success Alert -->
<div class="alert alert-success">
  <strong>Success!</strong> Your changes have been saved.
</div>

<!-- Error Alert -->
<div class="alert alert-error">
  <strong>Error!</strong> Something went wrong. Please try again.
</div>

<!-- Warning Alert -->
<div class="alert alert-warning">
  <strong>Warning!</strong> This action cannot be undone.
</div>

<!-- Info Alert -->
<div class="alert alert-info">
  <strong>Info:</strong> This is just a heads up, no action needed.
</div>
```

**Classes:**

- `.alert` - Padding: 1rem, border-radius: 0.75rem, left border: 4px
- `.alert-success` - Green border and background
- `.alert-error` - Red border and background
- `.alert-warning` - Amber border and background
- `.alert-info` - Blue border and background

**Props:**

- Left border distinguishes type
- Light background, dark text
- Dark mode support
- Closed via JS/button

---

## Utility Classes

### Flexbox Utilities

**File:** `css/utilities/flex.css`

```html
<div class="flex flex-col gap-4 items-center">
  <span>Centered content</span>
</div>
```

**Direction:**

- `.flex` - `display: flex`
- `.flex-col` - `flex-direction: column`
- `.flex-row` - `flex-direction: row`

**Justify (main axis):**

- `.justify-start`, `.justify-center`, `.justify-end`
- `.justify-between`, `.justify-around`, `.justify-evenly`

**Align (cross axis):**

- `.items-start`, `.items-center`, `.items-end`
- `.items-baseline`, `.items-stretch`

**Gap:**

- `.gap-0` to `.gap-8` (0rem to 2rem)
- `.gap-x-*` (horizontal), `.gap-y-*` (vertical)

---

### Spacing Utilities

**File:** `css/utilities/spacing.css`

```html
<div class="p-4 mb-6 mt-2 px-3 py-2">Spaced content</div>
```

**Margin:** `.m-*`, `.mt-*`, `.mb-*`, `.ml-*`, `.mr-*`, `.mx-*`, `.my-*`
**Padding:** `.p-*`, `.pt-*`, `.pb-*`, `.pl-*`, `.pr-*`, `.px-*`, `.py-*`

**Values:** 0, 1, 2, 3, 4, 5, 6, 8, 10, 12 (0.25rem increments)

---

### Typography Utilities

**File:** `css/utilities/typography.css`

```html
<p class="text-lg font-semibold leading-relaxed text-primary">
  Large semibold text
</p>
```

**Font Size:** `.text-xs` to `.text-3xl`
**Font Weight:** `.font-normal`, `.font-medium`, `.font-semibold`, `.font-bold`
**Text Align:** `.text-left`, `.text-center`, `.text-right`
**Line Height:** `.leading-tight`, `.leading-normal`, `.leading-relaxed`
**Text Color:** `.text-primary`, `.text-gray-*`, `.text-error`, `.text-success`
**Text Transform:** `.uppercase`, `.lowercase`, `.capitalize`
**Text Truncation:** `.truncate`, `.line-clamp-1` to `.line-clamp-4`

---

### Responsive Utilities

**File:** `css/utilities/responsive.css`

```html
<!-- Hidden on mobile, shown on tablet -->
<div class="hidden-mobile show-tablet">Tablet+ content</div>

<!-- Responsive padding -->
<div class="p-responsive">Padding scales with screen size</div>

<!-- Fluid font size -->
<p class="text-fluid-lg">Scales between 1rem and 1.25rem</p>
```

**Visibility:**

- `.hidden-mobile`, `.show-mobile`
- `.hidden-tablet`, `.show-tablet`
- `.hidden-desktop`, `.show-desktop`

**Responsive Values:**

- `.p-responsive` - Padding scales: 1rem → 1.5rem → 2rem
- `.m-responsive` - Margin scales: 0.75rem → 1rem → 1.5rem
- `.gap-responsive` - Gap scales: 0.75rem → 1rem → 1.5rem
- `.text-fluid-*` - Font size uses clamp() for smooth scaling

---

## Integration Guide

### Adding to HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Single import replaces all previous CSS files -->
    <link rel="stylesheet" href="../css/index.css" />
  </head>
  <body class="light">
    <!-- Your HTML content -->
  </body>
</html>
```

### Dark Mode Toggle

```javascript
// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
}

// Load user preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
```

### Component Customization

All components use CSS variables, making customization straightforward:

```css
/* Override default color in your app CSS */
:root {
  --primary: #ff0000; /* Change from blue to red */
}

/* Or use component-specific overrides */
.app-header {
  --primary: #ff0000;
}
```

---

**Last Updated:** Phase 1 CSS Component Extraction
**Version:** 1.0.0
**Total Components:** 20+
