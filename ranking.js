//1. Tạo một hàm XepLoai bằng hàm mũi tên 
// có trả về kết quả xếp loại tổng kết
//  theo chuẩn chung của phổ thông.

const XepLoai = (point) => {
    if(point >= 8) return "Ăn Tết lớn, nhận được 1 triệu lì xì rồi!"
    if(point >= 7) return "Ăn Tết vừa vừa, bánh chưng nhỏ!"
    if(point >= 6) return "Tết này chỉ ngắm bánh chưng."
   return "Tết này ăn mì tôm!"
   //Đánh giá rất thủ công :))))))))))))
}

//mảng chứa danh sách sinh viên gồm 5 sinh viên
let danhSachSV = [
    { msv: "PH001", ten: "A", tongKet: 8.7, xepLoai: function() { return XepLoai(this.tongKet); } },
    { msv: "PH002", ten: "B", tongKet: 6.5, xepLoai: function() { return XepLoai(this.tongKet); } },
    { msv: "PH003", ten: "C", tongKet: 9.2, xepLoai: function() { return XepLoai(this.tongKet); } },
    { msv: "PH004", ten: "D", tongKet: 7.8, xepLoai: function() { return XepLoai(this.tongKet); } },
    { msv: "PH005", ten: "E", tongKet: 5.9, xepLoai: function() { return XepLoai(this.tongKet); } }
]

//In danh sách sinh viên ra màn hình, trình bày định dạng đẹp, theo thứ tự tổng kết từ cao xuống thấp 
danhSachSV.sort((a,b)=> b.tongKet - a.tongKet);
console.log("Danh sách sinh viên lớp MD19303: ");
danhSachSV.forEach((sv,index)=> {
    console.log(`${index + 1}. ${sv.ten} - Tổng kết: ${sv.tongKet} - Xếp loại: ${sv.xepLoai()}`);
})

//Fillter sv nào có tổng kết hơn 6(fillter)
const honSau = danhSachSV.filter(sv => sv.tongKet > 6);
console.log("\n Hơn 6 thì có những sinh viên này: ");
honSau.forEach(sv => {
    console.log(`${sv.ten} - Tổng kết: ${sv.tongKet} - Xếp loại: ${sv.xepLoai()}`);
})

// Viết một hàm ConvertHTML() có tham số truyền vào 
// là mảng danh sách sinh viên, kết quả hàm return là một bảng HTML đầy
//  đủ các thẻ có chia cột rõ ràng. Viết lệnh ghi log kết quả chạy hàm để in ra kết quả chuỗi html. 
// Bổ sung thêm css cho chuỗi để bảng hiển thị đẹp.

const ConvertHTML = (danhSach) => {
    let html = `\n<table border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th>Mã SV</th>
                <th>Tên</th>
                <th>Tổng Kết</th>
                <th>Xếp Loại</th>
            </tr>
        </thead>
        <tbody>`;

        danhSach.forEach(sv => {
            html += `
                <tr>
                    <td>${sv.msv}</td>
                    <td>${sv.ten}</td>
                    <td>${sv.tongKet}</td>
                    <td>${sv.xepLoai()}</td>
                </tr>`;
        });

        html += `
        </tbody>
    </table>`;
    return html;
};

console.log("\nBảng Sinh Viên:");
console.log(ConvertHTML(danhSachSV));

//Hàm nhập thông tin sinh viên
const ThemSV = (danhSach) => {
    const msv = prompt("Nhập mã sinh viên:");
    const ten = prompt("Nhập tên sinh viên:");
    const tongKet = parseFloat(prompt("Nhập điểm tổng kết:"));

    danhSach.push({
        msv,
        ten,
        tongKet,
        xepLoai: function() { return XepLoai(this.tongKet); }
    });
};

//Cập nhật sinh viên mới sau khi nhập thông tin
ThemSV(danhSachSV);
console.log("\nDanh sách sau khi thêm sinh viên mới:");
danhSachSV.forEach((sv, index) => {
    console.log(`${index + 1}. ${sv.ten} - Tổng kết: ${sv.tongKet} - Xếp loại: ${sv.xepLoai()}`);
});



