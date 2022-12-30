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

let playerSelection = prompt("Take Your Turn");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

function playRound(player, computer) {
  if (player === computer) { 
    return 'Tie!';
  } else if (player === 'rock' && computer === 'scissors' || 
             player === 'scissors' && computer === 'paper' ||
             player === 'paper' && computer === 'rock') {
      return 'You win!';
  } else {
      return 'You lose!'
  }
}
