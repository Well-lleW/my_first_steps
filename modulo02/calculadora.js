document.getElementById("resultButton").addEventListener('click', calculate);
let op01, op02,sign;


class Calculator {
    constructor(_operand1, _operand2, _operator) {
      this.operand1 = _operand1;
      this.operand2 = _operand2;
      this.operator = _operator;
    }
  //Setter
	set setOperand1(newOperand1) {
    this.operand1 = newOperand1;
  }
  set setOperand2(newOperand2) {
    this.operand2 = newOperand2;
  }
  set setOperator(newOperator) {
    this.operator = newOperator;
  }
  
  //Getter
    get result() {
        return this.calculate()
    }

    calculate(result) {
      switch (this.operator) {
      case "*":
        result = this.operand1 * this.operand2;
        return this.round(result);
      case "/":
        result = this.operand1 / this.operand2;
        return this.round(result);
      case "+":
        result = parseFloat(this.operand1) + parseFloat(this.operand2);
        return this.round(result);
      case "-":
        result = this.operand1 - this.operand2;
        return this.round(result);
    }
    }
    round(result){
    return Math.round((result + Number.EPSILON) * 10000) / 10000;

    }
}

const calculation = new Calculator(0, 0, "*");
 

 
function calculate (){
op01 = document.getElementById("operand01").value;
op02 = document.getElementById("operand02").value;
sign = document.getElementById("sign").value;

 calculation.setOperand1 = op01;
 calculation.setOperand2 = op02;
 calculation.setOperator = sign;
 
 if (op01 != "" && op02 != ""){
 	if(op02 == 0 && sign == "/"){
  	alert("Can't be divided by zero");
    return
  }else {
  	document.getElementById("result").innerHTML = calculation.result;
  }
 }
       
 }

