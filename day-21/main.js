// const loadScript = (
//     src, // tên file
//     callback // hàm gọi lại sau khi tải xong
//     ) => {
//     const script = document.createElement("script");
//     script.src = src;
//     // sau khi tải xong 1ms, 10ms,...
//     // lập trình bất đồng bộ
//     script.onload = () => callback(script);
//     // thêm vào head
//     document.head.append(script);
// };
// // thực hiện hành động load file nhưng tạm gác 1 bên
// loadScript("other.js",script => {
//     console.log(sum(1,2));
// });


// promise => nhận vào 2 tham số
// tham số đầu tiên executor ( hành động mình cần làm)
// executor có  2 tham số ( resolve,reject)
// resolve - thông báo cho biết thành công
// reject - thông báo cho biết thất bại


// có 3 trạng thái Pending(đang chờ), fullifled-thành công, reject-thất bại

// const promise = new Promise((resolve,reject) => {
//     console.log("đi mua bò húc");
//     const yes = Math.round(Math.random());

//     setTimeout(() => {
//         if ( yes) {
//             resolve("bò húc");
//         } else {
//             reject("hết");
//         }
//     },5000);
// });

// promise.then((value) => {
//     console.log("ohhh");
// }).catch((reason) => {
//     console.log("đi tìm quán khác");
    
// });



// function dimuabohuc() {
//     return new Promise((resolve,reject) => {
//         console.log("đi mua bò húc");
//     const yes = Math.round(Math.random());

//     setTimeout(() => {
//         if ( yes) {
//             resolve("bò húc");
//         } else {
//             reject("hết");
//         }
//     },5000);
//     }
// )};

// async function acction() {
//     try {
//         const value = await dimuabohuc();
//         console.log("uống " +value);
//     } catch(err) {
//         try {
//             const value = await dimuabohuc();
//             console.log("uống " +value);
//         } catch (err) {
//             console.log("k uống nữa");
//         }
//     }
// }
// console.log(acction());





//-----------------------------------------------------
// AJAX
// kỹ thuật cho phép client và sever
//HTTP

//client gửi đi http request
// startline : path ( endpoint) - method(hành động) - GET ( đọc dữ liệu) - POST(tạo mới dữ liệu) - PUT(chỉnh sửa) - DELETE(xóa)
// header: Meta data
// Body: data


// Sever trả về response
//status ( thành công hay thất bại)
// header: Meta
// Body : Data


// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//     //
//     return response.json();
// }).then((json) => {
//     console.log(json);
// });






// axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//     console.log(response);
//     console.log(response.data);
// }).catch((err) => {
//     console.log(err);
// });







// const getUsers = () => {
//     return axios.get("https://jsonplaceholder.typicode.com/users");
// };

// const reder = async () => {
//     try {
//         const { data } =  await getUsers();

//         const users = data.map(createCard);
//         document.querySelector(".user-list").append(...users);
       
//     }
// };


// const createCard = ({name,email,phone}) => {

// };






const e = (tag, attributes, ...chidren) =>  {
    //tạo thẻ tương ứng vs tag
    const element = document.createElement(tag);

    //gán tất cả nhưng thuộc tính cho element
    Object.
}

const user = ((name,email,phone) => {

})

// BTVN : gọi API/post => lấy danh sách các bài viết
// render list bài viết và hiển thị lên trình duyệt