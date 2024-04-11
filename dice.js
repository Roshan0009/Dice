//Roshan Lamichhane 
//C0916262
//Javascript 

document.addEventListener('DOMContentLoaded', function () {
    const rollButton = document.getElementById('rollButton');
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const player1Label = document.querySelector('.dice:nth-child(1) p');
    const player2Label = document.querySelector('.dice:nth-child(2) p');
    const player1ScoreElement = document.getElementById('player1Score');
    const player2ScoreElement = document.getElementById('player2Score');
    const winnerAnnouncement = document.getElementById('winnerAnnouncement');

    let score1 = 0;
    let score2 = 0;
    const winningScore = 20; // here the user should reach 20 points to win the game 
    let turn = 1; // starting with player 1 

    player1Label.classList.add('active'); // Player 1 starts active

    rollButton.addEventListener('click', function () {
        if (turn === 1) {
            //So here when the player 1 starts rolling the dice
            const dice1Value = rollDice();
            dice1.src = `dice${dice1Value}.png`;
            score1 += dice1Value;
            player1ScoreElement.textContent = score1;
            turn = 2; // So here when the player 1 starts rolling the dice
            player2Label.classList.add('active');
            player1Label.classList.remove('active');
        } else {
            // Player 2's turn
            const dice2Value = rollDice();
            dice2.src = `dice${dice2Value}.png`;
            score2 += dice2Value;
            player2ScoreElement.textContent = score2;
            turn = 1; // Again the player turns to player 1 after finishing rolling for player 1
            player1Label.classList.add('active');
            player2Label.classList.remove('active');
        }

        // Checkin if someone reaches the 20 points to check the winner 
        checkWinner();
    });

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1; // Generating the random number between 1 and 6
    }

    function checkWinner() {
        if (score1 >= winningScore) {
            announceWinner(1);
        } else if (score2 >= winningScore) {
            announceWinner(2);
        }
    }

    function announceWinner(playerNumber) {
        winnerAnnouncement.textContent = `Player ${playerNumber} Wins!`;
        rollButton.disabled = true; // Optionally disable roll button
        setTimeout(resetGame, 4000); // this will reset the game within 4 second
    }

    function resetGame() {
        score1 = 0;
        score2 = 0;
        player1ScoreElement.textContent = '0';
        player2ScoreElement.textContent = '0';
        winnerAnnouncement.textContent = '';
        rollButton.disabled = false; // Re-enable roll button
        turn = 1; // Resetting the roll to player 1.
        player1Label.classList.add('active');
        player2Label.classList.remove('active');
    }
});
