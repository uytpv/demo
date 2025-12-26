# Design Tokens Documentation

Complete reference for all CSS variables and design system values used throughout the Andromeda mobile app.

## Color System

### Primary Colors

```css
--primary: #0088FF         /* Main brand color - blue */
--primary-light: #66BFFF   /* Lighter variant for hover/disabled states */
--primary-dark: #0066CC    /* Darker variant for active states */
```

### Neutral Colors (Grayscale)

```css
--gray-50: #f9fafb         /* Lightest - backgrounds, light hover states */
--gray-100: #f3f4f6        /* Very light borders, light backgrounds */
--gray-200: #e5e7eb        /* Light borders, secondary backgrounds */
--gray-300: #d1d5db        /* Input borders, dividers */
--gray-400: #9ca3af        /* Secondary text, icons */
--gray-500: #6b7280        /* Medium text, secondary content */
--gray-600: #4b5563        /* Darker secondary text */
--gray-700: #374151        /* Dark text (light mode) */
--gray-800: #1f2937        /* Darkest secondary - dark mode backgrounds */
--gray-900: #111827        /* Darkest primary - dark mode text */
```

### Blue Scale

```css
--blue-50: #eff6ff        /* Light blue background */
--blue-100: #dbeafe       /* Very light blue */
--blue-200: #bfdbfe       /* Light blue */
--blue-500: #3b82f6       /* Medium blue - for info states */
--blue-600: #2563eb       /* Darker blue */
```

### Semantic Colors

```css
--success: #10B981        /* Green - success states, positive actions */
--warning: #F59E0B        /* Amber - warnings, cautions */
--error: #EF4444          /* Red - errors, dangerous actions */
--info: #3B82F6           /* Blue - information messages */
```

### Dark Mode Colors

```css
--bg-dark: #0f172a        /* Dark mode background - very dark blue-gray */
--bg-light: #ffffff       /* Light mode background - white */
--surface-dark: #1a2632   /* Dark surfaces - cards, containers */
--surface-light: #ffffff  /* Light surfaces - cards, containers */
--text-dark: #f5f7fa      /* Dark mode text - near white */
--text-light: #111827     /* Light mode text - near black */
--text-secondary-dark: #a1adb8    /* Dark mode secondary text */
--text-secondary-light: #6b7280   /* Light mode secondary text */
```

## Spacing Scale

Used for margins, paddings, and gaps throughout the app. Based on 0.25rem (4px) increment.

```css
--space-xs: 0.25rem    /* 4px  - tiny spacing */
--space-sm: 0.5rem     /* 8px  - small spacing */
--space-md: 0.75rem    /* 12px - medium spacing */
--space-lg: 1rem       /* 16px - standard spacing */
--space-xl: 1.25rem    /* 20px - large spacing */
--space-2xl: 2.5rem    /* 40px - very large spacing */
```

**CSS Classes Usage:**

- `.m-1` to `.m-12` - margin
- `.p-1` to `.p-12` - padding
- `.mt-1`, `.mb-1`, `.ml-1`, `.mr-1` - individual directions
- `.mx-auto` - center horizontally
- `.gap-1` to `.gap-8` - flexbox gap

## Typography System

### Font Family

```css
--font-inter: 'Inter', sans-serif
--font-mono: 'Courier New', monospace
--font-nasalization: 'Nasalization', sans-serif  /* Logo only */
```

### Font Sizes

```css
--text-xs: 0.75rem      /* 12px - small labels, captions */
--text-sm: 0.875rem     /* 14px - secondary text, form hints */
--text-base: 1rem       /* 16px - body text, default */
--text-lg: 1.125rem     /* 18px - subheadings */
--text-xl: 1.25rem      /* 20px - section titles */
--text-2xl: 1.5rem      /* 24px - page titles */
--text-3xl: 1.875rem    /* 30px - main headings */
```

### Font Weights

```css
--font-normal: 400      /* Regular text */
--font-medium: 500      /* Medium weight - labels, buttons */
--font-semibold: 600    /* Semi-bold - section titles */
--font-bold: 700        /* Bold - main headings */
```

### Line Heights

```css
--leading-tight: 1.25   /* Compact lines */
--leading-normal: 1.5   /* Default lines */
--leading-relaxed: 1.75 /* Loose lines */
--leading-loose: 2      /* Very loose lines */
```

### Letter Spacing

```css
--tracking-tight: -0.02em   /* Condensed letters */
--tracking-normal: 0        /* Default spacing */
--tracking-wide: 0.02em     /* Spaced out letters */
```

## Border Radius

```css
--radius-none: 0
--radius-sm: 0.375rem   /* 6px - subtle corners */
--radius-md: 0.5rem     /* 8px - standard corners */
--radius-lg: 0.75rem    /* 12px - rounded corners */
--radius-xl: 1rem       /* 16px - very rounded */
--radius-2xl: 1.5rem    /* 24px - pill-shaped */
--radius-full: 9999px   /* Fully rounded - circles, pills */
```

## Transitions & Animations

### Duration

```css
--transition-fast: 0.15s      /* Quick feedback (50ms-200ms) */
--transition-base: 0.2s       /* Standard transitions */
--transition-slow: 0.3s       /* Slow, deliberate transitions */
```

### Timing Function

```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-linear: linear
```

## Z-Index Scale

Organized hierarchy for layering elements:

```css
--z-base: 1              /* Default stacking context */
--z-overlay: 10          /* Dropdowns, popovers */
--z-sticky: 20           /* Sticky elements (headers) */
--z-fixed: 30            /* Fixed bottom navigation */
--z-modal: 40            /* Modal dialogs, overlays */
```

## Breakpoints (Media Queries)

```css
--breakpoint-mobile: 320px     /* Base mobile */
--breakpoint-tablet: 768px     /* Tablet & up */
--breakpoint-desktop: 1024px   /* Desktop & up */
```

### Usage in CSS

```css
/* Mobile-first approach (default) */
.element {
  width: 100%;
}

/* Tablet and above */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Desktop and above */
@media (min-width: 1024px) {
  .element {
    width: 33.333%;
  }
}
```

## Component Sizing

### Button Heights

```css
--btn-height-sm: 36px    /* Small buttons */
--btn-height-md: 44px    /* Standard buttons, inputs */
--btn-height-lg: 48px    /* Large buttons, touch targets */
```

### Input Heights

```css
--input-height: 44px     /* Standard inputs, search bars */
--input-padding-x: 1rem  /* Horizontal input padding */
--input-padding-y: 0.875rem
```

### Icon Sizes

```css
--icon-xs: 16px
--icon-sm: 20px
--icon-md: 24px          /* Standard material icon size */
--icon-lg: 32px
--icon-xl: 40px
```

## Safe Area Insets

For notched/notch-safe devices (iPhones, etc.):

```css
env(safe-area-inset-top)      /* Top notch area */
env(safe-area-inset-bottom)   /* Home indicator area */
env(safe-area-inset-left)     /* Side notches */
env(safe-area-inset-right)    /* Side notches */
```

**Usage Example:**

```css
.app-header {
  padding-top: max(1rem, env(safe-area-inset-top));
}

.navigation {
  padding-bottom: max(0.5rem, env(safe-area-inset-bottom));
}
```

## Dark Mode Implementation

All color variables have light and dark variants. Dark mode is activated via `body.dark-mode` class.

```css
/* Light Mode (default) */
body {
  --bg-light: #ffffff;
  --text-light: #111827;
  --surface-light: #ffffff;
  --text-secondary-light: #6b7280;
}

/* Dark Mode */
body.dark-mode {
  --bg-dark: #0f172a;
  --text-dark: #f5f7fa;
  --surface-dark: #1a2632;
  --text-secondary-dark: #a1adb8;
}

/* Usage */
.component {
  background-color: var(--surface-light);
  color: var(--text-light);
}

body.dark-mode .component {
  background-color: var(--surface-dark);
  color: var(--text-dark);
}
```

## Animation Keyframes

### Badge Pulse

```css
@keyframes badge-pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
```

### Toast Slide Up

```css
@keyframes toast-slide-up {
  from {
    transform: translateY(2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### Spinner Rotation

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Best Practices

1. **Always use CSS variables** instead of hardcoded colors/sizes
2. **Maintain color consistency** - use semantic color names (error, success) when possible
3. **Respect spacing scale** - stick to predefined spacing values
4. **Support dark mode** - test all components in both light and dark modes
5. **Test on real devices** - verify safe-area-inset values on actual notched devices
6. **Use semantic HTML** - combine with accessible structure for best results
7. **Performance** - CSS variables are applied at runtime, be mindful of quantity and specificity

## Migration from Tailwind

When converting from Tailwind CSS classes to custom properties:

| Tailwind        | Custom Property                          |
| --------------- | ---------------------------------------- |
| `bg-white`      | `background-color: var(--surface-light)` |
| `text-gray-700` | `color: var(--text-light)`               |
| `rounded-lg`    | `border-radius: var(--radius-lg)`        |
| `shadow-md`     | `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`  |
| `gap-4`         | `gap: var(--space-lg)`                   |
| `px-4`          | `padding-left/right: var(--space-lg)`    |
| `text-lg`       | `font-size: var(--text-lg)`              |
| `font-semibold` | `font-weight: var(--font-semibold)`      |

---

**Last Updated:** Phase 1 CSS Component Extraction
**Version:** 1.0.0
