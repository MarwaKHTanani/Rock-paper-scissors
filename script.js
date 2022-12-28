let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.getElementById("result");
let computer=document.getElementById('computer');
let player=document.getElementById('player');
let playagain = document.querySelector("#playagain");

playagain.addEventListener("click", restart);

function restart() {
    result.innerText = "Result:"
    computer.innerText="Your Choice";
    player.innerText="Computer Choice";
}


function ComputerChoice() {
    var random = ["Rock", "Paper", "Scissors"]
    var Num = Math.floor(Math.random() * 3);
    if(Num == 0) {
        return random[0];
    }else if(Num == 1) {
        return random[1];
    }else{
        return random[2];
    }
};
var myChoice;
function rockchoice() {
    myChoice = "Rock";
    mine();
}
function paperchoice() {
    myChoice = "Paper"
    mine();
}
function scissorschoice() {
    myChoice = "Scissors"
    mine();
}
rock.onclick = rockchoice;
paper.onclick = paperchoice;
scissors.onclick = scissorschoice;

function mine() {
    var Choicecomp = ComputerChoice();
    if ((myChoice == "Rock" && Choicecomp == "Scissors") || (myChoice == "Scissors" && Choicecomp == "Paper") || (myChoice == "Paper" && Choicecomp == "Rock")) {
        result.innerText = " You Win ";
        computer.innerText="Computer Choice Is "+Choicecomp;
        player.innerText="Your Choice Is "+myChoice;

    } else if (myChoice === Choicecomp) {
        result.innerText = " You Tied ";
        computer.innerText="Computer Choice Is "+Choicecomp;
        player.innerText="Your Choice Is "+myChoice;

    } else {
        result.innerText = "You lose";
        computer.innerText="Computer Choice Is "+Choicecomp;
        player.innerText="Your Choice Is "+myChoice;

    }
}

