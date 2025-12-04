function getComputerChoice (){
    let number = Math.floor(Math.random() * 3); //randomly picks a whole number between 0-2  
    console.log(number);
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
 //generates a number between 0-2, depending on the number output rock/paper/scissors
 

function getHumanChoice () {
    let answer = prompt("Lets play rock, paper, scissors! What do you choose?");
    answer = answer.toLowerCase();
    return answer
}   
//prompts user to enter rock/paper/scissor, output user answer


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
        humanScore = humanScore + 1;
        return console.log ("You win! Rock beats Scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore = humanScore + 1;
        return console.log ("You win! Scissors beats Paper.");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore + 1;
        return console.log ("You win! Paper beats Rock.");
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore = computerScore + 1;
        return console.log ("You Lose! Rock beats Scissors.");
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        return console.log ("You Lose! Scissors beats Paper.");
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore = computerScore + 1;
        return console.log ("You Lose! Paper beats Rock.");
    }
}
//comparison function to determine winner and increases score counter


function playGame (){
    for (let i=1; i<=5; i++){
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);  
    } 
    let winner;
    if (humanScore > computerScore){
        winner = "You Win!"
    } else if (humanScore < computerScore) {
        winner = "The Computer Wins!"
    } else {
        winner = "Its a tie!"
    }
    return winner
}

console.log(playGame());