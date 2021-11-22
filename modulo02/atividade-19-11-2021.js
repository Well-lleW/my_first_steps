g = document.querySelector("#mainDiv1").appendChild(document.createElement("div"));
g.setAttribute("id", "mainDivH1");
document.querySelector("#mainDivH1").appendChild(document.createElement("h1"));
document.querySelector("h1").innerHTML = "MAMONAS ASSASSINAS"
p1 = document.querySelector("#mainDiv2").appendChild(document.createElement("div"));
p1.setAttribute("id", "mainDivP1");
document.querySelector("#mainDivP1").appendChild(document.createElement("p"));
document.querySelector("p").innerHTML = "The musical style of Mamonas Assassinas members employed a humorous mixture between rock and a wide range of styles. They often borrowed elements from other music, among which were the main riff of the Portuguese Vira (Vira-Vira), Northeastern Brazilian rhythms like forró (Jumento Celestino), Mexican music (Pelados em Santos), heavy metal (Débil Metal), sertanejo (Bois Dont Cry), and even pagode (Lá Vem o Alemão). This combination can be easily checked at their videos, where various references to many cultures were found."
i = document.querySelector("#mainDiv3").appendChild(document.createElement("div"));
i.setAttribute("id", "mainDivImg");
document.querySelector("#mainDivImg").style.display = "flex";
document.querySelector("#mainDivImg").style.justifyContent = "space-evenly"
img1 = document.querySelector("#mainDivImg").appendChild(document.createElement("img"));
img2 = document.querySelector("#mainDivImg").appendChild(document.createElement("img"));
img1.setAttribute("id", "img1");
img2.setAttribute("id", "img2");
document.querySelector("#img1").src = "/arquivos/mamonas/1.jpg"
document.querySelector("#img1").style.width = "30vw"
document.querySelector("#img2").src = "/arquivos/mamonas/2.jpg"
document.querySelector("#img2").style.width = "30vw"