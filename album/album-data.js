// --- DỮ LIỆU ẢNH ---
const photos = [
    { src: "angry.jpg", caption: "Quạo, a coi chừng đấyyyy" },
    { src: "ban-timm.jpg", caption: "Bắn tim <3" },
    { src: "chu.jpg", caption: "Chuuu, anh biết làm j rùi ấyyyy" },
    { src: "co-dau.jpg", caption: "Tập nàm cô dâuuuu" },
    { src: "nike.jpg", caption: "Đố anh chệu nổiiii" },
    { src: "say-hi.jpg", caption: "Sây hai nàoooo" }
];

// MÔ HÌNH TRÁI TIM (1: Hiện ảnh, 0: Ẩn)
const heartPattern = [
    0, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 0,
    0, 0, 1, 1, 1, 0, 0,
    0, 0, 0, 1, 0, 0, 0 
];