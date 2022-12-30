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
