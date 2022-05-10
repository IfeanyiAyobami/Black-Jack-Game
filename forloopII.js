

// Create a for loop that counts from 10 to 100 in steps of 10
//for( let count= 10; count<101 ; count+= 10) {
 // console.log(count)
//}
// Use console.log to log out the numbers

//let messages = [
 // "Hey, how's it going?",
 // "I'm great, thank you! How about you?",
 // "All good. Been working on my portfolio lately",
 // "Same here!"

//]
//DRY  - dON'T REPEAT YOURSELF

//array based for loop
//let cards = [7, 3, 9]



// create a for loop that logs out all the cards in the array
//for (let i = 0; 1<cards.length; i++) {
  //console.log(cards[i])
//}
// Use cards.length to specify ow long the loop shoud run
let sentence = ["Hello", "my ", "name ", "is ", "Ifeanyi"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragrap using a for loop and .text content

for (let i = 0; i < sentence.length; i++) {
   greetingEl.textContent += sentence[i]
}