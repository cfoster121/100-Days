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

    const winner = checkGameOver();
    console.log(winner)

    currentRound++;
    switchPlayer();
}

function checkGameOver() {
    for(let i=0; i<=2; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][0] === gameData[i][2]
        )
        return gameData[i][0]
    }

    for(let i=0; i<=2; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        )
        return gameData[0][i]
    }

    if(gameData[0][0] >0 &&
       gameData[0][0 ]=== gameData[1][1] && 
       gameData[1][1] === gameData[2][2])
       {return gameData[0][0]}

       if(gameData[0][2] >0 &&
        gameData[0][2 ]=== gameData[1][1] && 
        gameData[1][1] === gameData[2][0])
        {return gameData[2][0]}   

    if(currentRound === 9) {
        return -1
    }
        return 0;
}

