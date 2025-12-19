
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;
let humanChoice = "";
let computerChoice = "";

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
        humanChoice = btn.innerText.toLowerCase();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


function playRound (humanChoice, computerChoice) {
    let message = document.querySelector("#message")
    let score = document.querySelector("#score")

    if (humanChoice === computerChoice){
        message.innerText = `You chose ${humanChoice} and computer chose ${computerChoice}.`
        score.innerText = `Its a tie. Current score: you ${humanScore} points, computer ${computerScore} points.`
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        humanScore++;
        message.innerText = `You chose ${humanChoice} and computer chose ${computerChoice}.`
        score.innerText = `You win! Current score: you ${humanScore} points, computer ${computerScore} points.`

        
    } else {
        computerScore++;
        message.innerText = `You chose ${humanChoice} and computer chose ${computerChoice}.`
        score.innerText = `You lose! Current score: you ${humanScore} points, computer ${computerScore} points.`
    }   
}  
    


/*
let winner = "";

    if (humanScore > computerScore){ 
        winner = "WINNER WINNER CHICKEN DINNER 🐤🐓🐔 You Win!!!!!!"
    } else if (humanScore < computerScore) {
        winner = "The Computer Wins! Better luck next time."
    } else {
        winner = "Its a tie! No one wins this time."
    }

    return alert(winner);
*/





     