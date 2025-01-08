const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
let humanScore = 0;
let compScore = 0;

rock.addEventListener("click", () => {
    getHumanChoice("rock");
});
paper.addEventListener("click", () => {
    getHumanChoice("paper");
});
scissor.addEventListener("click", () => {
    getHumanChoice("scissors");
});

const container = document.querySelector("#container");
let compHand = document.createElement("p");
let scoreHuman = document.createElement("p");
let scoreComp = document.createElement("p");
container.appendChild(compHand);
container.appendChild(scoreHuman);
container.appendChild(scoreComp);
//content.textContent = "Comp Score:" + compScore;
compHand.textContent = "Computer Choice: "
scoreHuman.textContent = "Your Score:" + humanScore;
scoreComp.textContent = "Computer Score:" + compScore;
console.log(humanScore);


function getComputerChoice() {
    let compHand = getRndInteger(1, 3);
    switch(compHand){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"
    }
}

function getHumanChoice(humanChoice) {
    //let humanHand = prompt("Enter Rock Paper Scissor: ").toLowerCase();
    let compChoice = getComputerChoice();
    //console.log(compChoice);
    //console.log(humanChoice);
    console.log(humanScore);
    if(compChoice === humanChoice) {
        compScore += 0;
        humanScore += 0;
    }
    else if (
        (compChoice === "rock" && humanChoice === "scissors") ||
        (compChoice === "scissors" && humanChoice === "paper") ||
        (compChoice === "paper" && humanChoice === "rock")
    ) {
        compScore++;
    } 
    else {
        humanScore++;
    }
    compHand.textContent = "Computer Choice: " + compChoice;
    scoreHuman.textContent = "Your Score: " + humanScore;
    scoreComp.textContent = "Computer Score: " + compScore;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}