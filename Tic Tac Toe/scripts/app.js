let editedPlayer = 0

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

const configOverlay = document.getElementById('config-overlay')
const backdrop = document.getElementById('backdrop')
const form = document.querySelector('form')
const errorOutput = document.getElementById('config-error')

const editPlayer1 = document.getElementById('edit-player-1')
const editPlayer2 = document.getElementById('edit-player-2')
const cancelConfig = document.getElementById('cancel-config')

editPlayer1.addEventListener('click', openPlayerConfig)
editPlayer2.addEventListener('click', openPlayerConfig)

cancelConfig.addEventListener('click', closePlayerConfig)
backdrop.addEventListener('click', closePlayerConfig)

form.addEventListener('submit', savePlayerConfig)