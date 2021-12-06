let win1 = 0,
  win2 = 0,
  win3 = 0;

let laps;

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

document.getElementById("test").innerHTML = ednaCar.model;

function sortCar(driver) {
  d = Math.random() * 100;
  if (d < 61) {
    min = Math.random() * (130 - 110 + 1) + 110;
    max = Math.random() * (200 - 180 + 1) + 180;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 1;
    driver.skid = sortSkid(0.04, 0.03);
    d = 0;
  }else if (d < 96) {
    min = Math.random() * (145 - 125 + 1) + 125;
    max = Math.random() * (215 - 195 + 1) + 195;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 2;
    driver.skid = sortSkid(0.03, 0.02);
    d = 0;
  }else {
    min = Math.random() * (160 - 140 + 1) + 140;
    max = Math.random() * (230 - 210 + 1) + 210;
    driver.speed = Math.random() * (max - min) + min;
    driver.model = 3;
    driver.skid = sortSkid(0.0175, 0.01);
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
    speed1 = ednaCar.speed * (1-ednaCar.skid);
    // console.log(speed1);
    speed2 = pedroCar.speed * (1-pedroCar.skid);
    // console.log(speed2);
    speed3 = jucaCar.speed * (1-jucaCar.skid);
    // console.log(speed3);

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
  clean();
}

function clean() {
  win1 = 0;
  win2 = 0;
  win3 = 0;
  laps = 0;
}
