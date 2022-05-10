let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let tangerineShelf = document.getElementById("tangerine-shelf")


// create a function hat puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop, a conditional statement
//and the textContent property

function sortFruit() {
    for (let i = 0; i< fruit.length; i++) {
        if (fruit[i]=== "🍊" ) {
            appleShelf.textContent += "🍊"
        } else if (fruit[i] === "🍎") {
            tangerineShelf.textContent +="🍎"
        }
    }
}

sortFruit()
