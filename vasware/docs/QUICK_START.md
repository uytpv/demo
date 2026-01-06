# ⚡ Quick Start - 5 Phút để Bắt Đầu

## 🎯 Mục Đích

Hướng dẫn nhanh để sử dụng tính năng thông tin sản phẩm và đồng hồ tính thời gian.

---

## 5️⃣ Bước Cơ Bản

### 1️⃣ Mở Timer Page (30 giây)

```
→ Mở file: timer.html
→ Xem đồng hồ tự động chạy
→ Thông tin sản phẩm hiển thị ở trên
```

**Kết quả:**

```
┌─────────────────────────────────────┐
│ ⚙️ Kho: A1  ✓ Khách: VN Corp  ✅ Assm│
│ [Hình] | Valve Assembly              │
│        | VAL-2024-001                │
│        | Thời gian: 00:15:32         │
└─────────────────────────────────────┘
```

---

### 2️⃣ Xem Demo (1 phút)

```
→ Mở file: demo-product-info.html
→ Bấm nút "Bắt Đầu"
→ Xem timer chạy lên
→ Bấm "Reset"
```

**Hữu ích để:**

- Hiểu cách hoạt động
- Test các hàm
- Kiểm tra localStorage

---

### 3️⃣ Thay Đổi Sản Phẩm (1 phút)

Mở console (F12) trên timer.html:

```javascript
updateProductInfo(
  "B2", // Kho mới
  "ACME Industries", // Khách hàng mới
  "Packaging", // Task mới
  "Polymer Case", // Sản phẩm mới
  "POLY-2024-042", // Mã mới
  "assets/images/product-02.jpg" // Ảnh mới
);
```

**Kết quả:**

- ✅ Thông tin cập nhật
- ✅ Timer reset về 0:00:00
- ✅ Timer bắt đầu chạy
- ✅ Dữ liệu lưu vào localStorage

---

### 4️⃣ Kiểm Soát Timer (30 giây)

Trên console:

```javascript
// Bắt đầu
startProductTimer();

// Tạm dừng (nhưng giữ dữ liệu)
stopProductTimer();

// Tiếp tục
startProductTimer();

// Reset về 0
resetProductTimer();
```

---

### 5️⃣ Kiểm Tra localStorage (30 giây)

```javascript
// Xem thời gian làm việc (giây)
localStorage.getItem("productWorkingTime");
// Output: "925" (tức 15:25)

// Xem khi bắt đầu
localStorage.getItem("productTimerStartTime");
// Output: "1735371234567" (timestamp)
```

---

## 📖 Ví Dụ Thực Tế

### Ví Dụ 1: Nhấn Nút "Đổi Sản Phẩm"

**HTML:**

```html
<button onclick="changeProduct()">🔄 Đổi Sản Phẩm</button>

<script>
  function changeProduct() {
    // Lấy thông tin sản phẩm mới (từ modal/form)
    const newProduct = {
      warehouse: "B2",
      customer: "ACME Industries",
      task: "Packaging",
      name: "Polymer Case",
      code: "POLY-2024-042",
      image: "assets/images/product-02.jpg",
    };

    // Cập nhật
    updateProductInfo(
      newProduct.warehouse,
      newProduct.customer,
      newProduct.task,
      newProduct.name,
      newProduct.code,
      newProduct.image
    );

    // Thông báo
    alert("✓ Đã cập nhật sản phẩm!");
  }
</script>
```

---

### Ví Dụ 2: Nút "Break"

**HTML:**

```html
<button onclick="takeBreak()">☕ Break (15 phút)</button>
<button onclick="resumeWork()">▶️ Tiếp Tục Làm</button>

<script>
  function takeBreak() {
    stopProductTimer();
    console.log("⏸️ Timer tạm dừng");
    console.log(
      "🕐 Thời gian làm việc:",
      localStorage.getItem("productWorkingTime")
    );
  }

  function resumeWork() {
    startProductTimer();
    console.log("▶️ Timer tiếp tục");
  }
</script>
```

---

### Ví Dụ 3: Kết Thúc Ca Làm Việc

**HTML:**

```html
<button onclick="endShift()">🚪 Kết Thúc Ca</button>

<script>
  function endShift() {
    // Dừng timer
    stopProductTimer();

    // Lấy tổng thời gian
    const totalSeconds = localStorage.getItem("productWorkingTime");
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Hiển thị
    console.log(`✓ Ca làm việc kết thúc`);
    console.log(`📊 Tổng thời gian: ${hours}h ${minutes}m`);

    // Gửi dữ liệu lên server (optional)
    fetch("/api/end-shift", {
      method: "POST",
      body: JSON.stringify({
        totalWorkTime: totalSeconds,
        product: document.querySelector(".product-name").textContent,
      }),
    });

    // Reset cho ca tiếp theo
    resetProductTimer();
  }
</script>
```

---

## 🎨 Tùy Chỉnh Màu Sắc

**File:** `css/components/product-info.css`

### Đổi Màu Chủ Đạo

```css
:root {
  --primary: #0088ff; /* Từ xanh dương */
}

/* Thành màu đỏ */
:root {
  --primary: #ff4444;
}
```

### Đổi Màu Info Icons

```css
/* Warehouse - Từ xanh sang tím */
.info-icon.warehouse {
  background-color: rgba(147, 51, 234, 0.1);
  color: #9333ea;
}

/* Customer - Từ xanh lá sang cam */
.info-icon.customer {
  background-color: rgba(251, 146, 60, 0.1);
  color: #fb923c;
}

/* Task - Từ vàng sang hồng */
.info-icon.task {
  background-color: rgba(236, 72, 153, 0.1);
  color: #ec4899;
}
```

---

## 📐 Thay Đổi Kích Thước

### Ảnh Sản Phẩm

```css
.product-image-container {
  width: 150px; /* Từ 100px */
  height: 150px; /* Từ 100px */
}
```

### Spacing

```css
.current-product-info {
  padding: 2rem; /* Từ 1.5rem */
  gap: 2rem; /* Từ 1.5rem */
}
```

### Font Size

```css
.timer-working-time {
  font-size: 1.5rem; /* Từ 1.25rem */
  font-weight: 800; /* Từ 700 */
}
```

---

## 🔄 Flow Diagram

```
┌─ Mở timer.html ──┐
│                  ↓
│         ┌─────────────────┐
│         │ Auto-start timer │  (tự động)
│         └────────┬────────┘
│                  ↓
│         ┌─────────────────┐
│         │ Load from storage│  (nếu có dữ liệu)
│         └────────┬────────┘
│                  ↓
│         ┌─────────────────┐
│         │ Display elapsed │
│         │ time (HH:MM:SS) │
│         └────────┬────────┘
│                  ↓
│         ┌─────────────────┐
│         │ Timer chạy & lưu│  (mỗi 5 giây)
│         │ vào localStorage│
│         └────────┬────────┘
│                  ↓
│    Nhấn nút / Gọi hàm?
│         /    |    \
│        /     |     \
│   Change   Stop   Reset
│   Product  Timer  Timer
│     │        │      │
│     ↓        ↓      ↓
│   Update  Pause   Clear
│   All     Data    All
│  Reset    Save    Reset
│  Timer    Data    Data
└─────────────────────
```

---

## 💾 Auto-Save Behavior

```
Timer Running?
    ├─ YES:
    │   ├─ Increment seconds every 1000ms
    │   ├─ Update UI display
    │   └─ Save to localStorage every 5000ms
    │
    └─ NO:
        └─ Timer stopped
```

**Lợi ích:**

- ✅ Không mất dữ liệu khi reload
- ✅ Không drain battery (mỗi 5 giây)
- ✅ Tính toán chính xác ngay cả khi app đóng

---

## 🧪 Test Checklist

### Visual Check

- ✅ Thông tin hiển thị đúng
- ✅ Icon màu sắc đúng
- ✅ Ảnh sản phẩm hiển thị
- ✅ Timer chạy mượt
- ✅ Dark mode hoạt động

### Functional Check

```javascript
// 1. Timer chạy
startProductTimer();
// → Xem số giây tăng dần

// 2. Thay sản phẩm
updateProductInfo(
  "B2",
  "ACME",
  "Pack",
  "Case",
  "POLY-42",
  "assets/images/product-02.jpg"
);
// → Thông tin cập nhật, timer reset

// 3. localStorage
localStorage.getItem("productWorkingTime");
// → Có giá trị (không null)

// 4. Reload trang
// → Timer tiếp tục từ nơi nó dừng
```

---

## 🆘 Khi Có Lỗi

### Timer không chạy?

```javascript
// Check xem element có tồn tại không
document.querySelector(".timer-working-time");
// Nếu null → thêm element vào HTML

// Check main.js có load không
console.log(typeof startProductTimer);
// Nếu 'undefined' → check import
```

### Ảnh không hiển thị?

```javascript
// Check đường dẫn
const img = document.querySelector(".product-image");
console.log(img.src);
// → Kiểm tra đường dẫn có đúng không
// → File có tồn tại không
```

### Dữ liệu bị mất?

```javascript
// Clear site data
localStorage.clear();

// Hoặc xóa specific keys
localStorage.removeItem("productWorkingTime");
localStorage.removeItem("productTimerStartTime");

// Reload trang
location.reload();
```

---

## 📚 Các Tài Liệu Liên Quan

| Tài Liệu                                           | Mục Đích               |
| -------------------------------------------------- | ---------------------- |
| [INDEX.md](INDEX.md)                               | Điều hướng tất cả docs |
| [USAGE_GUIDE.md](USAGE_GUIDE.md)                   | Hướng dẫn chi tiết     |
| [PRODUCT_INFO_FEATURE.md](PRODUCT_INFO_FEATURE.md) | Tài liệu kỹ thuật      |
| [UPDATE_SUMMARY.md](UPDATE_SUMMARY.md)             | Tóm tắt cập nhật       |

---

## 🎉 Tiếp Theo

**Sau 5 phút đó:**

1. ✅ Bạn đã hiểu cách hoạt động
2. ✅ Bạn biết cách thay sản phẩm
3. ✅ Bạn biết cách kiểm soát timer
4. ✅ Bạn có thể customize nếu cần

**Nếu cần chi tiết hơn:**
→ Đọc [USAGE_GUIDE.md](USAGE_GUIDE.md)

**Nếu cần kỹ thuật hơn:**
→ Đọc [PRODUCT_INFO_FEATURE.md](PRODUCT_INFO_FEATURE.md)

---

## 🚀 Let's Go!

**Bây giờ:**

1. Mở `timer.html`
2. Mở Developer Tools (F12)
3. Chạy: `updateProductInfo('B2', 'ACME', 'Pack', 'Case', 'POLY-42', 'assets/images/product-02.jpg')`
4. Xem thay đổi xảy ra

**Enjoy! 🎊**

---

**Version:** 1.0
**Last Updated:** 2024
**Status:** Ready to Use ✅
