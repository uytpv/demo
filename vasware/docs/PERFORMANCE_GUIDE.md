# Performance Testing & Optimization Guide

Complete guide for measuring, monitoring, and optimizing web performance.

---

## Table of Contents

1. [Core Web Vitals](#core-web-vitals)
2. [Performance Metrics](#performance-metrics)
3. [Testing Procedures](#testing-procedures)
4. [Optimization Strategies](#optimization-strategies)
5. [Monitoring](#monitoring)

---

## Core Web Vitals

Google's three key metrics for user experience:

### 1. **LCP - Largest Contentful Paint**

**What:** Time until largest visual element appears  
**Target:** < 2.5 seconds  
**Good:** Green < 2.5s | Needs Improvement 2.5-4s | Poor > 4s

```javascript
// Measure LCP
new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1];
  console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
}).observe({ entryTypes: ["largest-contentful-paint"] });
```

**Common Causes:**

- Slow server response
- Render-blocking CSS
- Large images
- Unoptimized fonts

**Fixes:**

- Use CDN for static assets
- Minify CSS/JS
- Compress images
- Use modern formats (WebP)
- Lazy load off-screen elements
- Preload critical resources

### 2. **FID - First Input Delay**

**What:** Delay between user input and browser response  
**Target:** < 100 milliseconds  
**Good:** Green < 100ms | Needs Improvement 100-300ms | Poor > 300ms

```javascript
// Measure FID
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("FID:", entry.processingDuration);
  }
}).observe({ entryTypes: ["first-input"] });
```

**Common Causes:**

- Large JavaScript execution
- Heavy CSS parsing
- Main thread blocking
- Unoptimized event handlers

**Fixes:**

- Break long tasks into smaller chunks
- Use requestIdleCallback for non-critical work
- Optimize JavaScript
- Defer non-critical JavaScript
- Use web workers for heavy processing

### 3. **CLS - Cumulative Layout Shift**

**What:** Measure of unexpected layout changes  
**Target:** < 0.1  
**Good:** Green < 0.1 | Needs Improvement 0.1-0.25 | Poor > 0.25

```javascript
// Measure CLS
let cls = 0;
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (!entry.hadRecentInput) {
      cls += entry.value;
      console.log("Layout Shift:", entry.value);
    }
  }
}).observe({ entryTypes: ["layout-shift"] });

console.log("Total CLS:", cls);
```

**Common Causes:**

- Images/videos without dimensions
- Ads/embeds without dimensions
- Web fonts causing FOIT/FOUT
- Dynamic content insertion
- Animations without transform

**Fixes:**

- Always specify image dimensions

```html
<img src="photo.jpg" width="400" height="300" alt="" />
```

- Use CSS transform for animations (not position)

```css
/* Good - no layout shift */
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

/* Bad - causes layout shift */
@keyframes slide {
  from {
    left: 0;
  }
  to {
    left: 100px;
  }
}
```

- Preload fonts
- Reserve space for ads/embeds

---

## Performance Metrics

### Page Load Metrics

```javascript
// Get all performance metrics
window.addEventListener("load", () => {
  const nav = window.performance.getEntriesByType("navigation")[0];

  console.log({
    "DNS Lookup": nav.domainLookupEnd - nav.domainLookupStart,
    "TCP Connection": nav.connectEnd - nav.connectStart,
    "TLS Handshake": nav.secureConnectionStart
      ? nav.connectEnd - nav.secureConnectionStart
      : 0,
    "Request Time": nav.responseStart - nav.requestStart,
    "Response Time": nav.responseEnd - nav.responseStart,
    "DOM Processing": nav.domInteractive - nav.responseEnd,
    "DOM Content Loaded": nav.domContentLoadedEventEnd - nav.fetchStart,
    "Page Load": nav.loadEventEnd - nav.fetchStart,
  });
});
```

### Resource Metrics

```javascript
// Check CSS loading time
const resources = window.performance.getEntriesByType("resource");
const cssResources = resources.filter((r) => r.name.includes(".css"));

cssResources.forEach((resource) => {
  console.log(
    `${resource.name.split("/").pop()}: ${Math.round(resource.duration)}ms`
  );
});
```

### Budgets

```javascript
// Performance budget thresholds
const budgets = {
  "CSS File Size": { max: 50, unit: "KB" },
  "JS File Size": { max: 200, unit: "KB" },
  "Total Page Size": { max: 3, unit: "MB" },
  "HTML Load Time": { max: 2, unit: "seconds" },
  "CSS Load Time": { max: 0.5, unit: "seconds" },
  "JS Load Time": { max: 1, unit: "seconds" },
};

Object.entries(budgets).forEach(([metric, budget]) => {
  console.log(`${metric}: Max ${budget.max} ${budget.unit}`);
});
```

---

## Testing Procedures

### Method 1: Chrome Lighthouse (Easiest)

**Steps:**

1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Performance"
4. Click "Analyze page load"
5. Review results and recommendations

**Metrics Provided:**

- ✅ LCP (Largest Contentful Paint)
- ✅ FID (First Input Delay)
- ✅ CLS (Cumulative Layout Shift)
- ✅ FCP (First Contentful Paint)
- ✅ TTFB (Time to First Byte)
- ✅ Speed Index
- ✅ Total Blocking Time

### Method 2: DevTools Network Tab

**Steps:**

1. Open DevTools (F12)
2. Go to "Network" tab
3. Reload page (Ctrl+R)
4. Review resource loading
5. Check file sizes and load times

**What to Check:**

- [ ] CSS loads < 500ms
- [ ] JS loads < 1s
- [ ] Images load efficiently
- [ ] No large uncompressed assets
- [ ] No render-blocking resources

### Method 3: Web Vitals Library

```html
<!-- Add to head -->
<script async src="https://web-vitals.dev/web-vitals.js"></script>

<script>
  window.addEventListener("web-vitals", (e) => {
    const { name, value } = e.detail;
    console.log(name, value); // LCP, FID, CLS, FCP, TTFB

    // Send to analytics
    // fetch('/api/metrics', {
    //   method: 'POST',
    //   body: JSON.stringify({name, value})
    // });
  });
</script>
```

### Method 4: Performance API

```javascript
// Comprehensive performance monitoring
function measurePerformance() {
  if (!window.performance) {
    console.log("Performance API not supported");
    return;
  }

  // Navigation timing
  const nav = performance.getEntriesByType("navigation")[0];

  // Paint timing
  const paint = performance.getEntriesByType("paint");

  // Largest contentful paint
  const lcp = performance.getEntriesByType("largest-contentful-paint");

  // Layout shifts
  const cls = performance.getEntriesByType("layout-shift");

  const metrics = {
    "TTFB (Time to First Byte)": Math.round(nav.responseStart),
    "FCP (First Contentful Paint)":
      paint.find((p) => p.name === "first-contentful-paint")?.startTime || 0,
    "LCP (Largest Contentful Paint)":
      lcp.length > 0 ? lcp[lcp.length - 1].renderTime : 0,
    "DOM Interactive": Math.round(nav.domInteractive),
    "DOM Complete": Math.round(nav.domComplete),
    "Page Load": Math.round(nav.loadEventEnd - nav.fetchStart),
    "CLS (Cumulative Layout Shift)": cls.reduce(
      (sum, entry) => sum + entry.value,
      0
    ),
  };

  console.table(metrics);
  return metrics;
}

// Run after page load
window.addEventListener("load", measurePerformance);
```

### Method 5: Throttled Network Testing

**For simulating slow networks:**

```javascript
// Chrome DevTools > Network tab
// 1. Check "Throttling" dropdown
// 2. Select "Slow 3G" or "Fast 3G"
// 3. Reload page
// 4. Observe timing with network constraint
```

---

## Performance Targets

### Target Metrics for Andromeda App

| Metric        | Target  | Current | Status |
| ------------- | ------- | ------- | ------ |
| **LCP**       | < 2.5s  | [ ]     | [ ]    |
| **FID**       | < 100ms | [ ]     | [ ]    |
| **CLS**       | < 0.1   | [ ]     | [ ]    |
| **FCP**       | < 1.8s  | [ ]     | [ ]    |
| **TTFB**      | < 1.5s  | [ ]     | [ ]    |
| **Page Load** | < 3s    | [ ]     | [ ]    |
| **CSS Size**  | < 50KB  | [ ]     | [ ]    |
| **JS Size**   | < 200KB | [ ]     | [ ]    |

---

## Optimization Strategies

### CSS Optimization

```css
/* 1. Minify CSS (use build tool) */
/* Before: 1,500 bytes */
/* After: 1,200 bytes (20% reduction) */

/* 2. Remove unused CSS */
/* Check COMPONENTS.md for actually used classes */

/* 3. Critical CSS inline */
/* Put above-fold CSS in <style> tag */

/* 4. Defer non-critical CSS */
<link rel="preload" href="non-critical.css" as="style">
<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">

/* 5. Use CSS variables efficiently */
/* Not using excessive number of variables */
```

### JavaScript Optimization

```javascript
// 1. Defer non-critical JS
<script src="app.js" defer></script>

// 2. Use async for independent scripts
<script src="analytics.js" async></script>

// 3. Code splitting
// Lazy load routes/components

// 4. Tree shaking
// Remove unused code in build

// 5. Minify and compress
// Use gzip or brotli
```

### Image Optimization

```html
<!-- 1. Use modern formats -->
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" />
</picture>

<!-- 2. Responsive images -->
<img
  srcset="small.jpg 480w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 1200px"
  src="large.jpg"
  alt=""
/>

<!-- 3. Lazy load -->
<img src="image.jpg" loading="lazy" alt="" />

<!-- 4. Specify dimensions -->
<img src="image.jpg" width="400" height="300" alt="" />

<!-- 5. Compress images -->
<!-- Use imagemin or similar tools -->
```

### Font Optimization

```html
<!-- 1. Preload critical fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="preload"
  as="font"
  href="inter.woff2"
  type="font/woff2"
  crossorigin
/>

<!-- 2. Use font-display -->
<style>
  @font-face {
    font-display: swap; /* Show fallback while loading */
  }
</style>

<!-- 3. Only load needed weights -->
<!-- Current: 400, 500, 600, 700 (good) -->

<!-- 4. Use local font copies if possible -->
```

### Network Optimization

```javascript
// 1. Enable compression
// Server should use gzip/brotli

// 2. Use CDN
// Serve static assets from CDN

// 3. HTTP/2 Server Push
// Push critical resources early

// 4. Connection keep-alive
// Reuse TCP connections

// 5. DNS prefetching
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## Optimization Checklist

### Images

- [ ] All images compressed
- [ ] WebP format used where supported
- [ ] Dimensions specified on img tags
- [ ] Lazy loading for off-screen images
- [ ] Responsive images using srcset

### CSS

- [ ] CSS minified (if deployed)
- [ ] Unused CSS removed
- [ ] Critical CSS identified
- [ ] No render-blocking CSS
- [ ] CSS-in-JS libraries evaluated

### JavaScript

- [ ] JS minified (if deployed)
- [ ] Unused code removed
- [ ] Large libraries evaluated for alternatives
- [ ] Code splitting implemented
- [ ] Defer/async used appropriately

### Fonts

- [ ] Font files compressed
- [ ] Only needed weights included
- [ ] Preload critical fonts
- [ ] Font-display: swap used
- [ ] Local fallbacks available

### Network

- [ ] Gzip/Brotli compression enabled
- [ ] CDN used for static assets
- [ ] Keep-alive enabled
- [ ] DNS prefetch for external APIs
- [ ] HTTP/2 or HTTP/3 enabled

### Monitoring

- [ ] Performance metrics tracked
- [ ] Real user monitoring enabled
- [ ] Alerts for performance regression
- [ ] Regular performance audits
- [ ] Performance budget enforced

---

## Performance Report Template

### Performance Test Results

**Test Date:** ******\_\_\_******  
**Browser:** ******\_\_\_****** | **Device:** ******\_\_\_******  
**Network:** ******\_\_\_****** | **Connection Speed:** ******\_\_\_******

### Metrics

| Metric    | Target  | Actual   | Status    |
| --------- | ------- | -------- | --------- |
| LCP       | < 2.5s  | **\_\_** | [ ] ✅/❌ |
| FID       | < 100ms | **\_\_** | [ ] ✅/❌ |
| CLS       | < 0.1   | **\_\_** | [ ] ✅/❌ |
| FCP       | < 1.8s  | **\_\_** | [ ] ✅/❌ |
| TTFB      | < 1.5s  | **\_\_** | [ ] ✅/❌ |
| Page Load | < 3s    | **\_\_** | [ ] ✅/❌ |

### Resource Sizes

| Resource        | Size   | Target  | Status |
| --------------- | ------ | ------- | ------ |
| CSS (index.css) | \_\_KB | < 50KB  | [ ]    |
| JS (main.js)    | \_\_KB | < 200KB | [ ]    |
| Fonts           | \_\_KB | < 100KB | [ ]    |
| Images          | \_\_KB | < 500KB | [ ]    |
| **Total**       | \_\_KB | < 3MB   | [ ]    |

### Lighthouse Scores

- **Performance:** \_\_/100
- **Accessibility:** \_\_/100
- **Best Practices:** \_\_/100
- **SEO:** \_\_/100

### Recommendations

1. Priority 1 (Critical):

   - ***
   - ***

2. Priority 2 (Important):

   - ***
   - ***

3. Priority 3 (Nice-to-have):
   - ***
   - ***

### Sign-Off

- [ ] Testing complete
- [ ] Metrics documented
- [ ] Recommendations reviewed
- [ ] Approved for next phase

---

**Last Updated:** December 25, 2025
**Version:** 1.0.0
