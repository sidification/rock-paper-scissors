const items = ["rock", "paper", "scissors"]
let cChoice
let pChoice

function getComputerChoice(items) {
  cChoice = items[Math.floor(Math.random() * items.length)]
  console.log(cChoice)
  // return choice
}

function playerChoice(items) {
  pChoice = prompt("what do you choose? type 'r', 'p', 's' in the box")
  if (pChoice == "r") {
    console.log("you chose rock")
  } else if (pChoice == "p") {
    console.log("you chose paper")
  } else {
    console.log("you chose scissors")
  }
  return pChoice
}

// playerChoice(items)
