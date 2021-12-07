let win1 = 0,
  win2 = 0,
  win3 = 0;

let laps;

const popular = {
  maxMin: 180,
  maxMax: 200,
  minMin: 110,
  minMax: 130,
  skidMin: 0.03,
  skidMAx: 0.04,
};

const sport = {
  maxMin: 195,
  maxMax: 215,
  minMin: 125,
  minMax: 145,
  skidMin: 0.02,
  skidMAx: 0.03,
};

const superSport = {
  maxMin: 210,
  maxMax: 230,
  minMin: 140,
  minMax: 160,
  skidMin: 0.01,
  skidMAx: 0.0175,
};

const ednaCar = {
  name: "Edna",
  model: "",
  speed: "",
  skid: "",
};

const pedroCar = {
  name: "Pedro",
  model: "",
  speed: "",
  skid: "",
};

const jucaCar = {
  name: "Juca",
  model: "",
  speed: "",
  skid: "",
};

function sortCar(driver) {
  d = Math.random() * 100;
  if (d < 61) {
    min =
      Math.random() * (popular.minMax - popular.minMin + 1) + popular.minMin;
    max =
      Math.random() * (popular.maxMax - popular.maxMin + 1) + popular.maxMin;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 1;
    driver.skid = sortSkid(popular.skidMAx, popular.skidMin);
    d = 0;
  } else if (d < 96) {
    min = Math.random() * (sport.minMax - sport.minMin + 1) + sport.minMin;
    max = Math.random() * (sport.maxMax - sport.maxMin + 1) + sport.maxMin;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 2;
    driver.skid = sortSkid(sport.skidMAx, sport.skidMin);
    d = 0;
  } else {
    min =
      Math.random() * (superSport.minMax - superSport.minMin + 1) +
      superSport.minMin;
    max =
      Math.random() * (superSport.maxMax - superSport.maxMin + 1) +
      superSport.maxMin;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 3;
    driver.skid = sortSkid(superSport.skidMAx, popular.skidMin);
    d = 0;
  }
}

function sortSkid(maxSkid, minSkid) {
  return Math.random() * (maxSkid - minSkid) + minSkid;
}

function startRace() {
  laps = document.querySelector("input[name=raceType]:checked").value;
  for (let i = 0; i < laps; i++) {
    sortCar(ednaCar);
    sortCar(jucaCar);
    sortCar(pedroCar);
    console.log(ednaCar);
    console.log(pedroCar);
    console.log(jucaCar);
    speed1 = ednaCar.speed * (1 - ednaCar.skid);
    speed2 = pedroCar.speed * (1 - pedroCar.skid);
    speed3 = jucaCar.speed * (1 - jucaCar.skid);

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
      ednaCar.name + " ganhou " + win1 + " das " + laps + " voltas!";
  } else if (win2 > win3) {
    document.getElementById("leaderboard").innerHTML =
      pedroCar.name + " ganhou " + win2 + " das " + laps + " voltas!";
  } else {
    document.getElementById("leaderboard").innerHTML =
      jucaCar.name + " ganhou " + win3 + " das " + laps + " voltas!";
  }
  document.getElementById("table").innerHTML =
    "</br>" + ednaCar.name + " ganhou " + win1;
  document.getElementById("table").innerHTML +=
    "</br>" + pedroCar.name + " ganhou " + win2;
  document.getElementById("table").innerHTML +=
    "</br>" + jucaCar.name + " ganhou " + win3;

  let raceHistory = "<tr>";
  raceHistory += "<td>" + ednaCar.name + "</td>";
  // raceHistory += "<td>" + parseInt(ednaCar.speed) + "</td>";
  // raceHistory += "<td>" + parseFloat(ednaCar.skid).toFixed(3) + "</td>";
  raceHistory += "<td>" + win1 + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML = raceHistory;

  raceHistory = "";

  raceHistory = "<tr>";
  raceHistory += "<td>" + pedroCar.name + "</td>";
  // raceHistory += "<td>" + parseInt(pedroCar.speed) + "</td>";
  // raceHistory += "<td>" + parseFloat(pedroCar.skid).toFixed(3) + "</td>";
  raceHistory += "<td>" + win2 + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML += raceHistory;

  raceHistory = "";

  raceHistory = "<tr>";
  raceHistory += "<td>" + jucaCar.name + "</td>";
  // raceHistory += "<td>" + parseInt(jucaCar.speed) + "</td>";
  // raceHistory += "<td>" + parseFloat(jucaCar.skid).toFixed(3) + "</td>";
  raceHistory += "<td>" + win3 + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML += raceHistory;
  document.getElementById("bigTable").style.display = 'block';

  clean();
}

function clean() {
  win1 = 0;
  win2 = 0;
  win3 = 0;
  laps = 0;
}
