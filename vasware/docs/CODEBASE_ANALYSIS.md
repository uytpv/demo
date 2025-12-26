# Codebase Analysis & Refactoring Plan

## 🔍 CURRENT STATE ANALYSIS

### 1. HTML Pages (index.html, forgot_password.html, select_warehouse.html)

#### Issues Found:

- **Inconsistent metadata**:
  - `index.html` & `forgot_password.html` have apple-mobile-web-app meta tags (missing in select_warehouse)
  - `select_warehouse.html` missing `viewport-fit=cover`
- **Inconsistent icon fonts**:

  - `index.html` & `forgot_password.html`: `Material+Icons` (older)
  - `select_warehouse.html`: `Material+Symbols+Outlined` (newer, preferred)
  - Recommendation: Standardize to `Material+Symbols+Outlined`

- **Duplicate inline styles**:

  - `select_warehouse.html` has `<style>` tag with `.material-symbols-outlined` definition
  - Should move to `styles.css`

- **Duplicate font links**:

  - `forgot_password.html` & `select_warehouse.html` both link Inter font twice
  - `index.html` links different weights (300, 400, 500, 600) vs others (400, 500, 600, 700)

- **HTML structure inconsistency**:
  - `index.html`: `<body class="login-container">` → uses `<main>` with `login-card`
  - `forgot_password.html`: Same structure but inline styling on language-selector
  - `select_warehouse.html`: `<body>` → `<div class="warehouse-container">` → `<main>`
  - Recommendation: Standardize to `<main>` wrapper pattern

#### Recommendations:

```html
<!-- Standardize meta tags -->
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

<!-- Standardize fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
  rel="stylesheet"
/>
```

---

### 2. CSS (styles.css)

#### File Statistics:

- **Total lines**: 1,681+
- **Main sections**:
  1. CSS Variables & Theme colors (50 lines)
  2. Reset & Global styles (150 lines)
  3. Typography & Buttons (200 lines)
  4. Forms & Inputs (100 lines)
  5. Login Page specific (500 lines)
  6. Responsive utilities (200 lines)
  7. Select Warehouse page (400+ lines)
  8. App Header (100+ lines)

#### Issues Found:

**A. Duplicate/Redundant Styles:**

- `.input-with-icon` (for login) and `.warehouse-search-container` - now merged ✅
- `.logo-box`, `.logo-letter`, `.logo-title`, `.logo-subtitle` - appear only on index/forgot_password
- `.language-btn` definition is good, used across pages
- Multiple media query definitions for same breakpoints
- Duplicate color definitions: `#137fec`, `#0088FF`, `var(--primary)` used interchangeably

**B. Unused Styles:**

- `.warehouse-search-wrapper` - deprecated after refactoring
- `.warehouse-search-icon`, `.warehouse-search-input` original versions - can be removed
- `.warehouse-btn-header` - defined but not used anywhere
- Various `.text-*` utility classes - consider consolidating

**C. Color Inconsistencies:**

- CSS variables use `--text-light: #0091FF` but UI shows `#374151` for headers
- Should rename `--text-light` to `--primary-accent` or use consistently

**D. Component Duplication:**

- Logo component (index/forgot_password) hardcoded - should be modular
- Language selector button duplicated across login pages
- Header components (.warehouse-header vs .app-header) - now aligned

#### Recommendations:

```
1. Create separate component CSS files:
   - components/header.css (warehouse-header, app-header)
   - components/form.css (input-with-icon, language-btn)
   - components/button.css (btn-primary, app-header-btn)
   - components/navigation.css (warehouse-nav)
   - components/notify.css (notify-badge)

2. Consolidate variables:
   - Replace hardcoded colors with CSS variables
   - Create consistent naming: --primary, --secondary, --text-default, --text-secondary
   - Define typography scales: --font-h1, --font-h2, --font-body, etc.

3. Extract utility classes into separate file:
   - utilities/spacing.css (margin, padding)
   - utilities/typography.css (text-*, font-*)
   - utilities/layout.css (flex, grid, positioning)
```

---

### 3. JavaScript (main.js, utils.js)

#### main.js Analysis:

- **Size**: 266 lines
- **Functionality**:
  - Device detection (isMobile, isIOS, isAndroid)
  - Dark mode toggle with localStorage
  - Bottom sheet management (openBottomSheet, closeBottomSheet)
  - Modal management (openModal, closeModal)
  - Window scroll handling for iOS
  - Debounced window resize listener

#### Issues Found:

- `utils.js` uses `export` syntax but not imported anywhere
- No module bundler (webpack/vite) - mixing IIFE and ES modules
- Global namespace pollution (all functions on `window`)
- Inconsistent function documentation
- No error handling in most functions

#### Recommendations:

```javascript
// Transition to ES modules (if using bundler):
// 1. Convert main.js to module import/export
// 2. Create separate modules:
//    - modules/device.js
//    - modules/theme.js
//    - modules/navigation.js
//    - modules/ui.js
// 3. Remove global window assignments

// For now (no bundler):
// 1. Keep IIFE pattern in main.js
// 2. Move utils.js functions into main.js scope
// 3. Add proper error handling and JSDoc
```

---

### 4. Assets (icons, fonts, images)

#### Current State:

- **Icons**:
  - gb.svg, fi.svg, vn.svg (language flags) - 3 files
  - Using Material Symbols Outlined (web font)
  - No custom SVG icons yet
- **Fonts**:
  - Google Fonts: Inter (weight: 400, 500, 600, 700)
  - Custom: Nasalization.otf (logo only)
- **Images**:
  - Directory exists but appears empty
  - Backdrop images (gradients) generated via CSS

#### Recommendations:

```
1. Consolidate icon strategy:
   - Use Material Symbols Outlined for 99% of icons
   - Keep language flags as SVGs (already optimized)
   - Document icon mapping for component usage

2. Font optimization:
   - Use only weights actually used (400, 500, 600, 700) ✅
   - Add `font-display: swap` for better performance
   - Consider system fonts for fallback

3. Asset organization:
   assets/
   ├── icons/
   │   ├── languages/ (gb.svg, fi.svg, vn.svg)
   │   └── icons.config.js (export icon names)
   ├── fonts/
   │   └── index.css (centralized font definitions)
   └── images/
       └── (future: app screenshots, branding)
```

---

## 🎯 COMPONENT-BASED REFACTORING PLAN

### Target Architecture:

```
dth-mobile-app/
├── html/
│   ├── index.html (login page)
│   ├── forgot_password.html
│   ├── select_warehouse.html
│   └── [other pages]
├── css/
│   ├── index.css (main entry point)
│   ├── variables.css (design tokens)
│   ├── reset.css (normalize)
│   ├── base.css (typography, global)
│   ├── components/
│   │   ├── header.css
│   │   ├── form.css
│   │   ├── button.css
│   │   ├── input.css
│   │   ├── navigation.css
│   │   └── notify.css
│   ├── layouts/
│   │   ├── login.css (for index/forgot_password)
│   │   └── app.css (for warehouse & other pages)
│   ├── utilities/
│   │   ├── spacing.css
│   │   ├── typography.css
│   │   ├── flex.css
│   │   └── responsive.css
│   └── themes/
│       ├── light.css
│       └── dark.css
├── js/
│   ├── index.js (main entry point)
│   ├── modules/
│   │   ├── device.js
│   │   ├── theme.js
│   │   ├── navigation.js
│   │   ├── modal.js
│   │   └── notify.js
│   └── utils/
│       ├── format.js
│       ├── validate.js
│       └── debounce.js
├── components/
│   ├── README.md (component documentation)
│   ├── header.html (component template)
│   ├── form-input.html
│   ├── button.html
│   ├── notify-badge.html
│   └── nav-item.html
└── docs/
    ├── ARCHITECTURE.md
    ├── COMPONENTS.md
    └── DESIGN_TOKENS.md
```

### Component Definition (for Flutter/React Migration):

#### 1. **Header Component** (used on app pages)

```typescript
Component: AppHeader
Props:
  - title: string
  - hasNotify: boolean
  - notifyCount?: number
  - onNotifyClick?: () => void
  - onBackClick?: () => void

CSS Classes:
  - app-header
  - app-header-title
  - app-header-left
  - app-header-right
  - app-header-notify-btn
  - notify-badge
```

#### 2. **Form Input Component** (email, password, search)

```typescript
Component: FormInput
Props:
  - type: 'email' | 'password' | 'text' | 'search'
  - placeholder: string
  - icon: string (material symbol name)
  - value: string
  - onChange: (value: string) => void
  - label?: string

CSS Classes:
  - input-with-icon
  - icon-left
```

#### 3. **Button Components**

```typescript
Component: PrimaryButton
Props:
  - text: string
  - icon?: string
  - onClick: () => void
  - disabled?: boolean

CSS Classes:
  - btn-primary

Component: HeaderButton
Props:
  - icon: string
  - ariaLabel: string
  - onClick: () => void
  - hasBadge?: boolean

CSS Classes:
  - app-header-btn
```

#### 4. **Navigation Component**

```typescript
Component: BottomNavigation
Props:
  - items: NavItem[]
  - activeItem: string
  - onItemChange: (item: string) => void

CSS Classes:
  - warehouse-nav
  - warehouse-nav-item
  - warehouse-nav-item.active
```

#### 5. **Language Selector Component**

```typescript
Component: LanguageSelector
Props:
  - languages: { code, flag, label }[]
  - active: string
  - onChange: (code: string) => void

CSS Classes:
  - language-selector
  - language-btn
  - language-btn.active
```

---

## ✅ IMMEDIATE REFACTORING TASKS

### Phase 1: CSS Cleanup (1-2 hours)

- [ ] Remove `.warehouse-search-wrapper` and old `.warehouse-search-*` classes
- [ ] Remove unused `.warehouse-btn-header` class
- [ ] Consolidate color definitions (use CSS variables consistently)
- [ ] Move inline `<style>` tags from select_warehouse.html to CSS file
- [ ] Create `components/` folder structure in CSS

### Phase 2: HTML Standardization (30 mins)

- [ ] Update all pages with consistent meta tags
- [ ] Replace `Material+Icons` with `Material+Symbols+Outlined` everywhere
- [ ] Consolidate font imports to single set of weights
- [ ] Remove inline styles, move to CSS classes
- [ ] Add data-component attributes for JS targeting

### Phase 3: JavaScript Refactoring (1 hour)

- [ ] Merge utils.js into main.js scope
- [ ] Remove global window assignments, use module pattern
- [ ] Add error handling and try-catch blocks
- [ ] Add JSDoc documentation to all functions
- [ ] Create separate modules for major features

### Phase 4: Component Documentation (1 hour)

- [ ] Create COMPONENTS.md documenting all reusable components
- [ ] Create DESIGN_TOKENS.md for colors, spacing, typography
- [ ] Create ARCHITECTURE.md for structure overview
- [ ] Add comments to HTML showing component usage

---

## 📊 MIGRATION PATH (Flutter/React)

When ready to migrate to Flutter or React:

1. **Design Tokens** (CSS variables) → Flutter/React constants
2. **Component HTML structure** → React JSX / Flutter widgets
3. **CSS classes** → Component styling (Styled Components / Flutter themes)
4. **JavaScript logic** → Component methods / React hooks
5. **Navigation routing** → React Router / Flutter Navigator

---

## 🎬 NEXT STEPS

1. **Execute Phase 1**: Clean up CSS duplicates and unused styles
2. **Execute Phase 2**: Standardize HTML across all pages
3. **Execute Phase 3**: Refactor JavaScript modules
4. **Create docs**: Component library documentation
5. **Ready for migration**: Codebase can now be templated for Flutter/React
