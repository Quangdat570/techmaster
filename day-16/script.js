// document - 
//document.title - 
//document.body - chỉ đến phần body trong html
// $0.parentNode - trỏ đến cha chứa nó
// $0.nextSibling - trỏ xuống thằng cùng cấp
// $0.firstChild - trỏ xuống thằng con của nó

//---


// tạo thẻ <img/>

const avatar = document.createElement("img");

// tùy chỉnh thông tin

avatar.src = "...";
avatar.alt = "ảnh đại diện";

//tham chiếu đến div

const app = document.querySelector("#app");

//thêm img vào div#app
app.append(avatar);


app.classList.add("bg-red");