//this == btn
// e.target
FormData.addEventListener("submit", function(e) {
    e.preventDefault();
});

// e.stopPropation - ngăn sự kiện lan truyền
let turn = x;
document.querySelectorAll(".cell").forEach((cell)  {
    cell.addEventListener("click", function() {
        this.textContent = turn;

        if ( turn == "X") turn == "O";
        else turn == "X";
    });
});