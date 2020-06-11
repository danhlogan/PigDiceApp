class Player
{
     activePlayer: boolean;
     score: number;
}

let playerOne = new Player();
let playerTwo = new Player();

window.onload = startGame

let rollDieButton = document.getElementById("rollBttn")
rollDieButton.onclick = rollDie

let holdButton = document.getElementById("holdScorebttn")
holdButton.onclick = hold


function startGame()
{
    playerOne.score = 0;
    playerTwo.score = 0;

    playerOne.activePlayer = true;
    playerTwo.activePlayer = false;
}


function rollDie()
{
    let die = Math.floor(Math.random() * (7 - 1) + 1)
    document.getElementById("dieResult").innerText = die

    // Makes each roll new color to be sure the die
    let r = (Math.random() * 255)
    let b = (Math.random() * 255)
    let g = (Math.random() * 255) 
    let col = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("dieResult").style.color = col


    if(playerOne.activePlayer == true)
    {
        document.getElementById("activePlayerSpan").innerText = "Player One"
        if(die == 1)
        {
            playerOne.score = 0
            document.getElementById("activePlayerSpan").innerText = "Player Two"
            document.getElementById("currScore1").innerText = playerOne.score
            playerOne.activePlayer = false
            playerTwo.activePlayer = true
            die = 0
        }

        else
        {
            playerOne.score += die
            document.getElementById("currScore1").innerText = playerOne.score
        }
    }

    if(playerTwo.activePlayer == true)
    {
        document.getElementById("activePlayerSpan").innerText = "Player Two"
        if(die == 1)
        {
            playerTwo.score = 0
            document.getElementById("activePlayerSpan").innerText = "Player One"
            document.getElementById("currScore2").innerText = playerTwo.score
            playerOne.activePlayer = true
            playerTwo.activePlayer = false
            die = 0
        }

        else
        {
            playerTwo.score += die
            document.getElementById("currScore2").innerText = playerTwo.score
        }   
    }

    endGame()
}

function hold()
{
    if(playerOne.activePlayer == true)
    {
        playerOne.activePlayer = false
        playerTwo.activePlayer = true  
        document.getElementById("dieResult").innerText = "Roll!"
        document.getElementById("activePlayerSpan").innerText = "Player Two"

    }

    else if(playerTwo.activePlayer == true)
    {
        playerTwo.activePlayer = false  
        playerOne.activePlayer = true
        document.getElementById("dieResult").innerText = "Roll!"
        document.getElementById("activePlayerSpan").innerText = "Player One"
    }
}

function endGame()
{
    if(playerOne.score >= 10)
    {
        document.getElementById("winner").innerHTML = "Player one won!<br>"
        let playAgain = document.createElement("BUTTON");
        playAgain.setAttribute("onclick","location.reload();")
        playAgain.innerHTML = "Play again?"
        document.getElementById("winner").append(playAgain)


    }

    if(playerTwo.score >= 10)
    {
        document.getElementById("winner").innerHTML = "Player two won!<br>"
        let playAgain = document.createElement("BUTTON");
        playAgain.setAttribute("onclick","location.reload();")
        playAgain.innerHTML = "Play again?"
        document.getElementById("winner").append(playAgain)
    }
}