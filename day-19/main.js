


var input = document.getElementById('input'), 
  number = document.querySelectorAll('.numbers div'), 
  operator = document.querySelectorAll('.operators div'), 
  result = document.getElementById('result'), 
  clear = document.getElementById('clear'),
  resultDisplayed = false; 


for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // lưu trữ 
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // nếu kết quả sai => tiếp tục
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // nếu kết quả được hiển thị và người dùng ấn 1 toán tử
      //ta thêm vào chuỗi cho hoạt động tiếp theo
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // nếu kết quả hiện thị và người dùng ấn 1 số
      // ta cần xóa chuỗi đầu vào và thêm mới
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// click chuột vào number
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    // lưu trữ chuỗi đầu vào
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // nếu ký tự cuối cùng là 1 toán tử , hãy thay thế nó bằng ký tự hiện đang được nhấn
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      //nếu phím đầu tiên là operator thì k làm bất kỳ điều gì
      console.log("enter a number first");
    } else {
      // nếu không chỉ cần thêm toán tử được nhấn  vào đầu vào
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// khi nhấn nút ' = '
result.addEventListener("click", function() {

  // 
  var inputString = input.innerHTML;

  // 
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  //
  // thay thế các dầy chấm bằng chuỗi trống sau đó tách
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  // lặp qua mảng và thực hiện thao tác tại 1 thời điểm
  // chia đầu tiên, sau đó nhân, cộng , trừ
  // 
  // 

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // sử dụng parseFloat nếu không sẽ dẫn đến nối chuỗi
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // hiển thị đầu ra

  resultDisplayed = true; //chuyển nếu kết quả được hiển thị
});

//xóa dữ liệu đầu vào
clear.addEventListener("click", function() {
  input.innerHTML = "";
})


Resources