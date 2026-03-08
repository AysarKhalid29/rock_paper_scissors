function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(input){
    if(input == "rock" || input == "paper" || input == "scissors") return input; 
    else return  "Invali Input";
}

let HumanScore = 0;
let ComputerScore = 0;

function playRound(HumanChoice,ComputerChoice){
    
    if(HumanChoice == "rock" && ComputerChoice == "rock"){
        return "Deuce";

    }
    else if(HumanChoice == "rock" && ComputerChoice == "paper"){
        
        return "Computer Point";

    }
    else if(HumanChoice == "rock" && ComputerChoice == "scissors"){
        
        return "Human Point";

    }
    else if(HumanChoice == "paper" && ComputerChoice == "paper"){
        return "Deuce";
    }
    else if(HumanChoice == "paper" && ComputerChoice == "rock"){
        
        return "Human Point";

    }
    else if(HumanChoice == "paper" && ComputerChoice == "scissors"){
        
        return "Computer Point";

    }
    else if(HumanChoice == "scissors" && ComputerChoice == "scissors"){
        return "Deuce";
    }
    else if(HumanChoice == "scissors" && ComputerChoice == "rock"){
        
        return "Computer Point";

    }
    else if(HumanChoice == "scissors" && ComputerChoice == "paper"){
    
        return "Human Point";
    }
    else return "Invalid Input";
}

function playGame(){
    for(let i=1; i <= 6; i++){
        let humanInput = prompt(`Round ${i}, Enetr your choice from rock,paper,scissors`).toLowerCase().trim();
        let HumanSelection = getHumanChoice(humanInput);
        let ComputerSelection = getComputerChoice();
        let RoundResult = playRound(HumanSelection,ComputerSelection);
        console.log(`${RoundResult}\n`);
        if(RoundResult == "Human Point"){
            HumanScore += 1;
        }
        else if (RoundResult == "Computer Point"){
             ComputerScore += 1;
        }
    }
    console.log(`your score ${HumanScore} | computer score ${ComputerScore}`);
    if(HumanScore > ComputerScore){
        console.log(`YOU WIN`);
    }
    else if(ComputerScore > HumanScore){
        console.log("YOU LOSE");   
    }
    else console.log(`ITS A TIE`);
}
playGame();
