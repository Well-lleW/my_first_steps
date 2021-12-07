let win1 = 0,
  win2 = 0,
  win3 = 0;

let laps;
const carGeral = {
  popular: {
    maxMin: 180,
    maxMax: 200,
    minMin: 110,
    minMax: 130,
    skidMin: 0.03,
    skidMAx: 0.04,
  },

  sport: {
    maxMin: 195,
    maxMax: 215,
    minMin: 125,
    minMax: 145,
    skidMin: 0.02,
    skidMAx: 0.03,
  },

  superSport: {
    maxMin: 210,
    maxMax: 230,
    minMin: 140,
    minMax: 160,
    skidMin: 0.01,
    skidMAx: 0.0175,
  },
};
const driverGeral = {
  ednaCar: {
    name: "Edna",
    model: "",
    speed: "",
    skid: "",
  },

  pedroCar: {
    name: "Pedro",
    model: "",
    speed: "",
    skid: "",
  },

  jucaCar: {
    name: "Juca",
    model: "",
    speed: "",
    skid: "",
  },
};

function sortCar(driver) {
  d = Math.random() * 100;
  if (d < 61) {
    min =
      Math.random() * (carGeral.popular.minMax - carGeral.popular.minMin + 1) +
      carGeral.popular.minMin;
    max =
      Math.random() * (carGeral.popular.maxMax - carGeral.popular.maxMin + 1) +
      carGeral.popular.maxMin;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 1;
    driver.skid = sortSkid(carGeral.popular.skidMAx, carGeral.popular.skidMin);
    d = 0;
  } else if (d < 96) {
    min =
      Math.random() * (carGeral.sport.minMax - carGeral.sport.minMin + 1) +
      carGeral.sport.minMin;
    max =
      Math.random() * (carGeral.sport.maxMax - carGeral.sport.maxMin + 1) +
      carGeral.sport.maxMin;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 2;
    driver.skid = sortSkid(carGeral.sport.skidMAx, carGeral.sport.skidMin);
    d = 0;
  } else {
    min =
      Math.random() *
        (carGeral.superSport.minMax - carGeral.superSport.minMin + 1) +
      carGeral.superSport.minMin;
    max =
      Math.random() *
        (carGeral.superSport.maxMax - carGeral.superSport.maxMin + 1) +
      carGeral.superSport.maxMin;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 3;
    driver.skid = sortSkid(
      carGeral.superSport.skidMAx,
      carGeral.superSport.skidMin
    );
    d = 0;
  }
}

function sortSkid(maxSkid, minSkid) {
  return Math.random() * (maxSkid - minSkid) + minSkid;
}

function startRace() {
  laps = document.querySelector("input[name=raceType]:checked").value;
  for (let i = 0; i < laps; i++) {
    sortCar(driverGeral.ednaCar);
    sortCar(driverGeral.jucaCar);
    sortCar(driverGeral.pedroCar);

    speed1 = driverGeral.ednaCar.speed * (1 - driverGeral.ednaCar.skid);
    speed2 = driverGeral.pedroCar.speed * (1 - driverGeral.pedroCar.skid);
    speed3 = driverGeral.jucaCar.speed * (1 - driverGeral.jucaCar.skid);

    if (speed1 > speed2 && speed1 > speed3) {
      win1 += 1;
    } else if (speed2 > speed3) {
      win2 += 1;
    } else {
      win3 += 1;
    }
  }
  if (win1 > win2 && win1 > win3) {
    document.getElementById("leaderboard").innerHTML =
      driverGeral.ednaCar.name +
      " ganhou " +
      win1 +
      " das " +
      laps +
      " voltas!";
  } else if (win2 > win3) {
    document.getElementById("leaderboard").innerHTML =
      driverGeral.pedroCar.name +
      " ganhou " +
      win2 +
      " das " +
      laps +
      " voltas!";
  } else {
    document.getElementById("leaderboard").innerHTML =
      driverGeral.jucaCar.name +
      " ganhou " +
      win3 +
      " das " +
      laps +
      " voltas!";
  }
  document.getElementById("table").innerHTML =
    "</br>" + driverGeral.ednaCar.name + " ganhou " + win1;
  document.getElementById("table").innerHTML +=
    "</br>" + driverGeral.pedroCar.name + " ganhou " + win2;
  document.getElementById("table").innerHTML +=
    "</br>" + driverGeral.jucaCar.name + " ganhou " + win3;

  let raceHistory = "<tr>";
  raceHistory += "<td>" + driverGeral.ednaCar.name + "</td>";
  // raceHistory += "<td>" + parseInt(ednaCar.speed) + "</td>";
  // raceHistory += "<td>" + parseFloat(ednaCar.skid).toFixed(3) + "</td>";
  raceHistory += "<td>" + win1 + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML = raceHistory;

  raceHistory = "";

  raceHistory = "<tr>";
  raceHistory += "<td>" + driverGeral.pedroCar.name + "</td>";
  // raceHistory += "<td>" + parseInt(pedroCar.speed) + "</td>";
  // raceHistory += "<td>" + parseFloat(pedroCar.skid).toFixed(3) + "</td>";
  raceHistory += "<td>" + win2 + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML += raceHistory;

  raceHistory = "";

  raceHistory = "<tr>";
  raceHistory += "<td>" + driverGeral.jucaCar.name + "</td>";
  // raceHistory += "<td>" + parseInt(jucaCar.speed) + "</td>";
  // raceHistory += "<td>" + parseFloat(jucaCar.skid).toFixed(3) + "</td>";
  raceHistory += "<td>" + win3 + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML += raceHistory;
  document.getElementById("bigTable").style.display = "block";

  clean();
}

function clean() {
  win1 = 0;
  win2 = 0;
  win3 = 0;
  laps = 0;
}
