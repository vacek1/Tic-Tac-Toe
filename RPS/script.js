const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
let playerTurn = 'X';
let gameOver = false;

// Funkce pro zpracování kliknutí na čtvereček na herním plánu
function handleSquareClick(event) {
  // Pokud je hra u konce, nic se nestane po kliknutí na herní plán
  if (gameOver) {
    return;
  }
  // Pokud je čtvereček již obsazený, nic se nestane po kliknutí na něj
  if (event.target.innerHTML !== '') {
    return;
  }
  // Vložíme do čtverečku symbol hráče
  event.target.innerHTML = playerTurn;
  // Zkontrolujeme, zda hráč vyhrál nebo došlo k remíze
  if (checkWin()) {
    gameOver = true;
    message.innerHTML = playerTurn + ' wins!';
  } else if (checkTie()) {
    gameOver = true;
    message.innerHTML = 'Tie game!';
  } else {
    // Pokud hra nekončí, přepneme hráče
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    message.innerHTML = "It's " + playerTurn + "'s turn.";
  }
}

// Funkce pro kontrolu výhry
function checkWin() {
  // Zde bude kód pro kontrolu, zda hráč vyhrál
}

// Funkce pro kontrolu remízy
function checkTie() {
  // Zde bude kód pro kontrolu, zda došlo k remíze
}

// Připojení funkce pro zpracování kliknutí na čtverečky na herním plánu
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', handleSquareClick);
}

// Funkce pro reset hry
function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
  playerTurn = 'X';
  gameOver = false;
  message.innerHTML = "It's " + playerTurn + "'s turn.";
}

// Připojení funkce pro reset hry na tlačítko reset
resetButton.addEventListener('click', resetGame);

// Spuštění hry
message.innerHTML = "It's " + playerTurn + "'s turn.";
function checkWin() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // řádky
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // sloupce
      [0, 4, 8], [2, 4, 6] // diagonály
    ];
  
    for (let i = 0; i < winningCombos.length; i++) {
      const combo = winningCombos[i];
      const pos1 = combo[0];
      const pos2 = combo[1];
      const pos3 = combo[2];
  
      if (squares[pos1].innerHTML !== '' &&
          squares[pos1].innerHTML === squares[pos2].innerHTML &&
          squares[pos2].innerHTML === squares[pos3].innerHTML) {
        return true; // výhra
      }
    }
  
    return false; // žádná výhra
  }
  
