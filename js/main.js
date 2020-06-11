var Player = (function () {
    function Player() {
    }
    return Player;
}());
var playerOne = new Player();
var playerTwo = new Player();
window.onload = startGame;
var rollDieButton = document.getElementById("rollBttn");
rollDieButton.onclick = rollDie;
var holdButton = document.getElementById("holdScorebttn");
holdButton.onclick = hold;
function startGame() {
    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.activePlayer = true;
    playerTwo.activePlayer = false;
}
function rollDie() {
    var die = Math.floor(Math.random() * (7 - 1) + 1);
    document.getElementById("dieResult").innerText = parseInt(die);
    if (playerOne.activePlayer == true) {
        document.getElementById("activePlayerSpan").innerText = "Player One";
        if (die == 1) {
            playerOne.score = 0;
            document.getElementById("currScore1").innerText = playerOne.score;
            playerOne.activePlayer = false;
            playerTwo.activePlayer = true;
            die = 0;
        }
        else {
            playerOne.score += die;
            document.getElementById("currScore1").innerText = playerOne.score;
        }
    }
    if (playerTwo.activePlayer == true) {
        document.getElementById("activePlayerSpan").innerText = "Player Two";
        if (die == 1) {
            playerTwo.score = 0;
            document.getElementById("currScore2").innerText = playerTwo.score;
            playerOne.activePlayer = true;
            playerTwo.activePlayer = false;
        }
        else {
            playerTwo.score += die;
            document.getElementById("currScore2").innerText = playerTwo.score;
        }
    }
    endGame();
}
function hold() {
    if (playerOne.activePlayer == true) {
        playerOne.activePlayer = false;
    }
    if (playerTwo.activePlayer == true) {
        playerTwo.activePlayer = false;
    }
}
function endGame() {
    if (playerOne.score >= 100) {
        document.getElementById("winner").innerText = "Player one won!";
    }
    if (playerTwo.score >= 100) {
        document.getElementById("winner").innerText = "Player two won!";
    }
}
