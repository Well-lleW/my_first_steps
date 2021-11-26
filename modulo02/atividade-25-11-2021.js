let numPao = "";
let numBurguer = "";
let numSalada = "";
let numQueijo = "";
let pao = "Francês";
let burguer = "Picanha";
let salada = "Alface";
let queijo = "Mussarela";
let pedido = "";
let paoV = 3;
let burguerV = 13; 
let saladaV = 1.5;
let queijoV = 3;

function funcaoPao(numPao) {
  if (numPao === 1) {
    pao = "Francês";
    paoV = 3;
  } else if (numPao === 2) {
    pao = "Australiano";
    paoV = 8;
  } else if (numPao === 3){
    pao = "Brioche";
    paoV = 6;
  }

}

function funcaoBurguer(numBurguer) {
    if (numBurguer === 1) {
      burguer = "Picanha";
      burguerV = 13; 
    } else if (numBurguer === 2) {
      burguer = "Costela";
      burguerV = 10; 
    } else if (numBurguer === 3){
      burguer = "Vegano";
      burguerV = 12; 
  }

}

function funcaoSalada(numSalada) {
    if (numSalada === 1) {
      salada = "Alface";
      saladaV = "1.5";
    } else if (numSalada === 2){
      salada = "Tomate";
      saladaV = "1.5";
      } else if (numSalada === 3){
      salada = "Sem Salada";
      saladaV = "0";
  }

}

function funcaoQueijo(numQueijo) {
    if (numQueijo === 1) {
      queijo = "Mussarela";
      queijoV = "3";
    } else if (numQueijo === 2){
      queijo = "Prato";
      queijoV = "3";
    } else if (numQueijo === 3){
      queijo = "Cheddar";
      queijoV = "5";
  }

}

function funcaoPedido() {
    let chapeiro = document.getElementById("chapeiro")
    pedido = parseFloat(paoV) + parseFloat(burguerV) + parseFloat(saladaV) + parseFloat(queijoV);
    let comanda = "<tr>";
    comanda += "<td>" + pao + "</td>";
    comanda += "<td>" + burguer + "</td>";
    comanda += "<td>" + salada + "</td>";
    comanda += "<td>" + queijo + "</td>";
    comanda += "<td>" + pedido + "</td>";
    comanda += "</tr>";

    chapeiro.innerHTML += comanda;

    return true;
}
