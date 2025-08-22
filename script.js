const ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const playerButtons = document.querySelector("#playerButtons").querySelectorAll("button");
const restartButton = document.querySelector(".restart");
const scoreDisplay = document.querySelector(".score");
const choicesDisplay = document.querySelector(".choices");
const roundResultDisplay = document.querySelector(".roundResult");
const winnerDisplay = document.querySelector(".winner");

playerButtons.forEach((button) => {
	button.addEventListener("click",() => {
		let humanChoice = button.className;
		let computerChoice = getComputerChoice();
		let roundWinner = playRound(humanChoice, computerChoice);
		setScoreDisplay();
		setPlayersChoices(humanChoice, computerChoice);
		setRoundWinner(roundWinner);
		setFinalWinner(getFinalWinner());
	})
})

function getComputerChoice(){
	switch(Math.floor(Math.random() * 3)){
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
		default:
			return "ERROR";
	}
}

function playRound(humanChoice, computerChoice){
	switch(humanChoice){
		case "rock":
			if(computerChoice === "scissors"){
				humanScore++;
				return "human";
			} else if (computerChoice === "rock"){
				drawScore++;
				return "draw";
			} else {
				computerScore++;
				return "computer";
			}
		case "paper":
			if(computerChoice === "rock"){
				humanScore++;
				return "human";
			} else if (computerChoice === "paper"){
				drawScore++;
				return "draw";
			} else{
				computerScore++;
				return "computer";
			}
		case "scissors":
			if(computerChoice === "paper"){
				humanScore++;
				return "human";
			} else if(computerChoice === "scissors"){
				drawScore++;
				return "draw";
			} else{
				computerScore++;
				return "computer";
			}
		default:
			return "ERROR";
	}
}

function setScoreDisplay(){
	scoreDisplay. textContent = "PLAYER: " + humanScore + " | " + "PC: "
								+ computerScore + " | " + "DRAW: " + drawScore;
}

function setPlayersChoices(hChoice, cChoice){
	let choices = "You chose " + hChoice + ". The computer chose " + cChoice + ".";
	choicesDisplay.textContent = choices;
}

function setRoundWinner(roundWinner){
	let winner;
	switch(roundWinner){
		case "human":
			winner = "You win the round!";
			break;
		case "computer":
			winner = "The computer wins the round!";
			break;
		case "draw":
			winner = "The round it's a draw!";
			break;
		default:
			winner = "ERROR";
	}
	roundResultDisplay.textContent = winner;
}

function getFinalWinner(){
	if(humanScore === ROUNDS || computerScore === ROUNDS){
		if(humanScore > computerScore){
			return "human";
		} else {
			return "computer";
		}
	} else {
		return "none";
	}
}

function setFinalWinner(finalWinner){
	let winnerFinal;

	switch(finalWinner){
		case "human":
			winnerFinal = "PLAYER WINS!";
			clearScores();
			break;
		case "computer":
			winnerFinal = "COMPUTER WINS!";
			clearScores();
			break;
		case "none":
			winnerFinal = "";
			break;
	}
	winnerDisplay.textContent = winnerFinal;
}

function clearScores(){
	humanScore = 0;
	computerScore = 0;
	drawScore = 0;
}

restartButton.addEventListener("click",() =>{
	clearScores();
	setScoreDisplay();
	choicesDisplay.textContent = "";
	roundResultDisplay.textContent = "";
	winnerDisplay.textContent = "";
})