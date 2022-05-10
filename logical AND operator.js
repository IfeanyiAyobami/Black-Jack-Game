let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse  && givesCertificate === true) {
  //if (givesCertificate === true) {
    generateCertificate()
 // }
}

function generateCertificate() {
  console.log("Generate certificate....")
}


let hasSolvedChallenge = false
let hasHIntsLeft = false


// create an if statement that checks both variables are false
if (hasSolvedChallenge && hasHIntsLeft === false){
  showSolution()
}
// If so, run the showSolution() funtion

function showSolution() {

  console.log("showing the solution....")
}

// Create two boolean variables, likesDocumentaries and likesStartups
let likesDocumentaries = true
let likesStartups = false
// Use an OR statements (||) to call recommendMOvie() if either of those variables are true
if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie()
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like")
}



 