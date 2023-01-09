//Gra działa tylko dla rozdzielczości 670x767
let x;
let y;
let time;
let result;
let ball = document.querySelector('#ball');
let board = document.querySelector('#board');
let position = document.querySelector('#position');
let hole = document.querySelector('.hole');
let btn = document.getElementsByClassName('startButton');

let ballWidth = ball.clientWidth;
let ballHeight = ball.clientHeight;
let boardWidth = board.clientWidth;
let boardHeight = board.clientHeight;

function handleOrientation(e) {
  time = new Date();

  x = e.beta;
  y = e.gamma;

  x += 50;
  y += 90;

  x < 0 ? (x = 2) : x = x;
  y < 0 ? (y = 2) : y = y;
  
  x > 92 ? (x = 92) : x;
  y > 183 ? (y = 183) : y;

  ball.style.top  = (boardWidth * x / 90 - ballWidth / 2) + "px";
  ball.style.left = (boardHeight * y / 180 - ballHeight / 2) + "px";   
}

window.addEventListener('deviceorientation', function(event) {
  var gamma = event.gamma; 
  var beta = event.beta; 
  checkIfWon(gamma,beta);
  checkIfLost(gamma,beta);
});

function checkIfWon(gamma, beta) {
  if (gamma <= -17 && gamma >= -26 && beta <= -4 && beta >= -7) {
    win();
  }
}

function checkIfLost(gamma,beta) {
  if(gamma <= -65 && gamma >= -69 && beta <= -2 && beta >= -3) {
    lost();
  } else if(gamma <= 71 && gamma >= 68 && beta <= 16 && beta >= 14.5   ) {
    lost();
  } else if(gamma <= 14 && gamma >= 10 && beta <= -19 && beta >= -21) {
    lost();
  }
}

function lost() {
  board.style.background = "red";
}
function win() {
  board.style.background = "green";
}
function newGame() {
  board.style.background = "white";
  ball.beta = 0;
}

window.addEventListener('deviceorientation', handleOrientation);