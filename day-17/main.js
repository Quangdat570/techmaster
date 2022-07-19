let head = document.querySelector('thead');
let newRow = head.insertRow();
let newText = document.createTextNode('Hóa đơn ăn nhậu');
newRow.appendChild(newText);

let body = document.querySelector('tbody');
for ( let i = 0; i<11;i++) {
    let tr = document.createElement('tr');
    body.appendChild(tr);
    for ( let j = 0; j < 4; j++) {
        let td = document.createElement('td');
        
        tr.appendChild(td);
    }
    
   
}

body.rows[0].cells[0].appendChild(document.createTextNode('STT'));
body.rows[0].cells[1].appendChild(document.createTextNode('Tên'));
body.rows[0].cells[2].appendChild(document.createTextNode('Mức đóng góp'));
body.rows[0].cells[3].appendChild(document.createTextNode('Nhận xét'));

body.rows[1].cells[0].appendChild(document.createTextNode('1'));
body.rows[1].cells[1].appendChild(document.createTextNode('Giang Hồng Sơn'));
body.rows[1].cells[2].appendChild(document.createTextNode('1000000'));
body.rows[1].cells[3].appendChild(document.createTextNode('Sugar Daddy'));

body.rows[2].cells[0].appendChild(document.createTextNode('2'));
body.rows[2].cells[1].appendChild(document.createTextNode('Nguyễn Thế Anh'));
body.rows[2].cells[2].appendChild(document.createTextNode('200000'));
body.rows[2].cells[3].appendChild(document.createTextNode('Sugar Brother'));

body.rows[3].cells[0].appendChild(document.createTextNode('3'));
body.rows[3].cells[1].appendChild(document.createTextNode('Bùi Lan Nhi'));
body.rows[3].cells[2].appendChild(document.createTextNode('100000'));
body.rows[3].cells[3].appendChild(document.createTextNode('Định mời nhi ăn tối mà sợ thành bữa tối của nhi'));

body.rows[4].cells[0].appendChild(document.createTextNode('4'));
body.rows[4].cells[1].appendChild(document.createTextNode('Nguyễn Hữu Hà'));
body.rows[4].cells[2].appendChild(document.createTextNode('150000'));
body.rows[4].cells[3].appendChild(document.createTextNode('Tuổi trẻ tài cao'));

body.rows[5].cells[0].appendChild(document.createTextNode('5'));
body.rows[5].cells[1].appendChild(document.createTextNode('Phạm Hồng Anh'));
body.rows[5].cells[2].appendChild(document.createTextNode('100000'));
body.rows[5].cells[3].appendChild(document.createTextNode('Lúc đầu gáy to'));

body.rows[6].cells[0].appendChild(document.createTextNode('6'));
body.rows[6].cells[1].appendChild(document.createTextNode('Nguyễn Văn Hùng'));
body.rows[6].cells[2].appendChild(document.createTextNode('100000'));
body.rows[6].cells[3].appendChild(document.createTextNode('Bị buồn'));

body.rows[7].cells[0].appendChild(document.createTextNode('7'));
body.rows[7].cells[1].appendChild(document.createTextNode('Nguyễn Văn Tùng'));
body.rows[7].cells[2].appendChild(document.createTextNode('200000'));
body.rows[7].cells[3].appendChild(document.createTextNode('Kèo nài cũng cân'));

body.rows[8].cells[0].appendChild(document.createTextNode('8'));
body.rows[8].cells[1].appendChild(document.createTextNode('Bùi Minh Đức'));
body.rows[8].cells[2].appendChild(document.createTextNode('100000'));
body.rows[8].cells[3].appendChild(document.createTextNode('Hơi rén, lần sau cần mạnh dạn hơn'));

body.rows[9].cells[0].appendChild(document.createTextNode('9'));
body.rows[9].cells[1].appendChild(document.createTextNode('Dương Đức Thịnh'));
body.rows[9].cells[2].appendChild(document.createTextNode('100000'));
body.rows[9].cells[3].appendChild(document.createTextNode('Mồm to húp hết nửa bill'));

body.rows[10].cells[0].appendChild(document.createTextNode('10'));
body.rows[10].cells[1].appendChild(document.createTextNode('Thầy giáo barr'));
body.rows[10].cells[2].appendChild(document.createTextNode('100000'));
body.rows[10].cells[3].appendChild(document.createTextNode('Cảm ơn Nhi đã mời mình'));

let tfoot = document.querySelector('tfoot');
for (let index = 0; index < 4; index++) {
    let tr = document.createElement('tr');
    tfoot.appendChild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    
}

tfoot.rows[0].cells[0].appendChild(document.createTextNode('Tổng bill ca 1: 2022000'));
tfoot.rows[1].cells[0].appendChild(document.createTextNode('Tổng bill ca 2: 105000'));
tfoot.rows[2].cells[0].appendChild(document.createTextNode('Tổng thiệt hại: 2127000'));
tfoot.rows[3].cells[0].appendChild(document.createTextNode('Tổng đóng góp: 2150000'));






    







