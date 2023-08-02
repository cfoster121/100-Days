let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const players = [
    {
        name: '',
        symbol: 'X'
    }, 
    {
        name: '',
        symbol: 'O'
    }
]

const configOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const form = document.querySelector('form');
const errorOutput = document.getElementById('config-error');
const gameArea = document.getElementById('active-game');
const nameError = document.getElementById('name-error');
const activePlayerName = document.getElementById('active-player-name');
const gameOver = document.getElementById('game-end');
const gameWinner = document.getElementById('winning-player');

const editPlayer1 = document.getElementById('edit-player-1');
const editPlayer2 = document.getElementById('edit-player-2');
const cancelConfig = document.getElementById('cancel-config');
const startGame = document.getElementById('start-game');
const gameFieldElements = document.querySelectorAll('#game-board li');

editPlayer1.addEventListener('click', openPlayerConfig);
editPlayer2.addEventListener('click', openPlayerConfig);

cancelConfig.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerConfig);

startGame.addEventListener('click', startNewGame);

for(const element of gameFieldElements) {
    element.addEventListener('click', selectGameField)
}