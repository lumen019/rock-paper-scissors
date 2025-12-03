function getComputerChoice (max){
    let number = Math.floor(Math.random() * max);
    let result;
    if (number === 0 ){
        result = "rock"
    } else if (number === 1) {
        result = "paper"
    } else {
        result = "scissors"
    }
    return result
}
    console.log (getComputerChoice(3));
 //generates a number between 0-2, depending on the number outputs rock/paper/scissors

function getHumanChoice () {
    let answer = prompt("Lets play rock, paper scissor! What do you choose?");
    answer = answer.toLowerCase();
    return answer
}
    console.log (getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playerRound (humanChoice, computerChoice) {
    //code goes here
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection){

}