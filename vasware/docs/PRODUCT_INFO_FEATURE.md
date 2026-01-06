# Tính Năng Hiển Thị Thông Tin Sản Phẩm và Đồng Hồ Tính Thời Gian

## Tổng Quan

Đã thêm một khu vực hiển thị thông tin toàn diện trên trang timer.html để theo dõi thông tin kho, khách hàng, task và sản phẩm đang làm với đồng hồ tính thời gian tích lũy.

## Các Thành Phần Mới

### 1. Khu Vực Thông Tin (Info Cards)

- **Kho (Warehouse)**: Hiển thị mã kho với icon warehouse
- **Khách hàng (Customer)**: Hiển thị tên khách hàng với icon person_check
- **Task**: Hiển thị loại task đang làm với icon task_alt

Mỗi card có:

- Icon được tô màu khác nhau
- Label (tên thông tin)
- Giá trị (dữ liệu thực tế)
- Responsive layout (3 cột trên desktop, 2 cột trên tablet, 1 cột trên mobile)

### 2. Khu Vực Hiển Thị Sản Phẩm (Product Display)

Bao gồm:

- **Hình ảnh sản phẩm**: 100x100px (có thể tùy chỉnh)
- **Tên sản phẩm**: Hiển thị tên sản phẩm đang làm
- **Mã sản phẩm**: Mã định danh sản phẩm (font monospace)
- **Đồng hồ thời gian làm việc**:
  - Định dạng HH:MM:SS
  - Tự động tính toán thời gian
  - Lưu trữ vào localStorage để giữ dữ liệu khi tải lại trang

## Các Hàm JavaScript

### `startProductTimer()`

Bắt đầu đếm thời gian cho sản phẩm hiện tại

```javascript
startProductTimer();
```

### `stopProductTimer()`

Dừng đếm thời gian nhưng giữ lại dữ liệu

```javascript
stopProductTimer();
```

### `resetProductTimer()`

Đặt lại đồng hồ về 00:00:00

```javascript
resetProductTimer();
```

### `updateProductInfo(warehouse, customer, task, productName, productCode, imageSrc)`

Cập nhật toàn bộ thông tin sản phẩm và reset timer

```javascript
updateProductInfo(
  "A1", // warehouse
  "VN Corp", // customer
  "Assembly", // task
  "Valve Assembly", // productName
  "VAL-2024-001", // productCode
  "assets/images/product-01.jpg" // imageSrc
);
```

## Các File Đã Thêm/Chỉnh Sửa

### File Mới:

- `css/components/product-info.css` - Toàn bộ CSS cho khu vực thông tin sản phẩm

### File Đã Chỉnh Sửa:

- `timer.html` - Thêm HTML markup cho khu vực thông tin sản phẩm
- `js/main.js` - Thêm các hàm quản lý timer sản phẩm
- Thêm link CSS stylesheet mới

## Tính Năng Lưu Trữ (Persistent Storage)

Đồng hồ tính thời gian sử dụng localStorage để:

- Lưu giữ thời gian làm việc khi tải lại trang
- Tính toán thời gian đã trôi qua ngay cả khi ứng dụng bị đóng
- Đồng bộ hóa tự động mỗi 5 giây

## Styling và Dark Mode

- Hỗ trợ đầy đủ Light Mode và Dark Mode
- Responsive design cho tất cả kích thước màn hình
- Sử dụng design tokens và CSS variables
- Hiệu ứng hover trên các info cards
- Động cơ hoạt động mượt mà với transitions

## Ví Dụ Sử Dụng

### Thay đổi sản phẩm

```javascript
// Khi người dùng chọn sản phẩm mới
document
  .querySelector(".btn-change-product")
  .addEventListener("click", function () {
    updateProductInfo(
      "B2",
      "ACME Industries",
      "Packaging",
      "Polymer Case",
      "POLY-2024-042",
      "assets/images/product-02.jpg"
    );
  });
```

### Kiểm soát timer

```javascript
// Pause khi người dùng nhấn nút break
document.querySelector(".break-btn").addEventListener("click", function () {
  stopProductTimer();
  showToast("Timer đã tạm dừng", "info");
});

// Resume sau break
document.querySelector(".resume-btn").addEventListener("click", function () {
  startProductTimer();
  showToast("Timer đã tiếp tục", "success");
});
```

## Ghi Chú Quan Trọng

1. **Định dạng thời gian**: Sử dụng HH:MM:SS (ví dụ: 01:23:45)
2. **Hình ảnh**: Đảm bảo các tệp ảnh tồn tại trong `assets/images/`
3. **Responsive**: Layout tự động điều chỉnh cho thiết bị mobile
4. **Performance**: Timer sử dụng setInterval và được tối ưu hóa
5. **Persistence**: Dữ liệu tự động lưu mỗi 5 giây

## CSS Classes Chính

```
.current-product-info      - Container chính
.info-grid                 - Grid hiển thị Kho/Khách hàng/Task
.info-card                 - Card đơn lẻ
.product-display           - Container hiển thị sản phẩm
.product-image-container   - Container ảnh sản phẩm
.product-details           - Chi tiết sản phẩm
.timer-working            - Container đồng hồ
.timer-working-time       - Giá trị thời gian
```
