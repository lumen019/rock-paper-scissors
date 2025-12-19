let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

let humanScoreCounter = document.querySelector("#humanScore");
let computerScoreCounter = document.querySelector("#computerScore");
let gameRound = document.querySelector("#gameRound")

humanScoreCounter.textContent = `Your Score: 0`;
computerScoreCounter.textContent = `Computer Score: 0`;   
gameRound.textContent = `Game Round: 0`;

function getComputerChoice (){
    let number = Math.floor(Math.random() * 3); 
    let result = "";
    if (number === 0 ){
        result = "rock"
    } else if (number === 1) { 
        result = "paper"
    } else {
        result = "scissor"
    }
    return result
}


let button = Array.from(document.querySelectorAll("button"));

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        let humanChoice = btn.innerText.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


function playRound (humanChoice, computerChoice) {    
    if (humanScore >= 5 || computerScore >= 5) return;
    
    roundsPlayed++;

    let msgContainer = document.querySelector("#msgContainer")
    let roundMsg = document.createElement ("p")
    msgContainer.append(roundMsg)
    roundMsg.style.fontSize = "13px";


    if (humanChoice === computerChoice){
        roundMsg.textContent = `[Round ${roundsPlayed}]  You: ${humanChoice} | Computer: ${computerChoice} | Its a tie.`
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        humanScore++;
        roundMsg.textContent = `[Round ${roundsPlayed}]  You: ${humanChoice} | Computer: ${computerChoice} | You win!`
    } else {
        computerScore++;
        roundMsg.textContent = `[Round ${roundsPlayed}]  You: ${humanChoice} | Computer: ${computerChoice} | You lose!`
    }   

    
    humanScoreCounter.textContent = `Your Score: ${humanScore}`;
    computerScoreCounter.textContent = `Computer Score: ${computerScore}`;   
    gameRound.textContent = `Game Round: ${roundsPlayed}`;

    let winner = document.querySelector("#winner")
    
    let resetGame = () => {
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 0;

        msgContainer.textContent = "";
        winner.textContent = "";
        humanScoreCounter.textContent = `Your Score: 0`;
        computerScoreCounter.textContent = `Computer Score: 0`;
        gameRound.textContent = `Game Round: 0`;

        button.forEach(btn => btn.disabled = false);
    }


    let disableButtons = () => {
        button.forEach(btn => btn.disabled = true); 
    }  

    if (humanScore >= 5 || computerScore >= 5){
        endGameScreen();
        
        setTimeout(() => {
            let playAgain = confirm("The game is over. Play again?")

            if (playAgain) {
                resetGame();
            } else {
                disableButtons();
            }
        }, 2000);       
    }
}

function endGameScreen () {
    let winner = document.querySelector("#winner")

    if (humanScore > computerScore){ 
            winner.textContent = "WINNER WINNER CHICKEN DINNER 🐤🐓🐔 You Win!!!!!!"
        } else if (humanScore < computerScore) {
            winner.textContent = "The Computer 🖥️ Wins! Better luck next time." 
        } else {
            winner.textContent = "Its a tie! ⭐🟰⭐ No one wins this time."
        }
}   
