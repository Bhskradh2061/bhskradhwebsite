const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('#choices button');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = playRound(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
  });
});

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

let playerScore = 0;
let computerScore = 0;

function displayResult(result, playerChoice, computerChoice) {
  const message = document.querySelector('#message');
  message.textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. You ${result}!`;

  const score = document.querySelector('#score');
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}