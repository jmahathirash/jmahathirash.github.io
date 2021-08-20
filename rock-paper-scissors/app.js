const score = document.getElementById('score');
const result = document.querySelector('.result > p');
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
        result.innerHTML = `Computer chose The ${compChoice}. You Win!`;
    } else if(win === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `Computer chose The ${compChoice}. You Lose!`;
    } else {
        result.innerHTML = `Computer also chose The ${compChoice}. It's a Draw!`;
    }

    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
        `;
};
    
function play(userChoice) {
    const compChoice = getCompChoice();
    const win = getWinner(userChoice, compChoice);

    showWinner(win, compChoice)
}

function main() {
    $('#paper').click(function() {
        play("paper");
    })
    
    $('#rock').click(function() {
        play("rock");
    })
    
    $('#scissors').click(function() {
        play("scissors");
    })
};
main();

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>`
}

$('#restart').click(restartGame)