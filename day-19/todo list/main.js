
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
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}






// tạo danh sách khi ấn nút thêm
function newElement() {
    const input = document.createElement("input");
    input.type = "checkbox";
    const div = document.createElement("div");
    div.style.display ="flex";
    div.style.position ="relative";
    

    const li = document.createElement("li");
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

    var span = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    div.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }

}


window.addEventListener("submit",function(e) {
    e.preventDefault();
})

// const 
