const items = ["rock", "paper", "scissors"]
let cChoice
let pChoice

function getComputerChoice() {
  cChoice = items[Math.floor(Math.random() * items.length)]
  console.log(`computer chose ${cChoice}`)
  return cChoice
}

function getPlayerChoice() {
  pChoice = prompt("what do you choose? type 'r', 'p', 's' in the box")
  if (pChoice == "r") {
    console.log("you chose rock")
    return "rock"
  } else if (pChoice == "p") {
    console.log("you chose paper")
    return "paper"
  } else {
    console.log("you chose scissors")
    return "scissors"
  }
}

function roundWinner(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    return 1
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    return 0
  }
}

function game() {
  let win = 0
  for (let i = 0; i < 5; i++) {
    console.log(`this is round ${i}`)
    let out = roundWinner(getPlayerChoice(), getComputerChoice())
    win = win + out
  }
  win > 2 ? console.log("You win the game!") : console.log("You lose the game ")
}

game()
