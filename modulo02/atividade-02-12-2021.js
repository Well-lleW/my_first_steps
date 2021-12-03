let player = 1;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function playerMove(mv1, mv2) {
  if (player === 1) {
    board[mv1][mv2] = 1;
    document.getElementById("b-" + mv1 + "-" + mv2).innerHTML = "O";
    document.getElementById("b-" + mv1 + "-" + mv2).disabled = true;
    winner(player);
    player = 2;
  } else {
    board[mv1][mv2] = 2;  
    document.getElementById("b-" + mv1 + "-" + mv2).innerHTML = "X";
    document.getElementById("b-" + mv1 + "-" + mv2).disabled = true;
    winner(player);
    player = 1;
  }
}

function winner(player) {
  console.log(player);
  if ((board[0][0] === player && board[0][1] === player && board[0][2] === player) || 
    (board[1][0] === player && board[1][1] === player && board[1][2] === player) || 
    (board[2][0] === player && board[2][1] === player && board[2][2] === player) || 
    (board[0][0] === player && board[1][0] === player && board[2][0] === player) || 
    (board[0][1] === player && board[1][1] === player && board[2][1] === player) || 
    (board[0][2] === player && board[1][2] === player && board[2][2] === player) || 
    (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||  
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        for (let i = 0; 3 > i; i++) {
          for (let j = 0; 3 > j; j++) {
            document.getElementById("b-" + i + "-" + j).disabled = true;
          }
        }
        document.getElementById("winner").innerHTML = "O jogador " +player +" ganhou!"
      }
}

function reset() {
  for (let i = 0; 3 > i; i++) {
    for (let j = 0; 3 > j; j++) {
      document.getElementById("b-" + i + "-" + j).innerHTML = "";
      document.getElementById("b-" + i + "-" + j).disabled = false;
    }
  }
  player = 1;
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  document.getElementById("winner").innerHTML = "";
}
