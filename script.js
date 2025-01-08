'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice')
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = () => {
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden")
    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
    player0El.classList.add("player--active")
    player1El.classList.remove("player--active")
}

init();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


rollBtn.addEventListener('click', () => {

    if (playing) {
        const randomDice = randomNumber(1, 6);
        diceEl.classList.remove("hidden")
        diceEl.src = `dice-${randomDice}.png`
        if (randomDice !== 1) {
            currentScore += randomDice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }

})


holdBtn.addEventListener('click', () => {
    if (playing) {
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 30) {
            // Finish the game
            playing = false;
            diceEl.classList.add('hidden');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }

    }
})



newBtn.addEventListener('click', init);
















































/*
const rollDiceBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const gameAgainBtn = document.querySelector('.btn--new')
const diceImg = document.querySelector('.dice')
const sectionPlayer1 = document.querySelector('.player--0')
const sectionPlayer2 = document.querySelector('.player--1')
const currentScore1 = document.getElementById('current--0')
const scorePlayer1 = document.getElementById("score--0");
const currentScore2 = document.getElementById('current--1')
const scorePlayer2 = document.getElementById("score--1");


const player1 = {
    score: 0,
    currentScore: 0,
    activePlayer: true
}

const player2 = {
    score: 0,
    currentScore: 0,
    activePlayer: false

}



const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function checkResult(obj1, obj2) {
    if (obj1 >= 30) {
        sectionPlayer1.classList.add("player--winner")
    } else if (obj2 >= 30) {
        sectionPlayer2.classList.add("player--winner")
    }
}

checkResult(player1.score, player2.score)

rollDiceBtn.addEventListener('click', () => {
    checkResult(player1.score, player2.score)

    let diceNumber = randomNumber(1, 6);
    diceImg.src = `dice-${diceNumber}.png`

    if (player1.activePlayer) {
        checkResult(player1.score, player2.score)
        if (diceNumber !== 1) {
            checkResult(player1.score, player2.score)
            player1.currentScore += diceNumber;

            currentScore1.textContent = player1.currentScore;
        } else {
            checkResult(player1.score, player2.score)
            player1.currentScore = 0;
            currentScore1.textContent = player1.currentScore;
            player1.activePlayer = false
            player2.activePlayer = true;
            sectionPlayer2.classList.add("player--active")
            sectionPlayer1.classList.remove("player--active")
        }
    } else {

        if (diceNumber !== 1) {
            checkResult(player1.score, player2.score)
            player2.currentScore += diceNumber;
            currentScore2.textContent = player2.currentScore;
        } else {
            checkResult(player1.score, player2.score)
            player2.currentScore = 0;
            currentScore2.textContent = player2.currentScore;
            player2.activePlayer = false
            player1.activePlayer = true;
            sectionPlayer1.classList.add("player--active")
            sectionPlayer2.classList.remove("player--active")

        }
    }


})

function holdScore() {
    if (player1.activePlayer) {
        checkResult(player1.score, player2.score)
        player1.score += player1.currentScore
        scorePlayer1.textContent = player1.score
        player1.currentScore = 0;
        currentScore1.textContent = player1.currentScore;
        player1.activePlayer = false
        player2.activePlayer = true;
        sectionPlayer2.classList.add("player--active")
        sectionPlayer1.classList.remove("player--active")
    } else {
        checkResult(player1.score, player2.score)
        player2.score += player2.currentScore
        scorePlayer2.textContent = player2.score
        player2.currentScore = 0;
        currentScore2.textContent = player2.currentScore;
        player2.activePlayer = false
        player1.activePlayer = true;
        sectionPlayer1.classList.add("player--active")
        sectionPlayer2.classList.remove("player--active")

    }
}


holdBtn.addEventListener('click', () => {
    checkResult(player1.score, player2.score)
    holdScore()
})

function restartGame() {

    player1.currentScore = 0;
    currentScore1.textContent = 0;
    player1.score = 0;
    scorePlayer1.textContent = player1.score

    player2.currentScore = 0;
    currentScore2.textContent = player2.currentScore;
    player2.score = 0;
    scorePlayer2.textContent = player2.score
    player1.activePlayer = true;
    player2.activePlayer = false;
    sectionPlayer1.classList.remove("player--winner")
    sectionPlayer2.classList.remove("player--winner")

}


gameAgainBtn.addEventListener('click', restartGame)

*/


















