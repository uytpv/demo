# DTH Mobile App

A mobile-first web application for DTH (Dynamic Time & Hour) management system. Fully responsive and optimized for all devices.

## Project Structure

```
dth-mobile-app/
├── html/                    # HTML pages
│   ├── index.html          # Login page
│   ├── forgot_password.html
│   ├── select_warehouse.html
│   ├── select_customer_task.html
│   ├── select_product.html
│   ├── timer.html
│   ├── my_time_cards.html
│   ├── my_time_card_detail.html
│   ├── sick_leave.html
│   ├── policies.html
│   ├── safety.html
│   ├── settings.html
│   └── template.html       # Page template
│
├── css/                     # Modular CSS Architecture (Phase 1)
│   ├── index.css           # Master import file (single entry point)
│   ├── variables.css       # Design tokens (colors, spacing, typography)
│   ├── reset.css           # CSS reset and normalization
│   ├── base.css            # Global styles and base utilities
│   ├── components/         # Reusable component styles
│   │   ├── header.css      # App header, notify button
│   │   ├── form.css        # Form inputs, search fields
│   │   ├── button.css      # Buttons, warehouse items
│   │   ├── navigation.css  # Bottom nav, language selector
│   │   └── notify.css      # Badges, toasts, alerts
│   ├── layouts/            # Page layout styles
│   │   ├── login.css       # Login/forgot password layout
│   │   └── app.css         # Warehouse app layout
│   └── utilities/          # Helper classes
│       ├── spacing.css     # Margin and padding utilities
│       ├── typography.css  # Font and text utilities
│       ├── flex.css        # Flexbox utilities
│       └── responsive.css  # Media queries and responsive utilities
│
├── js/                      # JavaScript files
│   ├── main.js             # Main application script
│   └── utils.js            # Utility functions
│
├── assets/                  # Static assets
│   ├── fonts/              # Custom fonts
│   ├── icons/              # SVG icons and Material Symbols
│   └── images/             # Image files
│
├── README.md               # Project documentation
├── RESPONSIVE_DESIGN.md    # Responsive design guide
├── DESIGN_TOKENS.md        # Design system reference
├── COMPONENTS.md           # Component library documentation
├── MIGRATION_GUIDE.md      # Guide for adding new pages/components
├── PHASE_2_TESTING.md      # Testing and verification report
└── .gitignore             # Git ignore rules
```

## Features

✨ **Mobile-First Design** - Built for mobile, scales to desktop  
📱 **Fully Responsive** - Works on all screen sizes  
🎨 **Dark Mode Support** - Light and dark theme  
⚡ **Optimized Performance** - Fast loading and smooth interactions  
♿ **Accessible** - WCAG compliant  
🔒 **Secure** - HTTPS ready  
🌐 **Cross-Browser** - Works on all modern browsers

## Getting Started

### 1. File Structure

## CSS Architecture (Phase 1 - Modular Design)

CSS is organized as a modular, maintainable architecture:

### Architecture Overview

```
index.css (Master Import)
    ↓
    ├─ variables.css (Design Tokens)
    ├─ reset.css (Normalization)
    ├─ base.css (Global Styles)
    ├─ components/* (5 component files)
    ├─ layouts/* (2 layout files)
    └─ utilities/* (4 utility files)
```

### Key Benefits

✅ **Separation of Concerns** - Each file has a single responsibility  
✅ **Reusability** - Components can be easily copied to other projects  
✅ **Maintainability** - Easy to find and modify specific styles  
✅ **Scalability** - Simple to add new components and utilities  
✅ **Documentation** - Design tokens and components fully documented  
✅ **Framework Ready** - Structure ready for Flutter/React migration

### Quick Start

All HTML pages link to a single CSS file:

```html
<link rel="stylesheet" href="../css/index.css" />
```

This single import loads all modular CSS in the correct order.

### Design Tokens

All colors, spacing, and typography use CSS variables defined in `variables.css`:

```css
:root {
  /* Colors */
  --primary: #0088ff;
  --gray-700: #374151;

  /* Spacing */
  --space-lg: 1rem;

  /* Typography */
  --text-xl: 1.25rem;
  --font-semibold: 600;
}
```

Usage in components:

```css
.button {
  background-color: var(--primary);
  padding: var(--space-lg);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
}
```

### Adding New Components

1. Create CSS file in `css/components/my-component.css`
2. Add `@import 'components/my-component.css';` to `css/index.css`
3. Document in `COMPONENTS.md`

See [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for detailed instructions.

### Dark Mode Support

All components support light and dark modes:

```css
/* Light Mode (Default) */
.component {
  background-color: var(--surface-light);
  color: var(--text-light);
}

/* Dark Mode */
body.dark-mode .component {
  background-color: var(--surface-dark);
  color: var(--text-dark);
}
```

Toggle dark mode by adding `dark-mode` class to `<body>`:

```javascript
document.body.classList.toggle("dark-mode");
```

### Responsive Breakpoints

- **Mobile:** 320px - 767px (default)
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## Getting Started

### 1. Setup HTML Files

- Place all HTML files in the `html/` directory
- Include single CSS import:
  ```html
  <link rel="stylesheet" href="../css/index.css" />
  ```

### 2. Include Fonts and Icons

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>

<!-- Material Symbols Icons -->
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
  rel="stylesheet"
/>
```

### 3. Viewport Meta Tag

Include for responsive design and safe-area support:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover"
/>
```

### 4. Using Template

Use `html/template.html` as a starting point for new pages.

## Responsive Breakpoints

| Device  | Width      | Breakpoint |
| ------- | ---------- | ---------- |
| Mobile  | 320-767px  | < 768px    |
| Tablet  | 768-1023px | ≥ 768px    |
| Desktop | 1024px+    | ≥ 1024px   |

## CSS Classes

### Layout

```html
<div class="container">Content</div>
<div class="flex items-center justify-between">Flex layout</div>
```

### Spacing

```html
<div class="p-6 py-3 px-4 mb-4">Padding & margin</div>
```

### Text

```html
<h1 class="text-responsive-lg font-semibold">Responsive heading</h1>
```

### Grid

```html
<div class="card-grid">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
</div>
```

### Responsive Display

```html
<div class="show-mobile">Mobile only</div>
<div class="show-tablet">Tablet only</div>
<div class="show-desktop">Desktop only</div>
```

## JavaScript Functions

### Theme

```javascript
toggleDarkMode(); // Toggle dark/light mode
```

### Navigation

```javascript
openBottomSheet(id); // Open bottom sheet
closeBottomSheet(id); // Close bottom sheet
openModal(id); // Open modal
closeModal(id); // Close modal
switchTab(tabName); // Switch between tabs
```

### Utilities

```javascript
showToast(message, type, duration); // Show notification
debounce(func, wait); // Debounce function
```

## Mobile Optimization

### Touch Targets

- Minimum 44x44 pixels for buttons
- Handled automatically in CSS

### Input Fields

- Font size ≥ 16px to prevent zoom on iOS
- `inputmode` attribute for better keyboard

### Safe Area

- Automatically handles notches on iOS
- `viewport-fit=cover` in meta tag

### Performance

- Lazy loading for images: `loading="lazy"`
- No horizontal scrolling
- Optimized CSS and JavaScript

## Dark Mode

### Enable Dark Mode

```javascript
toggleDarkMode();
```

### CSS Variables

```css
:root {
  --primary: #0088ff;
  --background-light: #f3f4f6;
  --text-light: #1f2937;
}

body.dark-mode {
  --background-dark: #111827;
  --text-dark: #f9fafb;
}
```

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables
- **JavaScript (ES6+)** - Vanilla JS (no dependencies)
- **Google Fonts** - Inter typeface
- **Material Icons** - Icon library

## Browser Support

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ iOS Safari 14+  
✅ Android Browser 90+

## Development

### Local Server

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

Access at: `http://localhost:8000/html/index.html`

### Testing

1. Use browser DevTools responsive mode (Ctrl+Shift+M)
2. Test on actual devices when possible
3. Check different orientations (portrait/landscape)

## Performance Tips

1. Use `loading="lazy"` for images
2. Minimize JavaScript execution time
3. Cache static assets
4. Compress images
5. Use CSS variables for theming

## Accessibility

- Color contrast: WCAG AA (4.5:1)
- Touch targets: Minimum 44x44px
- Focus indicators: Visible
- Alt text for images
- Semantic HTML

## Documentation

See [RESPONSIVE_DESIGN.md](RESPONSIVE_DESIGN.md) for detailed responsive design guide.

## License

This project is proprietary software.

## Support

For issues or questions, contact the development team.

---

**Version**: 2.4.1  
**Last Updated**: December 25, 2025  
**Mobile-First Framework**: DTH App Framework v1.0
