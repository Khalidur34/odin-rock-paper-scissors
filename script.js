let humanScore = 0;
let compScore = 0;

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
    let humanHand = prompt("Enter Rock Paper Scissor: ");
    switch(humanHand) {
        case "Rock":
            return humanHand;
        case "Paper":
            return humanHand;
        case "Scissors":
            return humanHand;
        default:
            return "Wrong Input";
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getHumanChoice());