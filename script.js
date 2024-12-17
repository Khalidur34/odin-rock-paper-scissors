
function getComputerChoice() {
    let compHand = getRndInteger(1, 3);
    switch(compHand){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
    }
}

function getHumanChoice() {
    let humanHand = prompt("Enter Rock Paper Scissor: ").toLowerCase();
    switch(humanHand) {
        case "rock":
            return humanHand;
        case "paper":
            return humanHand;
        case "scissors":
            return humanHand;
        default:
            return "Wrong Input";
    }
}



function playGame() {
    let humanScore = 0;
    let compScore = 0;
    function playRound(getComputerChoice, getHumanChoice) {
        let compChoice = getComputerChoice().toLowerCase();
        let humanChoice = getHumanChoice().toLowerCase();
        let draw = "It's a draw!";
        let win = "You win!";
        let lose = "You lose :(";
        if (compChoice === humanChoice) {
            return "It's a draw!";
        } 
        else if (
            (compChoice === "rock" && humanChoice === "scissors") ||
            (compChoice === "scissors" && humanChoice === "paper") ||
            (compChoice === "paper" && humanChoice === "rock")
        ) {
            compScore++;
            return "You lose :(";
        } 
        else {
            humanScore++;
            return "You win!";
        }
    }

    for(let i = 0; i < 5 ; i++) {
        console.log(playRound(getComputerChoice, getHumanChoice));
    }
    if(humanScore > compScore) {
        return "You Win";
    }
    else if(humanScore < compScore){
        return "You lose";
    }
    else {
        return "It's a draw";
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(playGame());