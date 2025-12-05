document.addEventListener('DOMContentLoaded', () => {
    const heartGrid = document.getElementById('heart-grid');
    const galleryContainer = document.getElementById('gallery-container');
    const coverScreen = document.getElementById('cover-screen');
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');

    // --- 1. RENDER GRID ẢNH ---
    let photoIndex = 0;
    const gridCells = [];

    heartPattern.forEach((val) => {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        
        if (val === 0) {
            cell.classList.add('hidden');
        } else {
            const photo = photos[photoIndex % photos.length];
            const img = document.createElement('img');
            img.src = "./images/" + photo.src;
            
            const currentIndex = photoIndex % photos.length;
            cell.onclick = () => openLightbox(currentIndex);
            cell.appendChild(img);
            
            gridCells.push(cell);
            photoIndex++;
        }
        heartGrid.appendChild(cell);
    });

    // --- 2. XỬ LÝ ĐÓNG/MỞ ---
    const isOpened = localStorage.getItem('gallerySafeState') === 'open';

    function openGallery(animate = true) {
        coverScreen.classList.add('hidden');
        galleryContainer.classList.add('visible');
        localStorage.setItem('gallerySafeState', 'open');

        if (animate) {
            gridCells.forEach((cell, index) => {
                setTimeout(() => {
                    cell.classList.add('show');
                }, index * 30);
            });
        } else {
            gridCells.forEach(cell => cell.classList.add('show'));
        }
    }

    function closeGallery() {
        coverScreen.classList.remove('hidden');
        galleryContainer.classList.remove('visible');
        localStorage.setItem('gallerySafeState', 'closed');
        gridCells.forEach(cell => cell.classList.remove('show'));
    }

    if (isOpened) {
        openGallery(false);
    }

    openBtn.addEventListener('click', () => openGallery(true));
    closeBtn.addEventListener('click', closeGallery);

    // --- 3. LIGHTBOX ---
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCaption = document.getElementById('lightbox-caption');
    let currentLbIndex = 0;

    window.openLightbox = (index) => {
        currentLbIndex = index; updateLb(); lightbox.classList.add('active');
    }
    function updateLb() {
        const p = photos[currentLbIndex]; lbImg.src = "./images/" + p.src; lbCaption.innerText = p.caption;
    }
    document.getElementById('next-btn').onclick = (e) => { e.stopPropagation(); currentLbIndex = (currentLbIndex + 1) % photos.length; updateLb(); };
    document.getElementById('prev-btn').onclick = (e) => { e.stopPropagation(); currentLbIndex = (currentLbIndex - 1 + photos.length) % photos.length; updateLb(); };
    document.querySelector('.close-lb').onclick = () => lightbox.classList.remove('active');
    lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.classList.remove('active'); };

    // --- 4. TIM BAY NỀN ---
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = Math.random() > 0.5 ? '❤️' : '🌸';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 10000);
    }, 500);
});