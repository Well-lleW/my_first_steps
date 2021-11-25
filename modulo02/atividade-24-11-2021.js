const display1 = document.getElementById("number");
const display2 = document.getElementById("general");
let number1 = "";
let number2 = "";
let general = "";
let total = "";
let sign = "";
let num = "";

function add(num) {
  total = display1.innerHTML += num;
}
function operation(op) {
  if (total != "") {
    if (number1 === "") {
      sign = op;
      number1 = display1.innerHTML;
      display2.innerHTML += number1;
      display2.innerHTML += sign;
      display1.innerHTML = "";
      total = "";
    }else{
        sign = op;
        number2 = display1.innerHTML;
        display2.innerHTML += number2;
        display2.innerHTML += sign;
        display1.innerHTML = "";
        total = "";
      }
  }

}
function result() {
  if (number1 != "" && total != "") {
    switch (sign) {
      case "*":
        total = parseFloat(number1) * parseFloat(total);
        break;
      case "-":
        total = parseFloat(number1) - parseFloat(total);
        break;
      case "/":
        total = parseFloat(number1) / parseFloat(total);
        break;
      case "+":
        total = parseFloat(number1) + parseFloat(total);
        break;
    }
  }else{
    switch (sign) {
        case "*":
          total = parseFloat(number1) * parseFloat(number2);
          break;
        case "-":
          total = parseFloat(number1) - parseFloat(number2);
          break;
        case "/":
          total = parseFloat(number1) / parseFloat(number2);
          break;
        case "+":
          total = parseFloat(number1) + parseFloat(number2);
          break;
      }
}

  display1.innerHTML = total;
}
function clean() {
  display1.innerHTML = "";
  display2.innerHTML = "";
  number1 = "";
  number2 = "";
  total = "";
  sign = "";
  num = "";
}
