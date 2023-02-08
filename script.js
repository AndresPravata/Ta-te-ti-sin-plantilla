const cells = document.querySelectorAll("td");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.textContent === "") {
      this.textContent = currentPlayer;
      checkForWinningCombination();
      switchPlayer();
    }
  });
}

function checkForWinningCombination() {
  // Verificar las combinaciones ganadoras aquí
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function checkForWinningCombination() {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      alert(`Jugador ${currentPlayer} ha ganado!`);
      return;
    }
  }

  let draw = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      draw = false;
      break;
    }
  }
  if (draw) {
    alert("Empate!");
  }
}
const BOARD_SIZE = 3;
const PLAYERS = ["X", "O"];

const board = [];
for (let i = 0; i < BOARD_SIZE; i++) {
  board[i] = [];
  for (let j = 0; j < BOARD_SIZE; j++) {
    board[i][j] = "";
  }
}

let currentPlayerIndex = 0;
let winner = null;
let draw = false;
