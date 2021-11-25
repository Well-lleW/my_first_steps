const display1 = document.getElementById("number");
const display2 = document.getElementById("general");
let number1 = "";
let number2 = "";
let general = "";
let total = "";
let sign = "";
let num = "";
let numdot = "";

function add(num) {
  if (number1 != "" && number2 != "") {
    display1.innerHTML = "";
    display1.innerHTML += num;
  }else{
    total = display1.innerHTML += num;
  }
  }
function operation(op) {
  if ((number1 != "") & (number2 != "")) {
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
    // display2.innerHTML += total;
    display2.innerHTML += sign;
    // number2 = "";
  }
  if (total != "") {
    if (number1 === "") {
      sign = op;
      number1 = display1.innerHTML;
      display2.innerHTML += number1;
      display2.innerHTML += sign;
      display1.innerHTML = "";
      total = "";
    } else {
      sign = op;
      number2 = display1.innerHTML;
      display2.innerHTML += number2;
      // display2.innerHTML += sign;
      display1.innerHTML = "";
      total = "";
      result();
      number1 = total;
      // display2.innerHTML += number1;
    }
  }
  numdot = "";
}
function result() {
  if (number1 != "" && total != "") {
    display2.innerHTML += total;
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
  } else {
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
  numdot = "";
}

function dot() {
  if (numdot != 1){
    numdot = 1;
    total = display1.innerHTML += ".";
  }
}

function change() {
    total = parseFloat(total) * -1;
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
  numdot = "";
}
