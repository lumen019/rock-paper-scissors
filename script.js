let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

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
    if (roundsPlayed >= maxRounds) return;
    
    roundsPlayed++;
    console.log(`Round ${roundsPlayed} | ${humanChoice}`);
    console.log(`Round ${roundsPlayed} | ${computerChoice}`);


    let msgContainer = document.querySelector("#msgContainer")
    let roundMsg = document.createElement ("p")
    msgContainer.append(roundMsg)


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

    let score = document.querySelector("#score")
    score.innerText = `Current score: You ${humanScore} points, Computer ${computerScore} points.`


    let resetGame = () => {
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 0;

        msgContainer.textContent = "";
        score.textContent = `Current score: You 0 points, Computer 0 points.`;
        winnerContainer.textContent = "";

        button.forEach(btn => btn.disabled = false);
    }


    let disableButtons = () => {
        button.forEach(btn => btn.disabled = true);
    }  

    if (roundsPlayed >= maxRounds){
        endGameScreen();
        
        setTimeout(() => {
            let playAgain = confirm("The game is over. Play again?")

            if (playAgain) {
                resetGame();
            } else {
                disableButtons();
            }
        }, 1000);       
    }
}

function endGameScreen () {
    let winnerContainer = document.querySelector("#winnerContainer")
    let winner = document.createElement("h3")
    winnerContainer.append(winner)

    if (humanScore > computerScore){ 
            winner.textContent = "WINNER WINNER CHICKEN DINNER 🐤🐓🐔 You Win!!!!!!"
        } else if (humanScore < computerScore) {
            winner.textContent = "The Computer Wins! Better luck next time." 
        } else {
            winner.textContent = "Its a tie! No one wins this time."
        }
}   