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
        if (computerSelection == "wizards") return `You Lose! Wizards beat giants`;
        else return `You Win! giants beats elves`;
    }
    //Player's Wizards lose to Elves, but win against Giants
    else if (playerSelection == "wizards") {
        if (computerSelection == "elves") return `You Lose! Elves beat Wizards`;
        else return `You Win! Wizards beat Giants`;
    }
    //Player's Elves lose to Giants, but wing against Wizards
    else if (playerSelection == "elves") {
        if (computerSelection == "giants") return `You Lose! Giants Beat Elves`;
        else return `You Win! Elves Beat Wizards`;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Giants, Wizards, or Elves?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();