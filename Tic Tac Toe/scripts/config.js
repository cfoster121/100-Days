function openPlayerConfig(e) {
    editedPlayer = +e.target.dataset.playerid;
    configOverlay.style.display = 'block';
    backdrop.style.display = 'block'
}

function closePlayerConfig() {
    configOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    errorOutput.textContent = '';
    form.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const enteredPlayerName = formData.get('playername').trim();

    if (!enteredPlayerName) {
        errorOutput.textContent = 'Please enter a valid name';
        return
    }
    
    const updatedPlayerData = document.getElementById('player-' + editedPlayer + '-data')
    updatedPlayerData.children[1].textContent = enteredPlayerName
    
    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}
