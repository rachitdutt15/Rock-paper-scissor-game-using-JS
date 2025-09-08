const choices=["rock","paper","scissor"];
const playerdisplay=document.getElementById("playerdisplay");
const computerdisplay=document.getElementById("computerdisplay");
const resultdisplay=document.getElementById("resultdisplay");
const playerScore=document.getElementById("playerScore");
const ComputerScore=document.getElementById("ComputerScore");
 let computerPointsres=0;
let playerPointsres=0;

function playgame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerchoice===computerchoice){
        result="IT IS A TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result=(computerchoice==="scissor")?"You win!":"You lose!";
                break;
                case "paper":
                    result=(computerchoice==="rock")?"You win!":"You lose!";
                    break;
                    case "scissor":
                        result=(computerchoice==="paper")?"You win!":"You lose!";
                        break;
                        }
                    }
    playerdisplay.textContent=`PLAYER: ${playerchoice}`;
    computerdisplay.textContent=`COMPUTER: ${computerchoice}`;
    resultdisplay.textContent=result;

    resultdisplay.classList.remove("greentext", "redtext"); //AS TO UPDATE TO NORMAL (NOT STACK PREV COLOR)

    switch(result){
        case "You win!":
            resultdisplay.classList.add("greentext");
            playerPointsres++;
            playerScore.textContent =`Player Score:${playerPointsres}`;
            break;
        case "You lose!":
            resultdisplay.classList.add("redtext");
            computerPointsres++;
            ComputerScore.textContent =`Computer Score:${computerPointsres}`;
            break;
    }
}