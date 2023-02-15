const cells = document.querySelectorAll('td');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.classList.contains('bomb')) {
      // player has clicked on a bomb - game over
      // display a message to the player and reset the game
      alert('Game over!');
resetGame();
    } else {
      // player has clicked on an empty space
      // update the cell's class to indicate it's empty
      cell.classList.add('empty')
      numRevealed++;
      checkWin();
      // check if the player has won the game (i.e. all non-bomb cells have been revealed)
      // display a message to the player if they have won
    }
  });
});
const numBombs = 10; // change this to set the number of bombs
const bombCells = [];

while (bombCells.length < numBombs) {
  const rand = Math.floor(Math.random() * cells.length);
  if (!bombCells.includes(rand)) {
    bombCells.push(rand);
    cells[rand].classList.add('bomb');
  }
}
let numRevealed = 10;

function resetGame() {
  numRevealed = 10;
  cells.forEach(cell => {
    cell.classList.remove('bomb', 'empty');
  });
  bombCells.length = 0;
  while (bombCells.length < numBombs) {
    const rand = Math.floor(Math.random() * cells.length);
    if (!bombCells.includes(rand)) {
      bombCells.push(rand);
      cells[rand].classList.add('bomb');
    }
  }
}

function checkWin() {
  const numNonBombs = cells.length
numBombs;
if (numRevealed === numNonBombs) {
  resetGame();
  alert('You win');
// player has revealed all non-bomb cells - game over
// display a message to the player and reset the game
}
}
