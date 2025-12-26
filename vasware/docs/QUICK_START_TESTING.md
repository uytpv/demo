# Quick Start: Begin Testing Now (5 Minutes)

**Goal:** Run first automated test to verify CSS is working  
**Time:** 5 minutes  
**Tools Needed:** Chrome/Firefox browser only

---

## Step 1: Open a Page (30 seconds)

Pick any page from your app:

- **Easiest:** `index.html` (Login page)
- **Or:** `select_warehouse.html` (Main app)

**Open it in your browser:**

- Right-click file → "Open with Chrome/Firefox"
- Or drag file to browser window

---

## Step 2: Open Developer Tools (30 seconds)

Press one of these:

- **Windows/Linux:** `F12` or `Ctrl+Shift+I`
- **Mac:** `Cmd+Option+I`

You should see DevTools panel appear at bottom or side.

---

## Step 3: Go to Console Tab (30 seconds)

In DevTools:

1. Find the "Console" tab (usually at top)
2. Click it
3. You should see a `>>` prompt

---

## Step 4: Copy & Run Test Script (3 minutes)

Copy this exact script:

```javascript
console.log("\n=== CSS LOADING TEST ===\n");
const indexCss = Array.from(document.styleSheets).find((s) =>
  s.href?.includes("index.css")
);
const cssLoaded = !!indexCss;
console.log(`✅ CSS Loaded: ${cssLoaded}`);
const root = getComputedStyle(document.documentElement);
const vars = ["--color-primary", "--color-text-primary", "--color-bg-primary"];
vars.forEach((v) => {
  const val = root.getPropertyValue(v).trim();
  console.log(`${val ? "✅" : "❌"} ${v}: ${val}`);
});
```

**Paste it in console** (where you see `>>`):

1. Right-click → Paste
2. Press Enter

---

## Step 5: Check Results (1 minute)

You should see output like:

```
=== CSS LOADING TEST ===

✅ CSS Loaded: true
✅ --color-primary: #0088FF
✅ --color-text-primary: #1A1A1A
✅ --color-bg-primary: #FFFFFF
```

### ✅ If you see checkmarks:

- CSS is working! ✅
- Variables are loaded! ✅
- App is ready for testing! ✅

### ❌ If you see X marks or "MISSING":

- There's a CSS issue to investigate
- Check PHASE_3_TESTING_EXECUTION.md for help

---

## 🎯 What's Next?

### Option A: Test Dark Mode (2 minutes)

```javascript
// Switch to dark mode
document.documentElement.classList.add("dark-mode");
console.log("Dark mode ON - check if colors changed");

// Switch back to light
document.documentElement.classList.remove("dark-mode");
console.log("Dark mode OFF - check if colors restored");
```

**Expected:** Background changes to dark gray, text changes to light

### Option B: Test Responsive (2 minutes)

1. In DevTools, find the **device icon** (looks like phone/tablet)
2. Click it to toggle "Responsive Mode"
3. Select **"iPhone 12"** from the list
4. Page should reformat for mobile
5. Select **"iPad"** - should reformat for tablet
6. Close responsive mode - should show desktop layout

### Option C: Run Full Test Suite (10 minutes)

See [WEEK_1_TESTING_REPORT.md](WEEK_1_TESTING_REPORT.md) for 4 complete testing scripts

---

## 🆘 Troubleshooting

### "Console not showing"

- Make sure DevTools is fully open (might be collapsed)
- Try pressing F12 again

### "Script won't paste"

- Clear the console first (click circular arrow icon)
- Try typing one line at a time

### "CSS Loaded: false"

- Check that file path is correct: `css/index.css`
- Make sure you're opening from the project folder
- Try refreshing page (Ctrl+R)

### "Variables showing empty"

- The variables might not be in --color-primary format
- Check DESIGN_TOKENS.md for actual variable names
- Ask for help in PHASE_3_TESTING_EXECUTION.md

---

## 📋 Testing Checklist

Once you verify CSS is working:

- [x] CSS loads ✅
- [ ] Dark mode toggles
- [ ] Mobile layout works (responsive)
- [ ] All components visible
- [ ] No console errors

---

## 🚀 You're Ready!

**You just ran your first automated test!**

Next: Run the full Week 1 test suite from WEEK_1_TESTING_REPORT.md

Questions? Check:

- **CSS issues:** PHASE_3_TESTING_EXECUTION.md
- **Dark mode:** DARK_MODE_TESTING.md
- **Responsive:** Look for "Responsive Testing" in guides
- **Accessibility:** ACCESSIBILITY_AUDIT.md

---

**Time to complete:** ~5 minutes  
**Difficulty:** Easy  
**Result:** CSS verified working ✅
