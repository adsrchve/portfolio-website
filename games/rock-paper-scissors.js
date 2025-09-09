const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    // Function to the Game
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];
    
    // Function to start playing game 
    playerOptions.forEach(options => {
        options.addEventListener('click', function () {
            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `Moves Left: ${10 - moves}`;

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];

            // Function to check the Winner
            winner(this.innerText, computerChoice);

            // Game Over after 10 moves
            if(moves == 10) {
                gameOver(playerOptions, movesLeft);
            } 
        })
    })
    }

    // Function to decide the Winner 
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');

        player = player.toLowerCase();
        computer = computer.toLowerCase();
        
        if(player == computer) {
            result.textContent = 'Tie';
        }
        else if(player == 'rock') {
            if(computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper') {
            if(computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScore.textContent = playerScore;
            }
        }
        else if(player == 'scissors') {
            if(computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScore.textContent = playerScore;
            }
        }
    }

    // Function to run when the game is over 
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(options => {
            options.style.display = 'none';
        })

        chooseMove.innerText = 'Game Over!';
        movesLeft.style.display = 'none';

        if(playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won the Game!';
            result.style.color = 'green';
        }
        else if(playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost the Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey';
        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    
    playGame();
}

game();