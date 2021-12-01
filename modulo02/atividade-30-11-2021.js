let car1 = "Pedro",
  car2 = "Juca",
  car3 = "Edna";
let win1 = 0,
  win2 = 0,
  win3 = 0;
var speed1 = 0,
  speed2 = 0,
  speed3 = 0;
const skid1 = 0.97,
  skid2 = 0.95,
  skid3 = 0.99;
var laps;

function startRace() {
  function getRandomInt(min, max) {
    return Math.random() * (max - min + 1) + min;
  }
  laps = document.querySelector("input[name=raceType]:checked").value;
  for (let i = 0; i < laps; i++) {
    speed1 = getRandomInt(150, 230) * skid1;
    speed2 = getRandomInt(120, 260) * skid2;
    speed3 = getRandomInt(180, 220) * skid3;

    if (speed1 > speed2 && speed1 > speed3) {
      win1 += 1;
    } else if (speed2 > speed3) {
      win2 += 1;
    } else {
      win3 += 1;
    }
  }
  console.log(speed1);
  console.log(speed2);
  console.log(speed3);
  console.log(win1);
  console.log(win2);
  console.log(win3);
  if (win1 > win2 && win1 > win3) {
    document.getElementById("leaderboard").innerHTML =
      car1 + " ganhou " + win1 + " das " + laps + " voltas!";
  } else if (win2 > win3) {
    document.getElementById("leaderboard").innerHTML =
      car2 + " ganhou " + win2 + " das " + laps + " voltas!";
  } else {
    document.getElementById("leaderboard").innerHTML =
      car3 + " ganhou " + win3 + " das " + laps + " voltas!";
  }
  clean();
}

function clean() {
  win1 = 0;
  win2 = 0;
  win3 = 0;
  laps = 0;
}
