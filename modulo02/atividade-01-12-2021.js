let numbers = [];
let numOrder = [];
let result = document.getElementById("numbers");

function memorize() {
  numbers = [];
  numOrder = [];
  let result = document.getElementById("memoResult");
  numbers.push(document.getElementById("numberOne").value);
  numbers.push(document.getElementById("numberTwo").value);
  numbers.push(document.getElementById("numberThree").value);
  numbers.push(document.getElementById("numberFour").value);
  let content = "<tr>";
  content += "<td>" + numbers[0] + "</td>";
  content += "<td>" + numbers[1] + "</td>";
  content += "<td>" + numbers[2] + "</td>";
  content += "<td>" + numbers[3] + "</td>";
  content += "</tr>";

  result.innerHTML = content;

  numOrder.push(parseFloat(numbers[0]));
  numOrder.push(parseFloat(numbers[1]));
  numOrder.push(parseFloat(numbers[2]));
  numOrder.push(parseFloat(numbers[3]));
}

function reverse() {
  let result = document.getElementById("numbersResult");
  let content = "<tr>";
  content += "<td>" + numbers[3] + "</td>";
  content += "<td>" + numbers[2] + "</td>";
  content += "<td>" + numbers[1] + "</td>";
  content += "<td>" + numbers[0] + "</td>";
  content += "</tr>";

  resultLegend.innerHTML = "Números em posição invertida";
  result.innerHTML = content;
}

function order() {
  let result = document.getElementById("numbersResult");
  let content = "<tr>";
  
  sort(numOrder);

  
  content += "<td>" + numOrder[3] + "</td>";
  content += "<td>" + numOrder[2] + "</td>";
  content += "<td>" + numOrder[1] + "</td>";
  content += "<td>" + numOrder[0] + "</td>";
  content += "</tr>";

  resultLegend.innerHTML = "Números em ordem crescente";
  result.innerHTML = content;
}


function sort(numOrder) {

  let done = false;

  while (!done) {
      done = true;
      for (let i = 1; i < numbers.length; i += 1) {
          if (numOrder[i - 1] < numOrder[i]) {
              done = false;
              let tmp = numOrder[i - 1];
              numOrder[i - 1] = numOrder[i];
              numOrder[i] = tmp;
          }
      }
  }

  return numOrder;

}
