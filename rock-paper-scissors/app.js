const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const scoreboard = {
    player: 0,
    computer: 0
};

function getCompChoice() {
    const randNum = Math.random();
    if (randNum < 0.34) {
        return 'rock';
    } else if (randNum <= 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function play(userChoice) {
    const compChoice = getCompChoice();
    const win = getWinner(userChoice, compChoice);

    showWinner(win, compChoice)
}

function getWinner(p, c) {
    if (p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if(c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }       

    } else if(p === 'paper') {
        if(c === 'scissors') {
            return 'computer';
        }else {
            return 'player';
        }

    } else if(p === 'scissors') {
        if(c === 'rock') {
            return 'computer'
        } else {
            return 'player'
        }
    }
};

function showWinner(win, compChoice) {
    if(win === 'player') {
        scoreboard.player++;
    } else if(win === 'computer') {
        scoreboard.computer++;
    }

    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
        `;
}

function main() {
    paperDiv.addEventListener('click', function() {
        play("paper");
    })
    
    rockDiv.addEventListener('click', function() {
        play("rock");
    })
    
    scissorsDiv.addEventListener('click', function() {
        play("scissors");
    })
};
main();
