/**
 * Main JavaScript for DTH Mobile App
 * Mobile-first responsive design
 */

(function () {
    'use strict';

    // ================================
    // Device Detection
    // ================================
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    // ================================
    // Theme Management
    // ================================
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    window.toggleDarkMode = function () {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDark);
    };

    // ================================
    // Mobile Navigation
    // ================================
    window.openBottomSheet = function (id) {
        const sheet = document.getElementById(id);
        if (sheet) {
            sheet.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeBottomSheet = function (id) {
        const sheet = document.getElementById(id);
        if (sheet) {
            sheet.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    window.openModal = function (id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function (id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Close modal/bottom sheet on outside click
    document.addEventListener('click', function (event) {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ================================
    // Tab Navigation
    // ================================
    window.switchTab = function (tabName) {
        // Hide all tab contents
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all tabs
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Show selected tab
        const selectedContent = document.getElementById(tabName);
        if (selectedContent) {
            selectedContent.classList.add('active');
        }

        // Add active class to clicked tab
        event.target.classList.add('active');
    };

    // ================================
    // Viewport Height Fix (Mobile VH bug)
    // ================================
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    }

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    // ================================
    // Touch & Swipe Support
    // ================================
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swiped left
            console.log('Swiped left');
        }
        if (touchEndX > touchStartX + 50) {
            // Swiped right
            console.log('Swiped right');
        }
    }

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    // ================================
    // Utility Functions
    // ================================

    window.showToast = function (message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 1rem;
      right: 1rem;
      padding: 1rem;
      background-color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
      color: white;
      border-radius: 0.5rem;
      z-index: 1000;
      animation: slideUp 0.3s ease;
    `;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    };

    window.debounce = function (func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // ================================
    // Product Timer Management
    // ================================
    let productTimerInterval = null;
    let productWorkingSeconds = 0;

    // Load saved product time from localStorage
    function loadProductTimer() {
        const saved = localStorage.getItem('productWorkingTime');
        const savedTimestamp = localStorage.getItem('productTimerStartTime');

        if (saved && savedTimestamp) {
            const elapsed = Math.floor((Date.now() - parseInt(savedTimestamp)) / 1000);
            productWorkingSeconds = parseInt(saved) + elapsed;
        } else {
            productWorkingSeconds = 0;
        }
    }

    // Format seconds to HH:MM:SS
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // Update product timer display
    function updateProductTimerDisplay() {
        const timerElement = document.querySelector('.timer-working-time');
        if (timerElement) {
            timerElement.textContent = formatTime(productWorkingSeconds);
        }
    }

    // Start product timer
    window.startProductTimer = function () {
        if (productTimerInterval) return; // Already running

        loadProductTimer();

        productTimerInterval = setInterval(() => {
            productWorkingSeconds++;
            updateProductTimerDisplay();

            // Save to localStorage every 5 seconds
            if (productWorkingSeconds % 5 === 0) {
                localStorage.setItem('productWorkingTime', productWorkingSeconds);
                localStorage.setItem('productTimerStartTime', Date.now());
            }
        }, 1000);

        updateProductTimerDisplay();
    };

    // Stop product timer
    window.stopProductTimer = function () {
        if (productTimerInterval) {
            clearInterval(productTimerInterval);
            productTimerInterval = null;
            localStorage.setItem('productWorkingTime', productWorkingSeconds);
            localStorage.setItem('productTimerStartTime', Date.now());
        }
    };

    // Reset product timer
    window.resetProductTimer = function () {
        if (productTimerInterval) {
            clearInterval(productTimerInterval);
            productTimerInterval = null;
        }
        productWorkingSeconds = 0;
        localStorage.removeItem('productWorkingTime');
        localStorage.removeItem('productTimerStartTime');
        updateProductTimerDisplay();
    };

    // Update product info
    window.updateProductInfo = function (warehouse, customer, task, productName, productCode, imageSrc) {
        // Update warehouse
        const warehouseValue = document.querySelector('.info-card:nth-child(1) .info-value');
        if (warehouseValue) warehouseValue.textContent = warehouse;

        // Update customer
        const customerValue = document.querySelector('.info-card:nth-child(2) .info-value');
        if (customerValue) customerValue.textContent = customer;

        // Update task
        const taskValue = document.querySelector('.info-card:nth-child(3) .info-value');
        if (taskValue) taskValue.textContent = task;

        // Update product name
        const productNameElement = document.querySelector('.product-name');
        if (productNameElement) productNameElement.textContent = productName;

        // Update product code
        const productCodeElement = document.querySelector('.product-code');
        if (productCodeElement) productCodeElement.textContent = productCode;

        // Update product image
        const productImageElement = document.querySelector('.product-image');
        if (productImageElement && imageSrc) {
            productImageElement.src = imageSrc;
            productImageElement.alt = productName;
        }

        // Reset timer when product changes
        resetProductTimer();
        startProductTimer();
    };

    // ================================
    // App Initialization
    // ================================
    function init() {
        console.log('DTH Mobile App initialized');
        console.log('Device:', isMobile ? 'Mobile' : 'Desktop');
        console.log('Platform:', isIOS ? 'iOS' : isAndroid ? 'Android' : 'Other');

        // Add iOS specific styles
        if (isIOS) {
            document.documentElement.classList.add('ios');
        }

        // Add Android specific styles
        if (isAndroid) {
            document.documentElement.classList.add('android');
        }

        // Start product timer if on timer page
        if (document.querySelector('.timer-working-time')) {
            loadProductTimer();
            startProductTimer();
        }

        // Prevent double-tap zoom on buttons
        document.addEventListener('touchend', function (e) {
            if (e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('button') ||
                e.target.closest('[role="button"]')) {
                e.preventDefault();
            }
        }, false);

        // Prevent zoom on input focus
        const metaViewport = document.querySelector('meta[name="viewport"]');
        document.addEventListener('touchstart', function (e) {
            if (e.target.tagName.toLowerCase() === 'input' ||
                e.target.tagName.toLowerCase() === 'textarea') {
                metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
            }
        }, false);

        document.addEventListener('touchend', function () {
            metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
        }, false);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
    @keyframes slideUp {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slideDown {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(100%);
        opacity: 0;
      }
    }

    /* iOS Specific */
    html.ios body {
      padding-bottom: env(safe-area-inset-bottom);
    }

    /* Android Specific */
    html.android body {
      padding-bottom: 0;
    }
  `;
    document.head.appendChild(style);

})();

