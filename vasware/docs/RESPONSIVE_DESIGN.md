# Responsive Design Guide

## Overview

Dự án này được thiết kế với **mobile-first approach**, có nghĩa là chúng tôi phát triển cho mobile trước, sau đó mở rộng cho tablet và desktop.

## Breakpoints

```css
Mobile:   320px - 767px   (Điện thoại)
Tablet:   768px - 1023px  (Máy tính bảng)
Desktop:  1024px+         (Máy tính để bàn)
```

## Responsive Units

- **Viewport Height Hack**: Sử dụng `100dvh` thay vì `100vh` để tránh lỗi thanh địa chỉ trên mobile
- **Safe Area**: Tự động xử lý notch trên iOS thông qua `viewport-fit=cover`
- **Font Size**: Cơ bản 16px trên mobile, có thể tăng trên tablet/desktop

## Mobile Optimization

### 1. Touch Targets (44x44px minimum)

```html
<!-- Các button, link phải tối thiểu 44x44px trên mobile -->
<button class="h-10 w-10">Click</button>
```

### 2. Input Fields

```html
<!-- Font size 16px+ để tránh auto-zoom trên iOS -->
<input type="email" inputmode="email" />
```

### 3. Viewport Configuration

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover"
/>
```

## Responsive Classes

### Display Classes

```html
<!-- Show only on mobile -->
<div class="show-mobile">Mobile only</div>

<!-- Show only on tablet -->
<div class="show-tablet">Tablet only</div>

<!-- Show only on desktop -->
<div class="show-desktop">Desktop only</div>

<!-- Hide on mobile -->
<div class="hide-mobile">Not on mobile</div>
```

### Grid System

```html
<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="card-grid">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>
```

### Text Responsive

```html
<p class="text-responsive-sm">Small</p>
<p class="text-responsive-base">Base</p>
<p class="text-responsive-lg">Large</p>
```

## Device-Specific Styles

### iOS

```css
html.ios body {
  padding-bottom: env(safe-area-inset-bottom);
}
```

### Android

```css
html.android body {
  padding-bottom: 0;
}
```

## Media Queries

### Tablet

```css
@media (min-width: 768px) {
  /* Tablet styles */
}
```

### Desktop

```css
@media (min-width: 1024px) {
  /* Desktop styles */
}
```

### Landscape

```css
@media (max-height: 500px) {
  /* Landscape mode styles */
}
```

### Touch Devices

```css
@media (hover: none) and (pointer: coarse) {
  /* Touch device specific */
}
```

## Common Patterns

### Bottom Sheet

```html
<div class="bottom-sheet" id="mySheet">
  <div class="bottom-sheet-handle"></div>
  <div class="bottom-sheet-content">
    <!-- Content -->
  </div>
</div>

<script>
  openBottomSheet("mySheet");
  closeBottomSheet("mySheet");
</script>
```

### Modal

```html
<div class="modal" id="myModal">
  <div class="modal-content">
    <!-- Content -->
  </div>
</div>

<script>
  openModal("myModal");
  closeModal("myModal");
</script>
```

### Tabs

```html
<div class="tabs">
  <button class="tab active" onclick="switchTab('tab1')">Tab 1</button>
  <button class="tab" onclick="switchTab('tab2')">Tab 2</button>
</div>

<div id="tab1" class="tab-content active">Content 1</div>
<div id="tab2" class="tab-content">Content 2</div>
```

## Performance Tips

1. **Lazy Loading**: Sử dụng `loading="lazy"` cho images
2. **Viewport Height Fix**: Tự động được xử lý bởi JavaScript
3. **No Horizontal Scroll**: Tránh layout shift bằng `max-width: 100vw`
4. **Touch Optimization**: 44px minimum touch targets
5. **Safe Area**: Tự động xử lý notch iOS

## Testing

### Browser DevTools

1. Mở DevTools (F12)
2. Click Device Toolbar (Ctrl+Shift+M)
3. Chọn thiết bị (iPhone, Pixel, iPad, etc.)
4. Test responsive behavior

### Device Sizes

- **Mobile**: 320px, 375px, 414px
- **Tablet**: 768px, 834px, 1024px
- **Desktop**: 1366px, 1920px

## Accessibility

- Minimum font size: 12px (nhưng khuyến nghị 16px+)
- Color contrast: WCAG AA (4.5:1 for text)
- Touch targets: Minimum 44x44px
- Focus indicators: Visible on all interactive elements

## CSS Utilities

### Spacing

```css
.p-responsive  /* Padding responsive */
/* Padding responsive */
.py-3          /* Padding vertical */
.px-4          /* Padding horizontal */
.mb-4; /* Margin bottom */
```

### Flex

```css
.flex .flex-col .items-center .justify-center .justify-between .gap-3;
```

### Text

```css
.text-center .text-responsive-lg .font-semibold .text-text-light;
```

## Theme System

### Light Mode (Default)

```css
--background-light: #F3F4F6
--surface-light: #FFFFFF
--text-light: #1F2937
```

### Dark Mode

```css
body.dark-mode {
  --background-dark: #111827
  --surface-dark: #1F2937
  --text-dark: #F9FAFB
}
```

## Mobile-First Approach

```css
/* Default: Mobile styles */
.component {
  font-size: 14px;
  padding: 0.75rem;
}

/* Tablet: Expand */
@media (min-width: 768px) {
  .component {
    font-size: 15px;
    padding: 1rem;
  }
}

/* Desktop: Full size */
@media (min-width: 1024px) {
  .component {
    font-size: 16px;
    padding: 1.5rem;
  }
}
```

## Common Issues & Solutions

### VH Bug on Mobile

**Problem**: `100vh` includes address bar  
**Solution**: Sử dụng `100dvh` hoặc JavaScript fix

### Double-tap Zoom

**Problem**: Slow clicks on mobile  
**Solution**: Tự động được vô hiệu hóa bởi main.js

### Input Zoom

**Problem**: Font size < 16px gây zoom  
**Solution**: Đặt `font-size: 16px+` trên inputs

### Safe Area Inset

**Problem**: Content bị che bởi notch  
**Solution**: Tự động xử lý qua CSS

## Resources

- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
