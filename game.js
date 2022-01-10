const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const display = document.querySelector('.display');

let compScore = 0, playerScore = 0;


rock.addEventListener('click', () => {
    playRound('rock');
});
paper.addEventListener('click', () => {
    playRound('paper');
});
scissors.addEventListener('click', () => {
    playRound('scissors');
});

function computerPlay(){
    let selectedVal = Math.floor(Math.random()*3);
    if (selectedVal === 0) return "rock";
    else if (selectedVal === 1) return "paper";
    else if (selectedVal === 2) return "scissors";
}

function playRound(playerSelection){
    computerSelection = computerPlay();
    let text = "";
    if (playerSelection === "rock" && computerSelection == "paper"){
        text = `<p>You lose! ${computerSelection} beats ${playerSelection}. `;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        text = `<p>You win! ${playerSelection} beats ${computerSelection}. `;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        text = `<p>You lose! ${computerSelection} beats ${playerSelection}. `;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        text = `<p>You win! ${playerSelection} beats ${computerSelection}. `;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        text = `<p>You lose! ${computerSelection} beats ${playerSelection}. `;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        text = `<p>You win! ${playerSelection} beats ${computerSelection}. `;
    } else{
        text = `<p>Its a draw! ${playerSelection} draws ${computerSelection}. `;
    }

    calcScores(text);
}

function calcScores(text){
    if (text[7] === "l"){
        compScore += 1;
        text += `<br> Your score: ${playerScore} Computer score: ${compScore}`;
    } else if (text[7] === "w"){
        playerScore += 1;
        text += `<br> Your score: ${playerScore} Computer score: ${compScore}`;
    } else {
        text += `<br> Your score: ${playerScore} Computer score: ${compScore}`;
    }
    if (compScore === 5){
        text += `<br>You lose the game. Play again by clicking on your next choice`;
        compScore = playerScore = 0;
    } else if (playerScore === 5){
        text += `<br>You win the game. Play again by clicking on your next choice`;
        compScore = playerScore = 0;
    }
    text += "</p>";
    display.innerHTML = text;

}

