// Sample product data
const products = [
  { id: 1, name: 'Buldak Cheese', code: '3061U', image: 'assets/images/products/product-01.jpg' },
  { id: 2, name: 'Buldak Hot Chicken', code: '3096U', image: 'assets/images/products/product-02.jpg' },
  { id: 3, name: 'Buldak Musta', code: '3097U', image: 'assets/images/products/product-03.jpg' },
  { id: 4, name: 'Buldak Carbonara', code: '3060U', image: 'assets/images/products/product-04.jpg' }
];

let taskStartTime = Date.now();
let shiftStartTime = Date.now(); // In real app, this would be from previous page

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const taskTimer = document.getElementById('taskTimer');
const shiftTimer = document.getElementById('shiftTimer');
const productGrid = document.getElementById('productGrid');

// Toggle sidebar
function toggleSidebar() {
  sidebar.classList.toggle('open');
  sidebarOverlay.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Render product grid
function renderProducts() {
  productGrid.innerHTML = products.map(product => `
        <a href="#" class="product-item" data-product-id="${product.id}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <p class="product-name">${product.name}</p>
          <p class="product-code">${product.code}</p>
        </a>
      `).join('');
}

// Format timer display
function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Get elapsed minutes
function getElapsedMinutes(startTime) {
  return Math.floor((Date.now() - startTime) / 60000);
}

// Update break button state - No longer used (moved to FAB menu)
function updateBreakButtonState() {
  // Empty - functionality moved to FAB menu
}

// Helper function for testing - use in console like: setShiftMinutes(90)
// Expose shiftStartTime for FAB menu script
window.shiftStartTime = shiftStartTime;
window.setShiftMinutes = function (minutes) {
  shiftStartTime = Date.now() - (minutes * 60 * 1000);
  window.shiftStartTime = shiftStartTime;
  console.log(`Shift time set to ${minutes} minutes. Current shift elapsed:`, getElapsedMinutes(shiftStartTime));
}

// Helper to set task time - use like: setTaskMinutes(45)
// This sets the TASK time, which shows on the timer
window.setTaskMinutes = function (minutes) {
  taskStartTime = Date.now() - (minutes * 60 * 1000);
  console.log(`Task time set to ${minutes} minutes. Current task elapsed:`, getElapsedMinutes(taskStartTime));
}

// Update timers
function updateTimers() {
  const taskElapsed = Date.now() - taskStartTime;
  const shiftElapsed = Date.now() - shiftStartTime;

  taskTimer.textContent = formatTime(taskElapsed);
  shiftTimer.textContent = formatTime(shiftElapsed);

  // Update detail timer if it exists and is visible
  const detailTimer = document.getElementById('detailTimer');
  if (detailTimer) {
    detailTimer.textContent = formatTime(taskElapsed);
  }

  updateBreakButtonState();
}

// Swipe gesture handler for slider buttons
function addSwipeSlider(element, callback, isDisabledCheck = null) {
  const thumb = element.querySelector('[class*="-thumb"]');
  const track = element;
  let isActive = false;
  let startX = 0;

  track.addEventListener('mousedown', handleStart);
  track.addEventListener('touchstart', handleStart);

  function handleStart(e) {
    if (isDisabledCheck && isDisabledCheck()) {
      return;
    }
    isActive = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
  }

  function handleMove(e) {
    if (!isActive) return;

    const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    const trackWidth = track.offsetWidth;
    const thumbWidth = thumb.offsetWidth;
    const maxTranslate = trackWidth - thumbWidth;

    // Constrain between 0 and max
    const translate = Math.max(0, Math.min(diff, maxTranslate));
    thumb.style.transform = `translateX(${translate}px)`;
  }

  function handleEnd(e) {
    if (!isActive) return;
    isActive = false;

    const currentTransform = thumb.style.transform;
    const translateValue = currentTransform ? parseInt(currentTransform.match(/\d+/)[0]) : 0;
    const trackWidth = track.offsetWidth;
    const thumbWidth = thumb.offsetWidth;
    const maxTranslate = trackWidth - thumbWidth;

    // If swiped more than 50% of the way
    if (translateValue > maxTranslate * 0.5) {
      // Complete the swipe
      thumb.style.transform = `translateX(${maxTranslate}px)`;
      thumb.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

      setTimeout(() => {
        callback();
      }, 300);
    } else {
      // Reset
      thumb.style.transform = 'translateX(0px)';
      thumb.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchend', handleEnd);
  }
}

// Swipe slider code removed - buttons moved to FAB menu
// View routing (SPA)
const productGridView = document.getElementById('productGridView');
const timerDetailView = document.getElementById('timerDetailView');
const timerDetailContent = document.getElementById('timerDetailContent');

// Show product grid view
function showProductGridView() {
  productGridView.style.display = 'block';
  timerDetailView.style.display = 'none';
}

// Show timer detail view for a product
function showTimerDetailView(productId) {
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;

  // Update product info
  document.getElementById('detailProductImage').src = product.image;
  document.getElementById('detailProductName').textContent = product.name;
  document.getElementById('detailProductCode').textContent = `Mã: ${product.code}`;

  // Update performance (sample data)
  const completedBoxes = Math.floor(Math.random() * 10) + 1;
  document.getElementById('completedBoxes').textContent = completedBoxes;

  // Update performance value (sample)
  const performanceValue = Math.floor(Math.random() * (450 - 300) + 300);
  document.getElementById('performanceValue').textContent = performanceValue;

  // Helper function to determine status class
  function getStatusClass(value) {
    if (value < 350) return 'status-danger';
    if (value < 400) return 'status-warning';
    return 'status-safe';
  }

  // Helper function to get status text
  function getStatusText(value) {
    if (value < 350) return 'Nguy hiểm';
    if (value < 400) return 'Giảm';
    return 'An toàn';
  }

  // Helper function to get status color
  function getStatusColor(value) {
    if (value < 350) return '#ef4444';
    if (value < 400) return '#f59e0b';
    return '#10b981';
  }

  const statusClass = getStatusClass(performanceValue);
  const statusColor = getStatusColor(performanceValue);

  // Update status bar and text based on performance
  const statusBarFill = document.getElementById('statusBarFill');
  const performanceDisplay = document.querySelector('.performance-display');
  const performanceBgWrapper = document.querySelector('.performance-bg-wrapper');
  const detailTimer = document.getElementById('detailTimer');
  const performanceValueElement = document.getElementById('performanceValue');
  const completedBoxesElement = document.getElementById('completedBoxes');

  // Get target value element (the one showing 400)
  const targetValueElements = document.querySelectorAll('.stat-value');
  let targetElement = null;
  if (targetValueElements.length > 1) {
    targetElement = targetValueElements[1]; // Second stat-value is the target
  }

  // Remove all status classes
  performanceDisplay.classList.remove('status-danger', 'status-warning', 'status-safe');
  performanceBgWrapper.classList.remove('status-danger', 'status-warning', 'status-safe');
  detailTimer.classList.remove('status-danger', 'status-warning', 'status-safe');
  performanceValueElement.classList.remove('status-danger', 'status-warning', 'status-safe');
  completedBoxesElement.classList.remove('status-danger', 'status-warning', 'status-safe');
  if (targetElement) targetElement.classList.remove('status-danger', 'status-warning', 'status-safe');

  // Add status class to all elements
  performanceDisplay.classList.add(statusClass);
  performanceBgWrapper.classList.add(statusClass);
  detailTimer.classList.add(statusClass);
  performanceValueElement.classList.add(statusClass);
  completedBoxesElement.classList.add(statusClass);
  if (targetElement) targetElement.classList.add(statusClass);

  // Update status bar
  statusBarFill.style.width = (performanceValue / 450 * 100) + '%';
  statusBarFill.style.backgroundColor = statusColor;

  productGridView.style.display = 'none';
  timerDetailView.style.display = 'block';
}

// Modal handlers
const completionModal = document.getElementById('completionModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const completeBtn = document.getElementById('completeBtn');
const switchProductBtn = document.getElementById('switchProductBtn');
const addBoxBtn = document.getElementById('addBoxBtn');

// Open completion modal
completeBtn.addEventListener('click', () => {
  completionModal.style.display = 'flex';
});

// Close modal
function closeModal() {
  completionModal.style.display = 'none';
}

modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Switch product (back to grid)
switchProductBtn.addEventListener('click', showProductGridView);

// Add box button
addBoxBtn.addEventListener('click', () => {
  const completedBoxes = document.getElementById('completedBoxes');
  const current = parseInt(completedBoxes.textContent);
  completedBoxes.textContent = current + 1;
  console.log('Box added. Total:', current + 1);
});

// Product selection - Switch to timer detail view
productGrid.addEventListener('click', (e) => {
  const productItem = e.target.closest('.product-item');
  if (productItem) {
    e.preventDefault();
    const productId = productItem.dataset.productId;
    showTimerDetailView(productId);
  }
});

// Initialize
renderProducts();
updateTimers();
setInterval(updateTimers, 1000);
