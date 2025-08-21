const ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const playerButtons = document.querySelector("#playerButtons").querySelectorAll("button");

playerButtons.forEach((button) => {
	button.addEventListener("click",() => {
		let humanChoice = button.className;
		// test
		console.log("button clicked: " + humanChoice);
		let computerChoice = getComputerChoice();
		//test
		console.log("pc choice: " + computerChoice);
		let roundWinner = playRound(humanChoice, computerChoice);
		//test
		console.log("round winner: " + roundWinner);
		console.log("Player: " + humanScore);
		console.log("PC: " + computerScore);
		console.log("Draw: " + drawScore);
		//--
		setPlayersChoices(humanChoice, computerChoice);
		setRoundWinner(roundWinner);
		setFinalWinner(getFinalWinner());
	})
})

//---
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

function setPlayersChoices(hChoice, cChoice){
	let choices = "You chose " + hChoice + ". The computer chose " + cChoice + ".";
	//--- test
	console.log(choices);
	//---
	//DOM code here
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
	//-- test
	console.log(winner);
	//--
	//DOM code
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
			//dom code
			break;
		case "computer":
			winnerFinal = "COMPUTER WINS!";
			clearScores();
			//dom code
			break;
		case "none":
			winnerFinal = "";
			//dom code?
			break;
	}
	//test
	console.log(winnerFinal);
	//--
	//DOM code
}

function clearScores(){
	humanScore = 0;
	computerScore = 0;
	drawScore = 0;
	//DOM code
}