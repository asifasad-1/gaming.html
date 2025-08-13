let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let isauto = false;
let intervalid;

function autoplay() {
  if (!isauto) {
    intervalid = setInterval(function () {
      const playerMove = pickComputermove();
      playgame(playerMove);
    }, 1000);
    isauto = true;
  } else {
    clearInterval(intervalid);
    isauto = false;
  }
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playgame('Rock');
  } else if (event.key === 'p') {
    playgame('Paper');
  } else if (event.key === 's') {
    playgame('Scissor');
  } else if (event.key === 'a') {
    autoplay();
  } else if (event.key === 'o') {
    resetScore();
  }
});

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updateScoreElement();
}

function playgame(playerMove) {
  localStorage.setItem('playerMove', playerMove);
  window.location.href = 'shake.html';
}

function updateScoreElement() {
  document.querySelector('#wins').textContent = score.wins;
  document.querySelector('#losses').textContent = score.losses;
  document.querySelector('#ties').textContent = score.ties;
}

function pickComputermove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissor';
  }
}
