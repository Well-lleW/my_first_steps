g = document
  .querySelector("#mainDiv1")
  .appendChild(document.createElement("div"));

g.setAttribute("id", "mainDivH1");

document.querySelector("#mainDivH1").appendChild(document.createElement("h1"));

document.querySelector("h1").innerHTML = "Dog";

divP1 = document
  .querySelector("#mainDiv2")
  .appendChild(document.createElement("div"));

divP1.setAttribute("id", "mainDivP1");

p1 = document
  .querySelector("#mainDivP1")
  .appendChild(document.createElement("p"));

p1.setAttribute("id", "p1");

document.querySelector("#p1").innerHTML =
  "<b>Domestication history</b></br></br>The dog was the first animal to be domesticated by humans, and it's been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.";
p2 = document
  .querySelector("#mainDivP1")
  .appendChild(document.createElement("p"));

p2.setAttribute("id", "p2");

document.querySelector("#p2").innerHTML =
  "<b>Curiosities</b></br></br>Dogs do not sweat by salivating. They sweat through the pads of their feet.</br></br>They can locate the source of a sound in 6/100ths of a second, by using their swivelling ears like radar dishes.";
i1 = document
  .querySelector("#mainDiv3")
  .appendChild(document.createElement("h2"));

i1.setAttribute("id", "h2");

document.querySelector("h2").innerHTML = "My Pets";

i2 = document
  .querySelector("#mainDiv3")
  .appendChild(document.createElement("div"));
i2.setAttribute("id", "mainDivImg");

document.querySelector("#mainDivImg").style.justifyContent = "space-evenly";

img1 = document
  .querySelector("#mainDivImg")
  .appendChild(document.createElement("img"));

img1.setAttribute("id", "img1");

img2 = document
  .querySelector("#mainDivImg")
  .appendChild(document.createElement("img"));

img2.setAttribute("id", "img2");

img3 = document
  .querySelector("#mainDivImg")
  .appendChild(document.createElement("img"));

img3.setAttribute("id", "img3");

img4 = document
  .querySelector("#mainDivImg")
  .appendChild(document.createElement("img"));

img4.setAttribute("id", "img4");

img5 = document
  .querySelector("#mainDivP1")
  .appendChild(document.createElement("img"));

img5.setAttribute("id", "img5");

function fillImg(id, src) {
  document.getElementById(id).src = src;
}

fillImg("img1", "../arquivos/animals/zoe3.jpg");

fillImg("img2", "../arquivos/animals/abu3.jpg");

fillImg("img3", "../arquivos/animals/zoe1.jpg");

fillImg("img4", "../arquivos/animals/abu2.jpg");

fillImg("img5", "../arquivos/animals/001.png");
