// --- CẤU HÌNH DỮ LIỆU ---

// 1. Ngày yêu nhau (Năm, Tháng - 1, Ngày, Giờ, Phút)
// Lưu ý: Tháng 11 thì điền là 10, Tháng 1 thì điền là 0
const startDate = new Date(2025, 10, 18, 20, 50, 0);

// 2. Link Google Form của bạn
const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSer0xtF-0d01ayk1sMnzJGWjOybjoLHIs2PROi9Lw-J2m8pQQ/viewform?usp=dialog"; 

// 3. Nội dung lá thư (Dùng \n để xuống dòng nếu cần)
const letterContent = `
Hôm nay anh làm trang web này dành riêng cho em. Có thể nó không phải là món quà đắt tiền nhất, nhưng nó chứa đựng tình cảm chân thành của anh.

Cảm ơn em đã đến bước vào cuộc đời anh ngày 18/11/2025. Anh hứa sẽ luôn trân trọng và gìn giữ những khoảnh khắc này.

Mong rằng chúng ta sẽ cùng nhau làm đầy album ảnh và nhật ký này thật nhiều nhé!
`;

// 4. Danh sách câu châm ngôn
const quotes = [
    "Hạnh phúc không phải là đích đến, mà là hành trình chúng ta đi cùng nhau.",
    "Chỉ cần có em, mọi bão giông đều hóa dịu dàng.",
    "Cảm ơn đời mỗi sớm mai thức dậy, ta có thêm ngày nữa để yêu thương.",
    "Yêu là muốn ở bên một người, không muốn xa người đó dù chỉ là một giây.",
    "Ở bên anh, em không cần phải trưởng thành, cứ làm em bé là được.",
    "Thế giới của anh không to, chỉ vừa đủ để đựng một mình em.",
    "Together is my favorite place to be. (Bên nhau là nơi yêu thích nhất của anh)"
];

// 5. Nhật ký (Thêm mới lên đầu)
const diaryEntries = [
    {
        date: "25/11/2025",
        title: "Ngày tỏ tình <3",
        content: "Lần đầu nói những câu nói..."
    },
    {
        date: "19/11/2025",
        title: "Ngày làm web",
        content: "Hôm nay anh đã ngồi làm chiếc web này, vừa làm vừa nghĩ đến nụ cười của em. Hy vọng em sẽ thích nó."
    },
    {
        date: "18/11/2025 - 20:50",
        title: "Khoảnh khắc bắt đầu",
        content: "Tin nhắn đầu tiên được gửi đi. Chính thức đánh dấu ngày chúng ta kết nối với nhau."
    }
];

// 6. Album ảnh
const photos = [
    { 
        src: "smile.jpg", 
        caption: "Nụ cười tỏa nắng" 
    },
    { 
        src: "video.jpg", 
        caption: "Lần đầu video call khôm che, tươi qué ^^" 
    },
    { 
        src: "kyco.jpg", 
        caption: "Ảnh đầu tiên với nheo ^^" 
    },
    { 
        src: "movie.jpeg", 
        caption: "[28/12] Lần đầu đi xem phim ^^" 
    },
    { 
        src: "photo_booth.jpg", 
        caption: "[24/12] Ngày đầu - Chụp hình photobooth" 
    },
    { 
        src: "my_cay.jpg", 
        caption: "Tối đầu tiền - đi ăn mỳ cay" 
    },
    { 
        src: "du_tren.jpg", 
        caption: "Đú trend tóp top" 
    },
];

// data.js

// 7. Bucket List - Những điều cùng làm
const loveBucketList = [
    { text: "Đi xem phim", done: true },
    { text: "Nấu cho nhau một bữa ăn", done: true },
    { text: "Mặc áo đôi", done: false },
    { text: "Cùng đón giao thừa", done: true },
    { text: "Chụp 1.000 tấm ảnh cùng nhau", done: false },
    { text: "Cùng nhau đi du nịch", done: true },
];

// data.js

// ... (Các phần cũ giữ nguyên) ...

// 8. Góc ghi nhớ (Memory Notes)
// 8. Góc ghi nhớ (Memory Notes) - Đã cập nhật cute phô mai que
const memoryNotes = [
    { 
        title: "Món ăn 'chân ái'", 
        icon: "🍜",
        content: "Tà sữa truyền thống, tà sữa kem trứng, đồ ăn vặt (Cứ mua là auto vui). Gà (cổ, cánh, đầu...)" 
    },
    { 
        title: "Size quần áo/giày", 
        icon: "👗",
        content: "M58 đáng eo, 46-47 kí lô, size cụ thể thì... đang đợi em chia sẻ bí mật ^^" 
    },
    { 
        title: "Điều cấm kỵ", 
        icon: "🚫",
        content: "⚠️ Chính chủ tự nhận là KHÓ TÍNH. Cơ mà anh nghe bảo con gái càng khó tính thì khi yêu được chiều chuộng sẽ càng đáng eo." 
    },
    { 
        title: "Ngày đặc biệt", 
        icon: "📅",
        content: "Sinh nhật: 13/06 (Song Tử). Còn ngày gì nữa thì... waiting..." 
    },
    { 
        title: "Thói quen xấu", 
        icon: "zzz",
        content: "Người tuyệt vời như em thì làm gì có thói quen xấu nhỉ (^^)"
    }
];

// 9. Danh sách Lời hứa (Promise List)
const myPromises = [
    {
        text: "Giật giải 'siêu kute' môn Triết học A+",
        status: "done",
        date: "[06/12] Đã trao trải - Đang chờ kết quả... " // Ghi chú nhỏ
    },
    {
        text: "Dắt em đi đến những nơi em thích",
        status: "processing",
        date: "Có hiệu lực trọn đời, waiting... to start!!!"
    },
    {
        text: "Không để em ngủ mà vẫn còn giậnnnnn",
        status: "processing",
        date: "Cam kết dài hạn!"
    }
    // Sau này hứa gì thêm thì copy thêm dòng vào đây
];
