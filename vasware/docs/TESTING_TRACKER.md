# Phase 3 Testing Tracker

Complete testing checklist for all 12 HTML pages.

---

## Test Execution Plan

### Week 1: Automated & Infrastructure Testing (Dec 25-29)

| Task                  | Page | Status | Date | Notes                     |
| --------------------- | ---- | ------ | ---- | ------------------------- |
| CSS Import Validation | All  | [ ]    |      | Check index.css loaded    |
| CSS Variables Check   | All  | [ ]    |      | Verify color/spacing vars |
| Dark Mode Toggle      | All  | [ ]    |      | Switch mode, check colors |
| Viewport Responsive   | All  | [ ]    |      | Test 375px, 768px, 1024px |
| Component Render      | All  | [ ]    |      | Verify 5 key components   |
| Font Loading          | All  | [ ]    |      | Check Inter font loaded   |
| Icons Loading         | All  | [ ]    |      | Check Material Symbols    |
| Performance Metrics   | All  | [ ]    |      | LCP, FID, CLS values      |
| Accessibility Score   | All  | [ ]    |      | Lighthouse A11y score     |
| Network Analysis      | All  | [ ]    |      | DevTools Network tab      |

### Week 2: Manual Visual Testing (Dec 30 - Jan 5)

#### Page: index.html (Login)

| Test Case              | Desktop | Mobile | Tablet | Status | Notes                    |
| ---------------------- | ------- | ------ | ------ | ------ | ------------------------ |
| Layout renders         | [ ]     | [ ]    | [ ]    | [ ]    | Check header alignment   |
| Form displays          | [ ]     | [ ]    | [ ]    | [ ]    | Email/password inputs    |
| Button styling         | [ ]     | [ ]    | [ ]    | [ ]    | "Sign In" button visible |
| Links work             | [ ]     | [ ]    | [ ]    | [ ]    | Forgot password, signup  |
| Dark mode              | [ ]     | [ ]    | [ ]    | [ ]    | Background/text colors   |
| Responsive images      | [ ]     | [ ]    | [ ]    | [ ]    | Logo scaling             |
| Touch targets (mobile) | [ ]     | -      | -      | [ ]    | Buttons 44x44px+         |
| Safe area (notch)      | [ ]     | -      | [ ]    | [ ]    | Notch/safe-area handling |

#### Page: forgot_password.html

| Test Case         | Desktop | Mobile | Tablet | Status | Notes                    |
| ----------------- | ------- | ------ | ------ | ------ | ------------------------ |
| Header displays   | [ ]     | [ ]    | [ ]    | [ ]    | "Forgot Password" title  |
| Form fields       | [ ]     | [ ]    | [ ]    | [ ]    | Email input, submit btn  |
| Help text         | [ ]     | [ ]    | [ ]    | [ ]    | Instructions readable    |
| Dark mode         | [ ]     | [ ]    | [ ]    | [ ]    | Text/background contrast |
| Form validation   | [ ]     | [ ]    | [ ]    | [ ]    | Email format check       |
| Responsive layout | [ ]     | [ ]    | [ ]    | [ ]    | Stacking on mobile       |

#### Page: select_warehouse.html

| Test Case       | Desktop | Mobile | Tablet | Status | Notes                    |
| --------------- | ------- | ------ | ------ | ------ | ------------------------ |
| Header displays | [ ]     | [ ]    | [ ]    | [ ]    | Warehouse name, logo     |
| Warehouse list  | [ ]     | [ ]    | [ ]    | [ ]    | All items show           |
| Item styling    | [ ]     | [ ]    | [ ]    | [ ]    | Cards visible, spaced    |
| GPS button      | [ ]     | [ ]    | [ ]    | [ ]    | Location icon, clickable |
| Bottom nav      | [ ]     | [ ]    | [ ]    | [ ]    | 5 items visible, icons   |
| Scrolling       | [ ]     | [ ]    | [ ]    | [ ]    | List scrollable, smooth  |
| Dark mode       | [ ]     | [ ]    | [ ]    | [ ]    | All elements visible     |

#### Page: my_time_cards.html

| Test Case         | Desktop | Mobile | Tablet | Status | Notes                      |
| ----------------- | ------- | ------ | ------ | ------ | -------------------------- |
| Header displays   | [ ]     | [ ]    | [ ]    | [ ]    | Title "Time Cards"         |
| List renders      | [ ]     | [ ]    | [ ]    | [ ]    | Time cards shown           |
| Card styling      | [ ]     | [ ]    | [ ]    | [ ]    | Layout, colors, text       |
| Date/time display | [ ]     | [ ]    | [ ]    | [ ]    | Format readable            |
| Status badge      | [ ]     | [ ]    | [ ]    | [ ]    | Color, text visible        |
| Click action      | [ ]     | [ ]    | [ ]    | [ ]    | Navigate on tap/click      |
| Empty state       | [ ]     | [ ]    | [ ]    | [ ]    | If no cards, message shows |
| Dark mode         | [ ]     | [ ]    | [ ]    | [ ]    | Contrast OK                |

#### Page: my_time_card_detail.html

| Test Case         | Desktop | Mobile | Tablet | Status | Notes                     |
| ----------------- | ------- | ------ | ------ | ------ | ------------------------- |
| Header displays   | [ ]     | [ ]    | [ ]    | [ ]    | Detail card info          |
| Content layout    | [ ]     | [ ]    | [ ]    | [ ]    | Fields organized          |
| Date/time display | [ ]     | [ ]    | [ ]    | [ ]    | All info visible          |
| Button styling    | [ ]     | [ ]    | [ ]    | [ ]    | Edit/delete/close buttons |
| Back navigation   | [ ]     | [ ]    | [ ]    | [ ]    | Back button works         |
| Dark mode         | [ ]     | [ ]    | [ ]    | [ ]    | Text readable             |
| Scrolling         | [ ]     | [ ]    | [ ]    | [ ]    | Long content scrollable   |

#### Page: policies.html

| Test Case       | Desktop | Mobile | Tablet | Status | Notes                    |
| --------------- | ------- | ------ | ------ | ------ | ------------------------ |
| Header displays | [ ]     | [ ]    | [ ]    | [ ]    | Title "Policies"         |
| Content layout  | [ ]     | [ ]    | [ ]    | [ ]    | Text readable            |
| Text formatting | [ ]     | [ ]    | [ ]    | [ ]    | Headers, paragraphs      |
| Link styling    | [ ]     | [ ]    | [ ]    | [ ]    | Links underlined/colored |
| Scrolling       | [ ]     | [ ]    | [ ]    | [ ]    | Long document scrollable |
| Dark mode       | [ ]     | [ ]    | [ ]    | [ ]    | Text contrast OK         |
| Mobile padding  | -       | [ ]    | [ ]    | [ ]    | Safe margins on edges    |

#### Page: safety.html

| Test Case          | Desktop | Mobile | Tablet | Status | Notes                   |
| ------------------ | ------- | ------ | ------ | ------ | ----------------------- |
| Header displays    | [ ]     | [ ]    | [ ]    | [ ]    | Title "Safety"          |
| Content layout     | [ ]     | [ ]    | [ ]    | [ ]    | Text organized          |
| Headings hierarchy | [ ]     | [ ]    | [ ]    | [ ]    | H2, H3 clear            |
| Images display     | [ ]     | [ ]    | [ ]    | [ ]    | Safety diagrams visible |
| Links clickable    | [ ]     | [ ]    | [ ]    | [ ]    | External links work     |
| Dark mode          | [ ]     | [ ]    | [ ]    | [ ]    | Readable                |
| Print view         | [ ]     | [ ]    | [ ]    | [ ]    | Can print if needed     |

#### Page: select_customer_task.html

| Test Case           | Desktop | Mobile | Tablet | Status | Notes                 |
| ------------------- | ------- | ------ | ------ | ------ | --------------------- |
| Header displays     | [ ]     | [ ]    | [ ]    | [ ]    | Task selection title  |
| Dropdown menus      | [ ]     | [ ]    | [ ]    | [ ]    | Click to expand       |
| Options display     | [ ]     | [ ]    | [ ]    | [ ]    | List items visible    |
| Selection highlight | [ ]     | [ ]    | [ ]    | [ ]    | Selected item marked  |
| Form validation     | [ ]     | [ ]    | [ ]    | [ ]    | Required fields check |
| Submit button       | [ ]     | [ ]    | [ ]    | [ ]    | Clickable, styled     |
| Dark mode           | [ ]     | [ ]    | [ ]    | [ ]    | Text visible          |

#### Page: select_product.html

| Test Case         | Desktop | Mobile | Tablet | Status | Notes                 |
| ----------------- | ------- | ------ | ------ | ------ | --------------------- |
| Header displays   | [ ]     | [ ]    | [ ]    | [ ]    | "Products" title      |
| Product list      | [ ]     | [ ]    | [ ]    | [ ]    | Items shown           |
| Product cards     | [ ]     | [ ]    | [ ]    | [ ]    | Images, names, prices |
| Selection method  | [ ]     | [ ]    | [ ]    | [ ]    | Checkbox/radio works  |
| Sorting/filtering | [ ]     | [ ]    | [ ]    | [ ]    | If available, works   |
| Search function   | [ ]     | [ ]    | [ ]    | [ ]    | If available, works   |
| Dark mode         | [ ]     | [ ]    | [ ]    | [ ]    | All visible           |

#### Page: settings.html

| Test Case           | Desktop | Mobile | Tablet | Status | Notes               |
| ------------------- | ------- | ------ | ------ | ------ | ------------------- |
| Header displays     | [ ]     | [ ]    | [ ]    | [ ]    | "Settings" title    |
| Settings list       | [ ]     | [ ]    | [ ]    | [ ]    | Options shown       |
| Toggle switches     | [ ]     | [ ]    | [ ]    | [ ]    | Click to toggle     |
| Language selector   | [ ]     | [ ]    | [ ]    | [ ]    | Dropdown works      |
| Save/cancel buttons | [ ]     | [ ]    | [ ]    | [ ]    | Actions work        |
| Form validation     | [ ]     | [ ]    | [ ]    | [ ]    | Invalid input check |
| Dark mode           | [ ]     | [ ]    | [ ]    | [ ]    | Visible             |

#### Page: sick_leave.html

| Test Case       | Desktop | Mobile | Tablet | Status | Notes                  |
| --------------- | ------- | ------ | ------ | ------ | ---------------------- |
| Header displays | [ ]     | [ ]    | [ ]    | [ ]    | "Sick Leave" title     |
| Form layout     | [ ]     | [ ]    | [ ]    | [ ]    | Fields organized       |
| Date picker     | [ ]     | [ ]    | [ ]    | [ ]    | Clickable, usable      |
| Reason textarea | [ ]     | [ ]    | [ ]    | [ ]    | Multi-line input works |
| Submit button   | [ ]     | [ ]    | [ ]    | [ ]    | Styled, clickable      |
| Form validation | [ ]     | [ ]    | [ ]    | [ ]    | Required fields check  |
| Dark mode       | [ ]     | [ ]    | [ ]    | [ ]    | Form visible           |

#### Page: timer.html

| Test Case        | Desktop | Mobile | Tablet | Status | Notes                    |
| ---------------- | ------- | ------ | ------ | ------ | ------------------------ |
| Header displays  | [ ]     | [ ]    | [ ]    | [ ]    | "Timer" title            |
| Timer display    | [ ]     | [ ]    | [ ]    | [ ]    | Time shown clearly       |
| Start button     | [ ]     | [ ]    | [ ]    | [ ]    | Large, clickable         |
| Pause button     | [ ]     | [ ]    | [ ]    | [ ]    | Visible when running     |
| Reset button     | [ ]     | [ ]    | [ ]    | [ ]    | Stops/resets timer       |
| Timer accuracy   | [ ]     | [ ]    | [ ]    | [ ]    | Counts correctly         |
| Screen wake-lock | [ ]     | [ ]    | [ ]    | [ ]    | Screen stays on (mobile) |
| Dark mode        | [ ]     | [ ]    | [ ]    | [ ]    | Numbers readable         |

### Week 3: Device Testing (Jan 6-12)

#### Real Device Testing

| Device                 | Pages Tested | Landscape | Night Mode | Status | Notes          |
| ---------------------- | ------------ | --------- | ---------- | ------ | -------------- |
| iPhone 13+ (6.1")      | [ ]          | [ ]       | [ ]        | [ ]    | iOS 17+        |
| iPhone SE (4.7")       | [ ]          | [ ]       | [ ]        | [ ]    | Smaller screen |
| iPhone 12 Mini (5.4")  | [ ]          | [ ]       | [ ]        | [ ]    | Notch handling |
| iPad Air (10.9")       | [ ]          | [ ]       | [ ]        | [ ]    | Tablet layout  |
| Android Phone (6.1")   | [ ]          | [ ]       | [ ]        | [ ]    | Samsung/Pixel  |
| Android Tablet (10.1") | [ ]          | [ ]       | [ ]        | [ ]    | Landscape test |

#### Safe Area Testing (Notched Devices)

| Test                    | iPhone 13+ | iPhone X | iPad Pro | Status | Notes                    |
| ----------------------- | ---------- | -------- | -------- | ------ | ------------------------ |
| Portrait notch handling | [ ]        | [ ]      | -        | [ ]    | Content not under notch  |
| Landscape safe area     | [ ]        | [ ]      | [ ]      | [ ]    | Rotation works           |
| Bottom indicator (home) | [ ]        | [ ]      | [ ]      | [ ]    | Space for home indicator |
| Safe-area-inset applied | [ ]        | [ ]      | [ ]      | [ ]    | CSS padding working      |

### Week 4: Final Verification (Jan 13-19)

#### Cross-Browser Testing

| Browser     | Desktop | Mobile | Score    | Status |
| ----------- | ------- | ------ | -------- | ------ |
| Chrome 131  | [ ]     | [ ]    | \_\_/100 | [ ]    |
| Firefox 133 | [ ]     | -      | \_\_/100 | [ ]    |
| Safari 17   | [ ]     | [ ]    | \_\_/100 | [ ]    |
| Edge 131    | [ ]     | -      | \_\_/100 | [ ]    |

#### Performance Baseline

| Metric                 | Target  | Baseline | Current  | Pass |
| ---------------------- | ------- | -------- | -------- | ---- |
| Lighthouse Performance | 80+     | \_\_/100 | \_\_/100 | [ ]  |
| Lighthouse A11y        | 90+     | \_\_/100 | \_\_/100 | [ ]  |
| LCP                    | < 2.5s  | \_\_\_ms | \_\_\_ms | [ ]  |
| FID                    | < 100ms | \_\_\_ms | \_\_\_ms | [ ]  |
| CLS                    | < 0.1   | **\_**   | **\_**   | [ ]  |
| CSS Size               | < 50KB  | \_\_\_KB | \_\_\_KB | [ ]  |

#### Accessibility Compliance

| Check                  | All Pages | Status | Notes                      |
| ---------------------- | --------- | ------ | -------------------------- |
| Color contrast (4.5:1) | [ ]       | [ ]    | Check dark mode too        |
| Keyboard navigation    | [ ]       | [ ]    | Tab through all pages      |
| Screen reader (NVDA)   | [ ]       | [ ]    | Test 3 pages minimum       |
| Focus indicators       | [ ]       | [ ]    | Visible on all interactive |
| ARIA labels            | [ ]       | [ ]    | Icons have labels          |
| Form accessibility     | [ ]       | [ ]    | Labels associated          |
| Heading hierarchy      | [ ]       | [ ]    | Proper H1-H6 order         |
| Skip links             | [ ]       | [ ]    | If applicable              |

---

## Issue Tracking

### Critical Issues (Must Fix Before Release)

| ID  | Issue | Pages | Severity | Status | Fix Date |
| --- | ----- | ----- | -------- | ------ | -------- |
| C1  |       |       | Critical | [ ]    |          |
| C2  |       |       | Critical | [ ]    |          |
| C3  |       |       | Critical | [ ]    |          |

### High Priority Issues

| ID  | Issue | Pages | Severity | Status | Fix Date |
| --- | ----- | ----- | -------- | ------ | -------- |
| H1  |       |       | High     | [ ]    |          |
| H2  |       |       | High     | [ ]    |          |
| H3  |       |       | High     | [ ]    |          |

### Medium Priority Issues

| ID  | Issue | Pages | Severity | Status | Fix Date |
| --- | ----- | ----- | -------- | ------ | -------- |
| M1  |       |       | Medium   | [ ]    |          |
| M2  |       |       | Medium   | [ ]    |          |

### Low Priority Issues

| ID  | Issue | Pages | Severity | Status | Fix Date |
| --- | ----- | ----- | -------- | ------ | -------- |
| L1  |       |       | Low      | [ ]    |          |
| L2  |       |       | Low      | [ ]    |          |

---

## Phase 3 Sign-Off

### Approval Checklist

- [ ] All 12 pages tested (Desktop, Mobile, Tablet)
- [ ] Dark mode verified on all pages
- [ ] Responsive breakpoints working (375px, 768px, 1024px)
- [ ] CSS import structure verified
- [ ] All critical issues fixed
- [ ] All high priority issues fixed
- [ ] Accessibility score ≥ 90/100
- [ ] Performance metrics meet targets
- [ ] Browser compatibility verified (4+ browsers)
- [ ] Real device testing completed (3+ devices)
- [ ] Testing report created
- [ ] Team review completed

### Sign-Off Details

**Testing Lead:** ******\_\_\_******  
**Date:** ******\_\_\_******  
**Notes:** ******\_\_\_******

**Manager Approval:** ******\_\_\_******  
**Date:** ******\_\_\_******

---

**Document Version:** 1.0.0  
**Last Updated:** December 25, 2025
