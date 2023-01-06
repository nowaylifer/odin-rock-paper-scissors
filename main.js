function getComputerChoice() {
  switch(Math.floor(Math.random() * 3) + 1) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors'
  }
}


function playRound() {
  let playerSelection = prompt("Take Your Turn");
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = getComputerChoice();
  
  if (playerSelection === computerSelection) { 
      return 'Tie!';
  } else if (
      playerSelection === 'rock' && computerSelection === 'scissors' || 
      playerSelection === 'scissors' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'rock') {
      return 'You win!';
  } else {
      return 'You lose!'
  }
}


function game(n) {
  for (let i = 0; i < n; i++) {
    console.log(playRound());
 }
}
