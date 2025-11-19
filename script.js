document.addEventListener('DOMContentLoaded', function() {
    // --- 1. INIT DATA ---
    document.getElementById('share-btn').href = googleFormLink;
    document.getElementById('love-quote').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    document.getElementById('letter-text').innerText = letterContent;
    
    // Hiển thị ngày bắt đầu
    const dateStr = startDate.toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
    document.getElementById('start-date-display').innerText = `Kể từ tin nhắn đầu tiên ${dateStr}`;

    // --- 2. COUNTER ---
    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;
        if (diff > 0) {
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const s = Math.floor((diff / 1000) % 60);
            document.getElementById('days').innerText = d < 10 ? "0" + d : d;
            document.getElementById('hours').innerText = h < 10 ? "0" + h : h;
            document.getElementById('minutes').innerText = m < 10 ? "0" + m : m;
            document.getElementById('seconds').innerText = s < 10 ? "0" + s : s;
        }
    }
    setInterval(updateCounter, 1000);
    updateCounter();

    // --- 3. RENDER DIARY ---
    const diaryContainer = document.getElementById('diary-container');
    diaryEntries.forEach(entry => {
        const div = document.createElement('div');
        div.className = 'diary-item';
        div.innerHTML = `
            <span class="diary-date">${entry.date}</span>
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
        `;
        diaryContainer.appendChild(div);
    });

    // --- 4. GALLERY & LIGHTBOX ---
    const galleryContainer = document.getElementById('gallery-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeLightBox = document.querySelector('.close');

    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = "./images/" + photo.src;
        img.className = 'gallery-item';
        img.onclick = () => {
            lightbox.style.display = "flex";
            lightboxImg.src = "./images/" + photo.src;
            caption.innerText = photo.caption;
        };
        galleryContainer.appendChild(img);
    });

    closeLightBox.onclick = () => lightbox.style.display = "none";
    lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = "none"; };

    // --- 5. MUSIC PLAYER ---
    const musicBtn = document.getElementById('music-btn');
    const audio = document.getElementById('bg-music');
    
    // Xử lý auto play nếu trình duyệt cho phép (ít khi được)
    audio.volume = 0.5; // 50% âm lượng

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.classList.add('playing');
        } else {
            audio.pause();
            musicBtn.classList.remove('playing');
        }
    });

    // --- 6. LETTER MODAL ---
    const letterModal = document.getElementById('letter-modal');
    const openLetterBtn = document.getElementById('open-letter-btn');
    const closeLetterBtn = document.querySelector('.close-letter');

    openLetterBtn.onclick = () => letterModal.style.display = "flex";
    closeLetterBtn.onclick = () => letterModal.style.display = "none";
    letterModal.onclick = (e) => { if(e.target === letterModal) letterModal.style.display = "none"; };

    // --- 7. FALLING HEARTS ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-fall');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 10 + 10 + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 500);
});