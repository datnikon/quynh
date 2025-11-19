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
    "Yêu là muốn ở bên một người, không muốn xa người đó dù chỉ là một giây."
];

// 5. Nhật ký (Thêm mới lên đầu)
const diaryEntries = [
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
];

// data.js

// 7. Bucket List - Những điều cùng làm
const loveBucketList = [
    { text: "Cùng nhau đi Du Lịch", done: false }, // Chưa làm
    { text: "Đi xem phim", done: false }, // Đã làm
    { text: "Nấu cho nhau một bữa ăn", done: false },
    { text: "Mặc áo đôi", done: false },
    { text: "Cùng đón giao thừa", done: false },
    { text: "Chụp 1000 tấm ảnh cùng nhau", done: false }
];
