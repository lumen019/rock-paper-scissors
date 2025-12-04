function getComputerChoice (){
    let number = Math.floor(Math.random() * 3); //randomly picks a whole number between 0-2  
    console.log("---------------------------------------------------");
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
        return console.log ("Rock beats Scissors. You won this round! 🎉");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore = humanScore + 1;
        return console.log ("Scissors beats Paper. You won this round! 🎉");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore = humanScore + 1;
        return console.log ("Paper beats Rock. You won this round! 🎉");
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore = computerScore + 1;
        return console.log ("Rock beats Scissors. Sorry the computer wins 😞.");
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore = computerScore + 1;
        return console.log ("Scissors beats Paper. Sorry the computer wins 😞.");
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore = computerScore + 1;
        return console.log ("Paper beats Rock. Sorry the computer wins 😞.");
    }
}
//comparison function to determine winner and increases score counter


function playGame (){
    for (let i=1; i<=5; i++){
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        console.log(`You: ${humanSelection}  Computer: ${computerSelection}`)
        playRound(humanSelection, computerSelection);  
    } 
    let winner;
    if (humanScore > computerScore){
        console.log("---------------------------------------------------")
        winner = "WINNER WINNER CHICKEN DINNER 🐤🐓🐔 You Win!!!!!!"
    } else if (humanScore < computerScore) {
        console.log("---------------------------------------------------")
        winner = "The Computer Wins! Better luck next time. (╥﹏╥)"
    } else {
        console.log("---------------------------------------------------")
        winner = "Its a tie! No one wins this time ☹"
    }
    return winner
}

console.log(playGame());