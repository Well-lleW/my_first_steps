let phrase = "I didn’t do it! Nobody saw me do it. You can’t prove anything!";
let phraseNumber = document.getElementById("phraseInput").value;
let p;
let phraseCount = 0;
let phraseAmount = 0;
let wipeCount = 0;


function wipe() {
  document.getElementById("whiteBoard").innerHTML = "";
  phraseAmount = 0;
  phraseCount = 0;
  wipeCount = 0;
}
function createPhrase() {
  p = document.createElement("p");
  p.innerHTML = phrase;
  document.getElementById("whiteBoard").appendChild(p);
  function typeWriter(element) {
    const textArray = phrase.split("");
    element.innerHTML = "";
    textArray.forEach((letter, i) => {
      setTimeout(() => (element.innerHTML += letter), 20 * i);
    });
  }
  typeWriter(p);
}

function newPhrase() {
  wipe();
  let phraseNumber = document.getElementById("phraseInput").value;
  
  while (phraseAmount < phraseNumber) {
    phraseAmount += 1;
    if (phraseCount < 11) {
      phraseCount += 1;
      createPhrase();
    } else {
      wipeCount += 1;
      document.getElementById("whiteBoard").innerHTML = "";
      createPhrase();
      phraseCount = 1;
      document.getElementById("notes").innerHTML =
        "Wiped " + wipeCount + "<br/>" + "Remainder " + (phraseNumber % 11);
    }
  }
}
