let arr = ["sang", "dat", "tuan", "thuan"]
function logUpperName(name) {
    console.log(name.toUpperCase());
}
arr.forEach(logUpperName); // với mỗi 1 phần tử sẽ thực hiện 1 hành động được thêm vào
// arr.forEach(function(name)) {
//    console.log(name.toUpperCase());
// }

// forEach gọi callback 1 lần với mỗi 1 giá trị trong mảng, callback có thể nhận tối đa 3 tham số( value, index, arr)


let newName;
for (let i = 0; i < arr.length; i++) {
    if ( arr[i].startsWith("t")) {
        newName = arr[i];
        break;
    }
    
}
let a;
a = arr.find(function(newName) {
    if (newName.startsWith("t")) return true;
    else return false;
})
console.log(a);

// find() sử dụng để tìm 1 cái giá trị trong mảng khớp với điều kiện ( được đánh giá bởi hàm callback truyền vào)
// callback phải trả về kết quả là boolean (true | false) cho biết giá trị có phù hợp với điều kiện hay không

result = [];
for (let index = 0; index < arr.length; index++) {
    if ( arr[index].startsWith("t")) result.push(arr[index]);
    
}
console.log(result);

// arr.filter(function(name)) {
//     return name.startsWith("t");
// }


result = []
for (let index = 0; index < arr.length; index++) {
    result.push(arr[index].charAt(0));

    
}
console.log(result);

//--------------------------------- MAP
result = [];
for (let index = 0; index < arr.length; index++) {
    result.push((arr[index]).length);
    
}
console.log(result);

let numberName = arr.map(function(name) {
    return name.length
})
console.log(numberName);

//-----------------------------------------

arr = [{a:10, b:10}, {a:15, b:15}]
let c = arr.reduce(function(result,object,index) {
    result ["a_" + index] = object.a;
    result ["b_" + index] = object.b;
    return result;
}, {})
console.log(c);


//---------------------------------
// mặc định hàm sort() là sắp xếp theo chuỗi
// chỉ hoạt động tốt nếu các giá trị bên trong mảng đều là chuỗi
// callback truyền vào sort() phải trả về 1 giá trị số nguyên ( âm, 0, dương) cho biết giá trị nào nhỏ hơn


//-----------------------
// arr.every() tất cả
// arr.findIndex()
// arr.reduceRight()
// arr.some()

function max(arr) {
    let max = arr[0];
    for ( let number of arr) {
        if ( number > max) {
            max = number;
        }
    } return max;
}

function minMax(arr) {
    let min = max = arr[0];
    for ( let number of arr) {
        if ( number > max) max = number;

        if (number< min) min = number
    }
    return [min,max];
}


//5

// mkdir - my-folder: tạo 1 foder
// cd my-folder : di chuyển đến folder cần làm việc
// dir - xem danh sách
// git config --global user.name "Quang Dat" 

// quẩn lý các phiên bản của nhánh
// 
// *. làm quen với command line (CMD). thực hành ghi nhớ 1 số lệnh cơ bản( thay đổi, tạo thư mục)
// 1. tạo repository ( không nằm bên trong repo khác, không chứa repo khác). chỉ cần tạo 1 lần Initialize repositiory
// 2. khi có thay đổi/cập nhật => Stage Change (+)
// 3. Lưu phiên bản => Commit kèm với message
// 4. Publish/Sync