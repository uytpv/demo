# 📱 Hướng Dẫn Sử Dụng - Tính Năng Thông Tin Sản Phẩm và Đồng Hồ

## 🎯 Mục Đích

Thêm một khu vực hiển thị toàn diện trên trang timer (đồng hồ) để theo dõi:

- ✅ Kho (Warehouse)
- ✅ Khách hàng (Customer)
- ✅ Task (Công việc đang làm)
- ✅ Sản phẩm (Product Name)
- ✅ Mã sản phẩm (Product Code)
- ✅ Hình ảnh sản phẩm (Product Image)
- ✅ Đồng hồ tính thời gian làm việc (Working Time Timer)

## 📂 Các File Được Thêm/Sửa

### File Mới:

```
css/components/product-info.css     ← CSS mới cho khu vực thông tin sản phẩm
demo-product-info.html              ← File demo để thử nghiệm tính năng
docs/PRODUCT_INFO_FEATURE.md        ← Tài liệu chi tiết về tính năng
```

### File Đã Chỉnh Sửa:

```
timer.html                          ← Thêm HTML markup cho khu vực thông tin
js/main.js                          ← Thêm hàm quản lý timer và cập nhật info
```

## 🚀 Các Hàm JavaScript Có Sẵn

### 1. **startProductTimer()**

Bắt đầu đếm thời gian làm việc cho sản phẩm

```javascript
// Gọi hàm này khi bắt đầu làm việc
startProductTimer();
```

**Tác dụng:**

- Bắt đầu tính đếm thời gian
- Load dữ liệu từ localStorage nếu có
- Cập nhật hiển thị mỗi giây
- Lưu dữ liệu mỗi 5 giây

---

### 2. **stopProductTimer()**

Tạm dừng đếm thời gian nhưng giữ lại dữ liệu

```javascript
// Gọi khi người dùng nhấn nút Break
stopProductTimer();
```

**Tác dụng:**

- Dừng đếm thời gian
- Giữ nguyên giá trị hiện tại
- Lưu dữ liệu vào localStorage
- Có thể tiếp tục sau này

---

### 3. **resetProductTimer()**

Đặt lại đồng hồ về 00:00:00

```javascript
// Gọi khi đổi sản phẩm
resetProductTimer();
```

**Tác dụng:**

- Dừng timer nếu đang chạy
- Đặt lại thời gian về 0
- Xóa dữ liệu localStorage
- Cập nhật hiển thị

---

### 4. **updateProductInfo(warehouse, customer, task, productName, productCode, imageSrc)**

Cập nhật toàn bộ thông tin sản phẩm

```javascript
updateProductInfo(
  "A1", // Mã kho
  "VN Corp", // Tên khách hàng
  "Assembly", // Loại task
  "Valve Assembly", // Tên sản phẩm
  "VAL-2024-001", // Mã sản phẩm
  "assets/images/product-01.jpg" // Đường dẫn ảnh
);
```

**Tác dụng:**

- Cập nhật tất cả thông tin hiển thị
- Reset timer lại từ đầu
- Bắt đầu timer mới cho sản phẩm
- Cập nhật ảnh sản phẩm

---

## 💡 Ví Dụ Thực Tế

### Ví Dụ 1: Thay Đổi Sản Phẩm

```html
<button onclick="changeProduct()">Đổi Sản Phẩm</button>

<script>
  function changeProduct() {
    updateProductInfo(
      "B2", // Kho mới
      "ACME Industries", // Khách hàng mới
      "Packaging", // Task mới
      "Polymer Case", // Sản phẩm mới
      "POLY-2024-042", // Mã mới
      "assets/images/product-02.jpg" // Ảnh mới
    );
  }
</script>
```

### Ví Dụ 2: Tạm Dừng Công Việc (Break)

```html
<button onclick="takeBreak()">☕ Break (15 phút)</button>
<button onclick="resumeWork()">▶️ Tiếp Tục</button>

<script>
  function takeBreak() {
    stopProductTimer();
    console.log("Tạm dừng, hãy nghỉ ngơi!");
  }

  function resumeWork() {
    startProductTimer();
    console.log("Tiếp tục làm việc!");
  }
</script>
```

### Ví Dụ 3: Kết Thúc Ca Làm Việc

```html
<button onclick="endShift()">🚪 Kết Thúc Ca</button>

<script>
  function endShift() {
    stopProductTimer();

    // Lấy thời gian cuối cùng
    const totalTime = localStorage.getItem("productWorkingTime");

    // Có thể gửi dữ liệu lên server
    fetch("/api/end-shift", {
      method: "POST",
      body: JSON.stringify({
        totalWorkTime: totalTime,
        product: "Valve Assembly",
      }),
    });

    // Reset cho ca tiếp theo
    resetProductTimer();
  }
</script>
```

---

## 📊 Giao Diện

### Layout trên Desktop:

```
┌─────────────────────────────────────────┐
│ ⚙️ Kho: A1  ✓ Khách: VN Corp  ✅ Task: Assembly │
├─────────────────────────────────────────┤
│  [Hình]  │  Sản phẩm: Valve Assembly   │
│          │  Mã: VAL-2024-001            │
│          │  Thời gian: 00:15:32         │
└─────────────────────────────────────────┘
```

### Layout trên Mobile:

```
┌──────────────────┐
│ ⚙️ Kho: A1       │
│ ✓ Khách: VN Corp│
│ ✅ Task: Assem.  │
├──────────────────┤
│   [Hình Sản Phẩm]│
│ Valve Assembly   │
│ VAL-2024-001     │
│ Thời gian: 00:15│
└──────────────────┘
```

---

## 🎨 Tùy Chỉnh CSS

### Đổi Màu Sắc:

```css
/* Thay đổi màu chủ đạo */
:root {
  --primary: #0088ff; /* Xanh dương */
}

/* Hoặc tùy chỉnh trực tiếp */
.info-icon.warehouse {
  background-color: rgba(255, 100, 100, 0.1); /* Thành đỏ */
  color: #ff6464;
}
```

### Thay Đổi Kích Thước Hình Ảnh:

```css
.product-image-container {
  width: 150px; /* Từ 100px */
  height: 150px; /* Từ 100px */
}
```

### Dark Mode:

```css
html.dark .current-product-info {
  background-color: #1a2632;
  border-color: #444;
}
```

---

## 💾 Lưu Trữ Dữ Liệu

### Dữ Liệu Được Lưu trong localStorage:

```javascript
localStorage.getItem("productWorkingTime"); // Tổng thời gian (giây)
localStorage.getItem("productTimerStartTime"); // Timestamp bắt đầu
```

### Kiểm Tra Dữ Liệu:

```javascript
// Mở Console (F12) và chạy:
console.log(
  "Thời gian làm việc:",
  localStorage.getItem("productWorkingTime"),
  "giây"
);
console.log(
  "Bắt đầu lúc:",
  new Date(parseInt(localStorage.getItem("productTimerStartTime")))
);
```

### Xóa Dữ Liệu:

```javascript
localStorage.removeItem("productWorkingTime");
localStorage.removeItem("productTimerStartTime");
```

---

## 🔄 Auto-Start Khi Mở Trang

Khi người dùng mở timer.html:

1. ✅ Tự động load dữ liệu từ localStorage
2. ✅ Tự động bắt đầu đếm thời gian
3. ✅ Hiển thị thời gian đã làm trước đó

Không cần bấm nút "Bắt Đầu"!

---

## ⚙️ Tích Hợp Với Các Nút Hiện Có

### Nút "Change Product":

```javascript
document
  .querySelector('[title="Change Product"]')
  .addEventListener("click", function () {
    // Hiển thị modal để chọn sản phẩm
    // Sau đó gọi updateProductInfo()
    updateProductInfo(
      warehouse,
      customer,
      task,
      productName,
      productCode,
      imageSrc
    );
  });
```

### Nút "Break":

```javascript
document
  .querySelector('[title="Break or Lunch"]')
  .addEventListener("click", function () {
    stopProductTimer();
    showToast("Timer tạm dừng", "info");
  });
```

### Nút "End Shift":

```javascript
document
  .querySelector('[title="End Shift"]')
  .addEventListener("click", function () {
    stopProductTimer();
    // Gửi dữ liệu và reset
    resetProductTimer();
  });
```

---

## 🧪 Thử Nghiệm

1. **Mở file demo:**

   - Mở `demo-product-info.html` trong trình duyệt
   - Bấm các nút để thử các hàm

2. **Thử trên timer.html:**
   - Mở `timer.html`
   - F12 để mở Console
   - Chạy các lệnh:
     ```javascript
     startProductTimer();
     stopProductTimer();
     resetProductTimer();
     updateProductInfo(
       "A1",
       "VN Corp",
       "Assembly",
       "Valve",
       "VAL-001",
       "assets/images/product-01.jpg"
     );
     ```

---

## 📋 Checklist Kiểm Tra

- ✅ Khu vực thông tin kho/khách hàng/task hiển thị đúng
- ✅ Hình ảnh sản phẩm hiển thị
- ✅ Tên và mã sản phẩm hiển thị
- ✅ Đồng hồ bắt đầu đếm khi mở trang
- ✅ Đồng hồ lưu dữ liệu vào localStorage
- ✅ Thay đổi sản phẩm reset timer
- ✅ Dark mode hiển thị đúng
- ✅ Responsive trên mobile

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề:

1. **Timer không chạy:**

   - Kiểm tra console có lỗi gì không
   - Đảm bảo file main.js được load

2. **Ảnh không hiển thị:**

   - Kiểm tra đường dẫn ảnh có đúng không
   - Đảm bảo tệp ảnh tồn tại

3. **Dữ liệu bị xóa:**
   - Kiểm tra localStorage trong DevTools
   - Thử Clear site data và reload

---

**Chúc bạn sử dụng vui vẻ! 🎉**
