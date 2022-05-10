// Create a person object that contains three keys: name, age, and country.
let person = {
    name:"Ifeanyi",
    age :"28",
    country : "Nigeria"
}

function logData() {
   console.log(person.name + " is " + person.age + 
   "years old" + " lives in " + person.country)
}
logData()



// for loop.js

let largeCountries = ["China", "India", "Indonesia", "Pakistan"]

/* Use a for loop to log the following console  
The 5 largest countries in the world:
China
India
United States
Indonesia
Pakistan
*/


console.log("The 5 largest countries in the world:")
for (let i =0; i < largeCountries.length; i++) {
    console.log("-" + largeCountries[i])
}   