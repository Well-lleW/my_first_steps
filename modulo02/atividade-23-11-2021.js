var x = document.getElementById("exp");
var y = document.getElementById("hab");
var z = document.getElementById("exit");
var w = document.getElementById("rateH3");
document.getElementById("send").addEventListener("click", myFunctionExp);
document.getElementById("exit").addEventListener("click", myFunctionHab);
function myFunctionExp() {
  if (x.hidden === true) {
    x.hidden = false;
    y.hidden = true;
    z.hidden = false;
    w.hidden = true;
  }
}
function myFunctionHab() {
  if (y.hidden === true) {
    y.hidden = false;
    x.hidden = true;
    z.hidden = true;
    w.hidden = false;
  }
}
