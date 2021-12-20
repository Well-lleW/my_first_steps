let clients = {
  name: [],
  dueDate: [],
  owed: [],
  tax: [],
  total: [],
};

const filterElements = [];

let i = 0;
let today, dueDay, clientDueDay, days, clientName, clientOwed, clientTax;

function addClient() {
  today = new Date();
  dueDay = new Date(document.querySelector('input[type="date"]').value);
  clientDueDay = document.querySelector('input[type="date"]').value;
  days =
    Math.floor((today.getTime() - dueDay.getTime()) / (3600 * 1000 * 24));
  clientName = document.getElementById("1").value;
  clientOwed = parseFloat(
    document.getElementById("3").value
  ).toFixed(2);
  clientTax = days * 0.1;
  
  clients.name[i] = clientName;
  clients.dueDate[i] = clientDueDay;
  clients.owed[i] = clientOwed;
  clients.tax[i] = clientTax;

  let clientTable = "<tr>";
  clientTable += "<td>" + clients.name[i] + "</td>";
  clientTable += "<td>" + clients.dueDate[i] + "</td>";
  clientTable += "<td>" + clients.owed[i] + "</td>";
  clientTable += "<td>" + (2 + clients.tax[i]) + "</td>";
  clientTable += "<td>" + "-" + "</td>";
  clientTable += "</tr>";
  document.getElementById("table").innerHTML += clientTable;

  i++;
  // for (let i = 1; i <= 3; i++) {
  //   document.getElementById(i).value = "";
  // }
}

function calculate() {
  document.getElementById("table").innerHTML = "";
  filterElements.length = 0;

  clients.total = clients.owed.map(x => x * 1.02);

  for (let i = 0; i < clients.name.length; i++) {
  
    clients.total[i] = (clients.total[i] * (1 + clients.tax[i] / 100)).toFixed(2);
    let clientTable = "<tr>";
    clientTable += "<td>" + clients.name[i] + "</td>";
    clientTable += "<td>" + clients.dueDate[i] + "</td>";
    clientTable += "<td>" + clients.owed[i] + "</td>";
    clientTable += "<td>" + (2 + clients.tax[i]) + "</td>";
    clientTable += "<td>" + clients.total[i] + "</td>";
    clientTable += "</tr>";
    document.getElementById("table").innerHTML += clientTable;

    let newClient = {
      name: parseInt(clients.name[i]),
      dueDate: clients.dueDate[i],
      owed: clients.owed[i] * 1,
      tax: clients.tax[i] + 2,
      total: clients.total[i],
    };
    filterElements.push(newClient);
  }
}

function tableform(x) {

  document.getElementById("table").innerHTML = "";

  for (let i = 0; i < x.length; i++) {
    
    let clientTable = "<tr>";
    clientTable += "<td>" + x[i].name + "</td>";
    clientTable += "<td>" + x[i].dueDate + "</td>";
    clientTable += "<td>" + x[i].owed + "</td>";
    clientTable += "<td>" + x[i].tax + "</td>";
    clientTable += "<td>" + x[i].total + "</td>";
    clientTable += "</tr>";
    document.getElementById("table").innerHTML += clientTable;
  }
  return
  };

  function filterFunction () {

    filterElements.length = 0;

  for (let i = 0; i < clients.name.length; i++) {

    let newClient = {
      name: parseInt(clients.name[i]),
      dueDate: clients.dueDate[i],
      owed: clients.owed[i] * 1,
      tax: clients.tax[i] + 2,
      total: clients.total[i],
    };
    filterElements.push(newClient);
  }

};

function filterValue() {

  filterFunction ();

  let valueMin = document.getElementById("6").value;
  let valueMax = document.getElementById("7").value;

  console.log(filterElements);

  if (valueMin != "" && valueMax != "") {
  let result = filterElements.filter(function(filterElements) {
      return filterElements.owed >= valueMin && filterElements.owed <= valueMax;
  });
  console.log(result);
  tableform(result);
  return
  }else if (valueMin != "") {
    let result = filterElements.filter(filterElements => filterElements.owed >= valueMin);
  console.log(result);
  tableform(result);
  return
  }else if (valueMax != "") {
    let result = filterElements.filter(filterElements => filterElements.owed <= valueMax);
  console.log(result);
  tableform(result);
  return
  }
};

function filterDate() {

  filterFunction ();

  let valueMin = document.getElementById("4").value;
  let valueMax = document.getElementById("5").value;

  console.log(filterElements);

  if (valueMin != "" && valueMax != "") {
  let result = filterElements.filter(function(filterElements) {
      return filterElements.dueDate >= valueMin && filterElements.dueDate <= valueMax;
  });
  console.log(result);
  tableform(result);
  return
  }else if (valueMin != "") {
    let result = filterElements.filter(filterElements => filterElements.dueDate >= valueMin);
  console.log(result);
  tableform(result);
  return
  }else if (valueMax != "") {
    let result = filterElements.filter(filterElements => filterElements.dueDate <= valueMax);
  console.log(result);
  tableform(result);
  return
  }
};