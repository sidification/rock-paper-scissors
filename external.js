const items = ["rock", "paper", "scissors"]
let compSelection
let playerSelection

function getComputerChoice() {
  compSelection = items[Math.floor(Math.random() * items.length)]
  const parentElement = document.querySelector(".computer div")
  console.log(parentElement)
  return parentElement.querySelector(`#${compSelection}`)
    }

// add event listeners to all player images and return the player choice
const images = document.querySelectorAll(".you .icons img")
images.forEach((image) => {
  image.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    transitionEffect(e.target);
    compSelection = getComputerChoice();
    transitionEffect(compSelection);
    roundWinner(playerSelection, compSelection);
    // compare who wins
  })
})

// create transition effect
function transitionEffect(image) {
  console.log('image:', image);
  image.classList.add("clicked");
  setTimeout(() => {
    image.classList.remove("clicked"); 
  }, 1500); 
}
// // to toggle from main page to the game page
// const navToIndex = document.querySelector("#play")
// navToIndex.addEventListener('click', () => {
//   window.location.href = 'index.html';
// });

// get computer's choice


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

function playRound() {
  // let win = 0
  // for (let i = 0; i < 5; i++) {
  //   console.log(`this is round ${i}`)
  //   let out = roundWinner(getPlayerChoice(), getComputerChoice())
  //   win = win + out
  // }
  // win > 2 ? console.log("You win the game!") : console.log("You lose the game ")

}

game()
