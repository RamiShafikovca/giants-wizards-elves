const resultdiv = document.querySelector('div.results');
const playerScoreDiv = document.querySelector('div.playerScore');
const computerScoreDiv = document.querySelector('div.computerScore');
const howTo = document.querySelector('.howTo');
const howToPopup = document.querySelector('.howToPopup');
const images = document.querySelectorAll('img');
let playerScore = 0, computerScore = 0;

//Randomly generate the computer's choice of character
function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "giants";
            break;
        case 1:
            return "wizards";
            break;
        case 2:
            return "elves";
            break;
    }
}


function playRound (playerSelection, computerSelection) {
    //If player and computer choose the same character, they tie
    if (playerSelection == computerSelection) return "It's a Tie";
    //Player's Giants lose to Wizards, but win against Elves
    else if (playerSelection == "giants") {
        if (computerSelection == "wizards") return `You Lose! Wizards beat Giants`;
        else return `You Win! Giants beat Elves`;
    }
    //Player's Wizards lose to Elves, but win against Giants
    else if (playerSelection == "wizards") {
        if (computerSelection == "elves") return `You Lose! Elves beat Wizards`;
        else return `You Win! Wizards beat Giants`;
    }
    //Player's Elves lose to Giants, but wing against Wizards
    else if (playerSelection == "elves") {
        if (computerSelection == "giants") return `You Lose! Giants beat Elves`;
        else return `You Win! Elves beat Wizards`;
    }
}

function game (playerSelection) {
    const computerSelection = getComputerChoice();
    resultdiv.innerHTML = `${playRound(playerSelection, computerSelection)}`;
    //After getting the round's result, update page text to reflect score and game status
     if (resultdiv.innerHTML.includes('Win')) playerScore++;
     else if (resultdiv.innerHTML.includes('Lose')) computerScore++;
     playerScoreDiv.innerHTML = `Player: ${playerScore}`;
     computerScoreDiv.innerHTML = `Computer:${computerScore}`;

     //If there is a winner, reset the game
     if (playerScore == 5 || computerScore == 5) {
        alert(`${playerScore > computerScore ? "Player" : "Computer"} wins!`);
        resultdiv.innerHTML = `You ${playerScore > computerScore ? "won" : "lost"} with a score of ${playerScore} - ${computerScore}. Play again?`;
        playerScore = 0;
        computerScore = 0;
        playerScoreDiv.innerHTML = `Player: ${playerScore}`;
        computerScoreDiv.innerHTML = `Computer:${computerScore}`;
    }
}

images.forEach((image) =>{image.addEventListener('click', () => {
    game(image.className);
});});

howTo.addEventListener('click', () => alert(
    "This game works like Rock-paper-scissors: Giants beat Elves,\nWizards beat Giants,\n And Elves beat Wizards.\n Can you beat the Computer in a best of 5?"
));