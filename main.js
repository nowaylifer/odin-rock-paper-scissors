let playerScore = 0;
let computerScore = 0;
let rounds = 0;


function game(result) {
  if (rounds < 5) {
    getRoundResult(result);
  } else {
    getRoundResult(result);
  
    if (playerScore > computerScore) {
      console.log('Player won game') 
    } else {
      console.log('Computer won game')
    }
    
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
  }
}


function getRoundResult(result) {
  switch(result) {
    case 'tie':
      playerScore++
      computerScore++
      console.log('Tie round');
      break;
    case 'player':
      playerScore++
      console.log('Player won round');
      break;
    case 'computer':
      console.log('Computer won round');
      computerScore++
      break;
  }
}

const choiceButtons = document.querySelectorAll('button.choice');
choiceButtons.forEach(button => {
  button.addEventListener('click', playRound);
});


function getComputerChoice() {
  switch(Math.floor(Math.random() * 3) + 1) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  };
};


function playRound(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
      rounds++
      game("tie");
  } else if (
      playerChoice === 'rock' && computerChoice === 'scissors' || 
      playerChoice === 'scissors' && computerChoice === 'paper' ||
      playerChoice === 'paper' && computerChoice === 'rock') {
        rounds++
        game("player"); // player win
  } else {
      rounds++
      game("computer"); // computer win
  }
}

