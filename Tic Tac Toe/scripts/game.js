function startNewGame() {
    if(players[0].name === '' || players[1].name === '') {
    gameArea.style.display = 'none';
    nameError.textContent = 'Please enter both player names to start new game'
    }
    else {
        activePlayerName.textContent = players[activePlayer].name;
        gameArea.style.display = 'block';
        nameError.textContent = '';
    }
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    }
    else {
        activePlayer = 0
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(e) {

    const selectedField = e.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if(gameData[selectedRow][selectedColumn] > 0) {
        return
    }

    e.target.textContent = players[activePlayer].symbol;
    e.target.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1; 
    console.log(gameData)

    switchPlayer();
}