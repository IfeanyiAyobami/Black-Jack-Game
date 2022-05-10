//let randomNumber = Math.random() 

//console.log(randomNumber)



//let flooredNumber = Math.floor(3.45632)

// Try to modify the expression so that we get a range from 1 to 6
//let randomNumber = Math.floor(Math.random() *6) + 1
 //console.log(randomNumber)

// create a function rollDice(), that returns a random number between 1 and 6

function rollDice() {
  let randomNumber = Math.floor(Math.random() *6) + 1
  return randomNumber

}

console.log(rollDice())
