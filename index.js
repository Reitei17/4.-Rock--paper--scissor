const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const info = document.getElementById('info');
const score = document.getElementById('score');

let scores = JSON.parse(localStorage.getItem('scores')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

const updateScore = function() {
  score.textContent = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
}

let play = function(weapon) {
  const updateInfo = function() {
    info.textContent = `You choose ${weapon}, Comp choose ${comp}`;
  }

  const compWeapon = ['rock', 'paper', 'scissor'];
  let comp = compWeapon[Math.floor(Math.random()*compWeapon.length)];

  if (comp === 'rock') {
    if (weapon === 'rock') {
      updateInfo();
      scores.ties ++;
      updateScore();
    } else if (weapon === 'paper') {
      updateInfo();
      scores.wins ++;
      updateScore();
    } else {
      updateInfo();
      scores.losses ++;
      updateScore();
    }
  } else if (comp === 'paper') {
    if (weapon === 'paper') {
      updateInfo();
      scores.ties ++;
      updateScore();
    } else if (weapon === 'scissor') {
      updateInfo();
      scores.wins ++;
      updateScore();
    } else {
      updateInfo();
      scores.losses ++;
      updateScore();
    }
  } else {
    if (weapon === 'scissor') {
      updateInfo();
      scores.ties ++;
      updateScore();
    } else if (weapon === 'rock') {
      updateInfo();
      scores.wins ++;
      updateScore();
    } else {
      updateInfo();
      scores.losses ++;
      updateScore();
    }
  }
  localStorage.setItem('scores', JSON.stringify(scores));
}

let reset = function() {
  scores.wins = 0;
  scores.losses = 0;
  scores.ties = 0;
  info.textContent = `SCORES CLEARED!`
  updateScore();
  localStorage.setItem('scores', JSON.stringify(scores));
}
