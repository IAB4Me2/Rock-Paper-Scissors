


function playGame() {

    const select = ["rock", "paper", "scissors"];

var userSelection = prompt("Choose rock, paper, or scissors");

computerSelection = select[Math.floor(Math.random()*select.length)];

    if (userSelection == computerSelection) {
        return "It's a tie!";
    } else if (userSelection == "rock" && computerSelection == "paper" || userSelection == "paper" && computerSelection == "scissors" || userSelection == "scissors" && computerSelection == "rock") {
        return "You lose!";
    } else if (userSelection == "rock" && computerSelection == "scissors" || userSelection == "paper" && computerSelection == "scissors" || userSelection == "paper" && computerSelection == "rock") {
        return "You win!";

    }
}
console.log(playGame());

playGame();
console.log(playGame());

playGame();
console.log(playGame());

playGame();
console.log(playGame());

playGame();
console.log(playGame());



 