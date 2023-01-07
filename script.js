'use strict'

const choiceButtons = document.querySelectorAll('button.choice');
let playerScoreShown = document.querySelector('#player-score');
let cpuScoreShown = document.querySelector('#cpu-score');
let roundResultShown = document.querySelector('#round-result');

let playerScore = 0;
let cpuScore = 0;


choiceButtons.forEach(button => {
  button.addEventListener('click', clickHandle);
});


function isGameOver() {
  if (playerScore === 5 || cpuScore === 5) return true;
  else return false;
}


function clickHandle(e) {
  if (isGameOver()) return;
  
  const choices = ['rock', 'paper', 'scissors'];
  let playerSelection = e.target.id;
  let cpuSelection = choices[Math.floor(Math.random() * choices.length)];
  let winner = playRound(playerSelection, cpuSelection);
  
  updateRoundResult(winner, playerSelection, cpuSelection);
  
  if ( isGameOver() ) {
    declareWinner();
    playAgain();
  }
}


function playRound(playerSelection, cpuSelection) {
  let whoIsWinner;
  const cpuWinCases = [ 
    ['rock', 'scissors'], 
    ['scissors', 'paper'], 
    ['paper', 'rock'] 
  ];
  
  if (playerSelection === cpuSelection) {
    whoIsWinner = 'tie';
    cpuScore++
    playerScore++
  } else if ((function() {
      for (let i = 0; i < cpuWinCases.length; i++) {
        if (cpuSelection === cpuWinCases[i][0] && playerSelection === cpuWinCases[i][1]) {
          return true;
        }
      }
      return false;
    })()) {
      whoIsWinner = 'cpu';
      cpuScore++
  } else {
      whoIsWinner = 'player';
      playerScore++
  }

  return whoIsWinner;
}


function updateRoundResult(winner, playerSelection, cpuSelection) {
  updateScores();
  
  if (winner === 'tie') {
    roundResultShown.textContent = `Tie! You both threw ${playerSelection}.`
  } else if (winner === 'cpu') {
    roundResultShown.textContent = `You lose! ${capitalize(cpuSelection)} beats ${playerSelection}.`;
  } else if (winner === 'player') {
    roundResultShown.textContent = `You win! ${capitalize(playerSelection)} beats ${cpuSelection}.`;
  }
}


function declareWinner() {
  let winnerShown = document.createElement('div');
  winnerShown.id = 'winner-shown';
  
  if (playerScore > cpuScore) {
    winnerShown.textContent = "You win game! Congrats!";
  } else {
    winnerShown.textContent = "You lose game! Shame!";
  }

  document.body.appendChild(winnerShown);
}


function playAgain() {
  let playAgainButton = document.createElement('button');
  playAgainButton.textContent = "Play again?";

  document.body.appendChild(playAgainButton);

  playAgainButton.addEventListener('click', () => {
    document.getElementById('winner-shown').remove();
    roundResultShown.textContent = "";
    playerScore = 0;
    cpuScore = 0;
    updateScores();
    playAgainButton.remove();
  });
}


function updateScores() {
  cpuScoreShown.textContent = `${cpuScore}`;
  playerScoreShown.textContent = `${playerScore}`;
}


function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}