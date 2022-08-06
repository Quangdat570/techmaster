import { getUser } from "./appi.js"

getUser();



const getTodo = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
 };



 // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}






// tạo danh sách khi ấn nút thêm

const create = document.querySelector(".btn-create");
create.addEventListener("click",function() {


    const input = document.createElement("input");
    input.type = "checkbox";
    const div = document.createElement("div");
    div.classList.add("todo-item");
    div.style.display ="flex";
    div.style.position ="relative";
    

    const li = document.createElement("li");
    li.id = Math.floor(Math.random()*1000);
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    
    li.appendChild(t);

    

    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(div);
        div.appendChild(input);
        div.appendChild(li);
    }

    document.getElementById("myInput").value = "";

    const span = document.createElement("button");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    div.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
        }
    }
});


const list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
const li = document.querySelector("li");
list.addEventListener("click",function() {
    const id = document.getElementById(id);
    li.classList.toggle("checked");
});
// const id = li.id;
// console.log(id);
// console.log(li);
// li.classList.add("checked");
// });




window.addEventListener("submit",function(e) {
    e.preventDefault();
});

// const all = document.querySelector(".all");
// all.addEventListener("click",function() {
//     const createTodoCard = ({id,title, completed}) => {
//      const todoCard = document.createElement("ul");
//      todoCard.classList.add("todo-item");
//      todoCard.classList.add(completed);
//      todoCard.id = id;
    
//      const div = document.createElement("div");
//     const li = document.createElement("li");

//      const input = document.createElement("input");
//      input.type = "checkbox";

     
 
//      const title = document.createElement("span");
//      span.classList.add("title");
//     span.textContent = title;

//     const span = document.createElement("button");
//     const txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     div.appendChild(span);
 
//     li.append(input,span,btn);
 
//     todoCard.append(li);
//      return todoCard;
//  };

//   const rendertodoList = async () => {
//      try {
//          const { data } = await getTodo();
//          const todos = data.map(createTodoCard);
//          document.querySelector(".myUL").append(...todos);
//      } catch(err) {
//          console.log(err);
//      }
//  };
 
//  rendertodoList();

// });
 
 
 const createTodoCard = ({id,title, completed}) => {
     const todoCard = document.createElement("ul");
     todoCard.classList.add("todo-item");
     todoCard.classList.add(completed);
     todoCard.id = id;
    
    const li = document.createElement("li");

     const input = document.createElement("input");
     input.type = "checkbox";

     
 
     const text = document.createElement("span");
    text.classList.add("title");
    text.textContent = title;

    const span = document.createElement("button");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
 
    li.append(input,text,span);
 
    todoCard.append(li);
     return todoCard;
 };
 
 const rendertodoList = async () => {
     try {
         const { data } = await getTodo();
         const todos = data.map(createTodoCard);
         document.querySelector("#myUL").append(...todos);
     } catch(err) {
         console.log(err);
     }
 };
 
 rendertodoList();



// const todoCard = document.querySelector("ul");
// const btn= document.querySelector('.btn-delete');
//  btn.addEventListener('click', function() {
//     if(completed ==false) {
//         todoCard.classList.add("checked");
//     }


// }, false);

// function deleteTodo(id) {
//    if (confirm("delete to" + id)) {
//     const index = todos.findIndex(function (todo) {
//         return todo.id ===id
//     });
//     todo.splice(index,1);
//     rendertodoList();
//    }
// }
// deleteTodo();