function computerPlay(){
    let selectedVal = Math.floor(Math.random()*3);
    if (selectedVal === 0) return "Rock";
    else if (selectedVal === 1) return "Paper";
    else if (selectedVal === 2) return "Scissors";
}

function playGame(){
    playerSelection = prompt("What's your game? ");
    insensPlayerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    insensCompSelection = computerSelection.toLowerCase();

    if (insensPlayerSelection === "rock" && insensCompSelection == "paper"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return (`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (insensPlayerSelection === "rock" && insensCompSelection === "scissors"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (insensPlayerSelection === "paper" && insensCompSelection === "scissors"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return (`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (insensPlayerSelection === "paper" && insensCompSelection === "rock"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (insensPlayerSelection === "scissors" && insensCompSelection === "rock"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return (`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (insensPlayerSelection === "scissors" && insensCompSelection === "paper"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (insensCompSelection === insensPlayerSelection){
        console.log(`Its a draw! ${playerSelection} draws ${computerSelection}`);
        return 1;
    } else {
        console.log(`Invalid Input`);
        return 0;
    }
}

function gameReady(){
    let compScore = 0, playerScore = 0;

    for (let i = 0; i < 5; i++){
        let gameResult = playGame();
        console.log(gameResult[4]);
        if (gameResult[4] === "l"){
            compScore += 1;
        } else if (gameResult[4] === "w"){
            playerScore += 1;
        } else if (gameResult === 1){
            continue;
        } else {
            i -= 1;
            continue;
        }
    }

    if (playerScore > compScore){
        console.log(`Your score: ${playerScore}  Computer score: ${compScore} \n You win!`);
    } else if (compScore > playerScore){
        console.log(`Your score: ${playerScore}  Computer score: ${compScore} \n You lose!`);
    } else{
        console.log(`Your score: ${playerScore}  Computer score: ${compScore} \n It's a draw!`);
    }
}


