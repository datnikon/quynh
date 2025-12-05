document.addEventListener('DOMContentLoaded', () => {
    const giftList = document.getElementById('gift-list');

    // Render danh sách quà
    gifts.forEach((gift, index) => {
        const card = document.createElement('div');
        card.className = 'gift-card';

        // Xử lý phần cảnh báo hoặc ghi chú thêm
        let extraContent = '';
        if (gift.warning) {
            extraContent = `<div class="warning-box">🔥 ${gift.warning}</div>`;
        } else if (gift.note) {
            extraContent = `<div class="warning-box" style="background: #e3f2fd; border-color: #2196f3; color: #0d47a1;">🎵 ${gift.note}</div>`;
        }

        card.innerHTML = `
            <div class="gift-img-wrapper">
                <img src="${"./images/" + gift.image}" alt="${gift.name}" class="gift-img">
                <div class="gift-date">${gift.date}</div>
            </div>
            <div class="gift-summary">
                <h2 class="gift-name">${gift.name}</h2>
                <button class="toggle-btn" onclick="toggleDetails(this)">💌 Đọc ghi chú</button>
            </div>
            <div class="gift-details">
                <div class="detail-item">
                    <span class="detail-label">Ý nghĩa món quà:</span>
                    ${gift.meaning}
                </div>
                <div class="detail-item">
                    <span class="detail-label">Cách sử dụng:</span>
                    ${gift.usage}
                </div>
                ${extraContent}
            </div>
        `;

        giftList.appendChild(card);
    });
});

// Hàm mở rộng/thu gọn chi tiết
function toggleDetails(btn) {
    const card = btn.closest('.gift-card');
    const details = card.querySelector('.gift-details');
    
    if (details.classList.contains('open')) {
        details.classList.remove('open');
        btn.innerText = "💌 Đọc ghi chú";
        btn.style.background = "linear-gradient(45deg, #e91e63, #ff80ab)";
    } else {
        details.classList.add('open');
        btn.innerText = "Đóng lại ^^";
        btn.style.background = "#ccc";
    }
}