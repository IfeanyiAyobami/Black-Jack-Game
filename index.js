// 1. create two variables. firstCard and secondCard.

// set their values to a random numbers btw 2-11
let firstCard = 10
let secondCard = 11
// 2. create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

if (sum < 21) {
  console.log("Do you want to draw a new card?")
} else if ( sum === 21) {
  console.log("Wohoo! You've got Blackjack!")
} else if (sum >21) {
  console.log("You're out of the game!")
}
