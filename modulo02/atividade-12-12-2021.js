let clients = {
  name: [],
  dueDate: [],
  owed: [],
  tax: [],
  total: [],
};

let i = 0;
let today, dueDay, clientDueDay, days, clientName, clientOwed, clientTax;

function addClient() {
  today = new Date();
  dueDay = new Date(document.querySelector('input[type="date"]').value);
  clientDueDay = document.querySelector('input[type="date"]').value;
  days =
    Math.floor((today.getTime() - dueDay.getTime()) / (3600 * 1000 * 24));
  clientName = document.querySelector('input[type="text"]').value;
  clientOwed = parseFloat(
    document.querySelector('input[type="number"]').value
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
  for (let i = 1; i <= 3; i++) {
    document.getElementById(i).value = "";
  }
}

function calculate() {
  document.getElementById("table").innerHTML = "";

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
  }
}
