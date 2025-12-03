function getComputerChoice (max){
    let number = Math.floor(Math.random() * max); //generates a number between 0-2
    let result;
    if (number === 0 ){ //if statement sets number to rock/paper/scissors
        result = "rock"
    } else if (number === 1) { 
        result = "paper"
    } else {
        result = "scissors"
    }
    return result
}
    console.log ("Computer: " + getComputerChoice(3));
 //generates a number between 0-2, depending on the number outputs rock/paper/scissors

function getHumanChoice () {
    let answer = prompt("Lets play rock, paper, scissors! What do you choose?");
    answer = answer.toLowerCase();
    return answer
}
    console.log ("You: " + getHumanChoice());
//prompts user to enter rock/paper/scissor, outputs user answer

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "paper"){
        return console.log ("Its a tie. No one wins this time!")
    } else if (humanChoice === "rock" && computerChoice === "rock"){
        return console.log ("Its a tie. No one wins this time!")
    } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        return console.log ("Its a tie. No one wins this time!")
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore = humanScore++;
        return console.log ("You win! Rock beats Scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore = humanScore++;
        return console.log ("You win! Scissors beats Paper.");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore++;
        return console.log ("You win! Paper beats Rock.");
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        computerScore = computerScore++;
        return console.log ("You Lose! Rock beats Scissors.");
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore++;
        return console.log ("You Lose! Scissors beats Paper.");
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore = computerScore++;
        return console.log ("You Lose! Paper beats Rock.");
    }
}
//logic statement 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);