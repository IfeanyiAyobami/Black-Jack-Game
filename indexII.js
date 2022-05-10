
// !. Create a new array - cards- that contains firstCard and secondCard
let cards = [] // array- ordered list of items
let sum = 0 
let hasBlackJack = false
let isAlive = false
//1. Declare a variable called message and assign its value to an empty string
let message = ""
// store the message in a variable called messageEl
let messageEl = document.getElementById("message-el")


// store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
console.log(sumEl)

// 2. store the cards paragraph in avariable called cardsEl
let cardsEl = document.getElementById("cards-el")
console.log(cards)
let player = {
  name: "Ifeanyi",
  chips: 145,
  sayHello: function() {
    console.log("Heisann!")
  }

}
player.sayHello()


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":£" + player.chips

// Create a function, getRandomCard(), that always returns the between 1 and 13

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() *13) + 1
  if (randomNumber >10) {
    return 10
  } else if (randomNumber ===1){
    return 11
  } else {
    return randomNumber
  }
}
console.log(getRandomCard())








// render the cards on the page using this format: "Cards:10,4"
cardsEl.textContent = "Cards: " + cards[0] +"," + cards[1]
// Create a function called startgame() that calls renderGame()

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  // Generate two random numbers
  // Re-assign the cards and sum variables so that the game can start
  renderGame()
}


// create a startGame() function. Move the conditional //below (line 11-20) inside the body of the function
function renderGame() {
  // render out firstCard and secondCard
  cardsEl.textContent = "Cards: "
  // render out all the cards we have
  
  //create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  // render the sum paragraph on the page using this format= Sum:14
  sumEl.textContent ="Sum: " + sum
    //2. Reassign the message variable to the string we are logging out

  // Write the conditional according to these rules

  // if less than or equals to 20, "Do you want to draw a new card?"
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message =  "Wahoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  // else if exactly 21: "Wahoo! You've got Blackjack!"
  //else: "You're out of the game!"

  // Display the message in the messageEl using messageEl.textContent

  // Cash out! 
  //console.log(message)   
  messageEl.textContent = message
  
}

function newCard() {
  // only allows the player to get a new card if she IS alive and does NOT have Blackjack
  if( isAlive === true &&  hasBlackJack === false ) {
    console.log("Drawing a new card")
  // create a card variable, and hard code its value to a number (2-11)
    let card = getRandomCard()



  //2. add the new card to the sum variable 
     sum += card
  // Push the card to the cards array
    cards.push(card)

  // call startGame
    renderGame()
  }


  
} 

