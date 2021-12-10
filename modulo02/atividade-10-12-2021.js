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
const driverGeral = [
  {
    name: "Edna",
    model: "",
    speed: "",
    skid: "",
    exp: 0,
    lvl: 0,
    win: 0,
  },

  {
    name: "Pedro",
    model: "",
    speed: "",
    skid: "",
    exp: 0,
    lvl: 0,
    win: 0,
  },

  {
    name: "Juca",
    model: "",
    speed: "",
    skid: "",
    exp: 0,
    lvl: 0,
    win: 0,
  },
];

const drivers = [0, 1, 2];

function sortCar(i) {
  d = Math.random() * 100;
  if (d < 61) {
    min =
      Math.random() * (carGeral.popular.minMax - carGeral.popular.minMin + 1) +
      carGeral.popular.minMin;
    max =
      Math.random() * (carGeral.popular.maxMax - carGeral.popular.maxMin + 1) +
      carGeral.popular.maxMin;
    driverGeral[i].speed = Math.random() * (max - min) + min;
    driverGeral[i].model = 1;
    driverGeral[i].skid = sortSkid(
      carGeral.popular.skidMAx,
      carGeral.popular.skidMin
    );
    d = 0;
  } else if (d < 96) {
    min =
      Math.random() * (carGeral.sport.minMax - carGeral.sport.minMin + 1) +
      carGeral.sport.minMin;
    max =
      Math.random() * (carGeral.sport.maxMax - carGeral.sport.maxMin + 1) +
      carGeral.sport.maxMin;
    driverGeral[i].speed = Math.random() * (max - min) + min;
    driverGeral[i].model = 2;
    driverGeral[i].skid = sortSkid(
      carGeral.sport.skidMAx,
      carGeral.sport.skidMin
    );
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
    driverGeral[i].speed = Math.random() * (max - min) + min;
    driverGeral[i].model = 3;
    driverGeral[i].skid = sortSkid(
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
  document.getElementById("totalTable").innerHTML = "";
  for (let i = 0; i < laps; i++) {
    drivers.forEach((element) => sortCar(element));

    speed1 =
      driverGeral[0].speed *
      (1 - driverGeral[0].skid) *
      (1 + driverGeral[0].lvl / 100);
    speed2 =
      driverGeral[1].speed *
      (1 - driverGeral[1].skid) *
      (1 + driverGeral[1].lvl / 100);
    speed3 =
      driverGeral[0].speed *
      (1 - driverGeral[1].skid) *
      (1 + driverGeral[1].lvl / 100);

    if (speed1 > speed2 && speed1 > speed3) {
      win1 += 1;
      document.getElementById("totalTable").innerHTML +=
        "<tr>" +
        "<td>" +
        (i + 1) +
        "</td>" +
        "<td>" +
        "Edna" +
        "</td>" +
        "</tr>";
    } else if (speed2 > speed3) {
      win2 += 1;
      document.getElementById("totalTable").innerHTML +=
        "<tr>" +
        "<td>" +
        (i + 1) +
        "</td>" +
        "<td>" +
        "Pedro" +
        "</td>" +
        "</tr>";
    } else {
      win3 += 1;
      document.getElementById("totalTable").innerHTML +=
        "<tr>" +
        "<td>" +
        (i + 1) +
        "</td>" +
        "<td>" +
        "Juca" +
        "</td>" +
        "</tr>";
    }
  }
  if (win1 > win2 && win1 > win3) {
    document.getElementById("leaderboard").innerHTML =
      driverGeral[0].name + " ganhou " + win1 + " das " + laps + " voltas!";
  } else if (win2 > win3) {
    document.getElementById("leaderboard").innerHTML =
      driverGeral[1].name + " ganhou " + win2 + " das " + laps + " voltas!";
  } else {
    document.getElementById("leaderboard").innerHTML =
      driverGeral[2].name + " ganhou " + win3 + " das " + laps + " voltas!";
  }

  function lvlUp() {
    console.log(driverGeral[0]);
    console.log(driverGeral[1]);
    console.log(driverGeral[2]);
    if (driverGeral[2].exp < 250 && driverGeral[2].lvl < 10) {
      driverGeral[2].exp += 200;
    }else if (driverGeral[2].exp >= 250 && driverGeral[2].lvl < 10) {
      driverGeral[2].exp -= 250;
      driverGeral[2].lvl += 1;
    }else {
      driverGeral[2].exp = 0;
    }
    if (driverGeral[1].exp < 300 && driverGeral[1].lvl < 10) {
      driverGeral[1].exp += 150;
      if (driverGeral[1].exp >= 300 && driverGeral[1].lvl < 10) {
        driverGeral[1].exp -= 300;
        driverGeral[1].lvl += 1;
      }
    } else {
      driverGeral[1].exp = 0;
    }
    if (driverGeral[0].exp < 400 && driverGeral[0].lvl < 10) {
      driverGeral[0].exp += 50;
      if (driverGeral[0].exp >= 400 && driverGeral[0].lvl < 10) {
        driverGeral[0].exp -= 400;
        driverGeral[0].lvl += 1;
      }
    } else {
      driverGeral[0].exp = 0;
    }
  }
  driverGeral[0].win = win1;
  driverGeral[1].win = win2;
  driverGeral[2].win = win3;
  driverGeral.sort(function (a, b) {
    return a.win - b.win;
  });
  lvlUp();
  let raceHistory = "<tr>";
  raceHistory += "<td>" + driverGeral[0].name + "</td>";
  raceHistory += "<td>" + driverGeral[0].lvl + "</td>";
  raceHistory += "<td>" + driverGeral[0].exp + "</td>";
  raceHistory += "<td>" + driverGeral[0].win + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML = raceHistory;

  raceHistory = "";

  raceHistory = "<tr>";
  raceHistory += "<td>" + driverGeral[1].name + "</td>";
  raceHistory += "<td>" + driverGeral[1].lvl + "</td>";
  raceHistory += "<td>" + driverGeral[1].exp + "</td>";
  raceHistory += "<td>" + driverGeral[1].win + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML += raceHistory;

  raceHistory = "";

  raceHistory = "<tr>";
  raceHistory += "<td>" + driverGeral[2].name + "</td>";
  raceHistory += "<td>" + driverGeral[2].lvl + "</td>";
  raceHistory += "<td>" + driverGeral[2].exp + "</td>";
  raceHistory += "<td>" + driverGeral[2].win + "</td>";
  raceHistory += "</tr>";
  document.getElementById("table").innerHTML += raceHistory;
  document.getElementById("bigTable").style.display = "block";
  document.getElementById("totalWins").style.display = "block";

  console.log(driverGeral);

  clean();
}

function clean() {
  win1 = 0;
  win2 = 0;
  win3 = 0;
  laps = 0;
}
