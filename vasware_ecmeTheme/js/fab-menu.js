// Speed Dial FAB Menu - Google Keep Style
(() => {
    'use strict';

    // DOM Elements
    const fabButton = document.getElementById('fabButton');
    const fabOverlay = document.getElementById('fabOverlay');
    const fabActions = document.getElementById('fabActions');
    const fabActionItems = document.querySelectorAll('.fab-action-item');

    // Action Buttons
    const fabCompleteBtn = document.getElementById('fabCompleteBtn');
    const fabSwitchProductBtn = document.getElementById('fabSwitchProductBtn');
    const fabSwitchTaskBtn = document.getElementById('fabSwitchTaskBtn');
    const fabBreakBtn = document.getElementById('fabBreakBtn');
    const fabBreakLabel = document.getElementById('fabBreakLabel');
    const fabEndShiftBtn = document.getElementById('fabEndShiftBtn');

    // State
    let isOpen = false;

    // Stagger animation configuration
    const STAGGER_DELAY = 60; // ms delay between each action appearing
    const ANIMATION_DURATION = 300; // ms for each item animation

    // Toggle Speed Dial Menu
    function toggleMenu() {
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Open Menu with Staggered Animation
    function openMenu() {
        isOpen = true;
        fabButton.classList.add('open');
        fabOverlay.classList.add('visible');

        // Show action items with staggered animation
        fabActionItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * STAGGER_DELAY);
        });
    }

    // Close Menu with Reverse Staggered Animation
    function closeMenu() {
        isOpen = false;
        fabButton.classList.remove('open');
        fabOverlay.classList.remove('visible');

        // Hide action items in reverse order
        const reversedItems = Array.from(fabActionItems).reverse();
        reversedItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('visible');
            }, index * STAGGER_DELAY);
        });
    }

    // Update Break Button State (same logic as before)
    function updateBreakButtonState() {
        if (!window.shiftStartTime) return;

        const minutes = Math.floor((Date.now() - window.shiftStartTime) / 60000);
        let breakText = 'Giải lao';
        let isDisabled = false;
        let breakHref = '07_break.html';

        if (minutes < 60) {
            breakText = 'Giải lao';
            isDisabled = true;
        } else if (minutes <= 135) {
            breakText = 'Giải lao';
            breakHref = '07_break.html';
        } else if (minutes <= 240) {
            breakText = 'Nghỉ trưa';
            isDisabled = true;
        } else if (minutes <= 270) {
            breakText = 'Nghỉ trưa';
            breakHref = '08_lunch.html';
        } else if (minutes <= 375) {
            breakText = 'Giải lao';
            breakHref = '07_break.html';
        } else {
            breakText = 'Giải lao';
            isDisabled = true;
        }

        // Update label text with disabled indicator
        if (isDisabled) {
            fabBreakLabel.textContent = breakText + ' (Chưa đến giờ)';
            fabBreakBtn.disabled = true;
            fabBreakBtn.style.opacity = '0.5';
            fabBreakLabel.style.opacity = '0.5';
        } else {
            fabBreakLabel.textContent = breakText;
            fabBreakBtn.disabled = false;
            fabBreakBtn.style.opacity = '1';
            fabBreakLabel.style.opacity = '1';
        }
        fabBreakBtn.dataset.href = breakHref;
    }

    // Action Handlers
    function handleComplete() {
        const completionModal = document.getElementById('completionModal');
        if (completionModal) {
            completionModal.style.display = 'flex';
        }
        closeMenu();
    }

    function handleSwitchProduct() {
        const productGridView = document.getElementById('productGridView');
        const timerDetailView = document.getElementById('timerDetailView');
        if (productGridView && timerDetailView) {
            productGridView.style.display = 'block';
            timerDetailView.style.display = 'none';
        }
        closeMenu();
    }

    function handleSwitchTask() {
        window.location.href = '04_select_customer_and_task.html';
    }

    function handleBreak() {
        if (fabBreakBtn.disabled) return;
        const breakLink = fabBreakBtn.dataset.href || '07_break.html';
        window.location.href = breakLink;
    }

    function handleEndShift() {
        if (confirm('Bạn có chắc muốn kết thúc ca làm việc?')) {
            window.location.href = '03_select_warehouse.html';
        } else {
            closeMenu();
        }
    }

    // Event Listeners
    fabButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    fabOverlay.addEventListener('click', closeMenu);

    // Attach handlers to action buttons
    fabCompleteBtn.addEventListener('click', handleComplete);
    fabSwitchProductBtn.addEventListener('click', handleSwitchProduct);
    fabSwitchTaskBtn.addEventListener('click', handleSwitchTask);
    fabBreakBtn.addEventListener('click', handleBreak);
    fabEndShiftBtn.addEventListener('click', handleEndShift);

    // Initialize
    updateBreakButtonState();
    setInterval(updateBreakButtonState, 60000); // Update every minute

    // Expose updateBreakButtonState for manual testing
    window.updateBreakButtonState = updateBreakButtonState;
})();
