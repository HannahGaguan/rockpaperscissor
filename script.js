const buttons = document.querySelectorAll('.btn');
const computerChoice = document.getElementById('computer-choice');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerIndex = Math.floor(Math.random() * 3);
    const computerSelection = choices[computerIndex];
    computerChoice.innerHTML = `Computer chose ${computerSelection}`;

    const playerSelection = button.id;

    if (playerSelection === 'rock' && computerSelection === 'Scissors' ||
        playerSelection === 'paper' && computerSelection === 'Rock' ||
        playerSelection === 'scissors' && computerSelection === 'Paper') {
      alert('You win!');
    } else if (playerSelection === computerSelection) {
      alert('Tie!');
    } else {
      alert('You lose!');
    }
  });
});
