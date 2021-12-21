const megaSena = [];
const drawnNumbers = [];
let i = 0;
let nIntervId;

function changeColor() {
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function drawNumbers(x) {
  document.getElementById("table").innerHTML +=
    "<td>" + drawnNumbers[i] + "</td>";
}

function drawAll() {
  megaSena.length = 0;
  document.getElementById("table").innerHTML = "";
  for (let i = 1; i <= 60; i++) {
    megaSena.push(i);
  }
  drawnNumbers.length = 0;
  let y = megaSena.length;
  for (let i = 0; i < 6; i++) {
    j = Math.floor(Math.random() * y);
    y--;
    drawnNumbers.push(megaSena[j]);
    megaSena.splice(j, 1);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  if (oElem.className === "go") {
    oElem.className = "stop";
    drawNumbers(i);
  } else {
    oElem.className = "go";
    drawNumbers(i);
  }
  i++;
  if (i === 6){
    clearInterval(nIntervId);
  }
}

document.getElementById("draw").addEventListener("click", changeColor);
