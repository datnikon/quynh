document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');
    const videoModal = document.getElementById('video-modal');
    const youtubePlayer = document.getElementById('youtube-player');
    const modalTitle = document.getElementById('modal-video-title');
    const modalDesc = document.getElementById('modal-video-desc');
    const closeModalBtn = document.querySelector('.close-modal');

    // --- 1. RENDER DANH SÁCH VIDEO ---
    videos.forEach((video, index) => {
        // Lấy ảnh thumbnail chất lượng cao từ YouTube (nếu không có ảnh custom)
        // maxresdefault.jpg là ảnh nét nhất, nếu lỗi nó sẽ tự fallback về hqdefault
        const thumbnailSrc = video.customThumbnail || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="thumbnail-wrapper">
                <img src="${thumbnailSrc}" alt="${video.title}" class="video-thumbnail" onerror="this.src='https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg'">
                <div class="play-button"></div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-date">${video.date}</p>
            </div>
        `;

        // Sự kiện click vào thẻ để mở modal
        card.addEventListener('click', () => {
            openModal(video);
        });

        videoGrid.appendChild(card);
    });

    // --- 2. XỬ LÝ MODAL (MỞ/ĐÓNG) ---

    function openModal(videoData) {
        // 1. Set nội dung cho modal
        modalTitle.innerText = videoData.title;
        modalDesc.innerText = videoData.description;
        
        // 2. Set link cho iframe (thêm autoplay=1 để tự chạy khi mở)
        youtubePlayer.src = `https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1&rel=0`;
        
        // 3. Hiện modal
        videoModal.style.display = 'flex';
    }

    function closeModal() {
        // 1. Ẩn modal
        videoModal.style.display = 'none';
        // 2. QUAN TRỌNG: Xóa src của iframe để dừng video lại
        youtubePlayer.src = "";
    }

    // Đóng khi click nút X
    closeModalBtn.addEventListener('click', closeModal);

    // Đóng khi click ra ngoài vùng modal-content
    window.addEventListener('click', (e) => {
        if (e.target == videoModal) {
            closeModal();
        }
    });

    // --- 3. HIỆU ỨNG TIM BAY NỀN (Cho đồng bộ) ---
    const bg = document.getElementById('bg-hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = Math.random() > 0.5 ? '🎬' : '❤️'; // Tim và icon quay phim
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 8 + 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        bg.appendChild(heart);
        setTimeout(() => heart.remove(), 13000);
    }, 800);
});