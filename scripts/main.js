

// // Import the FishList function from the correct module
// import {} from ''

// /*
//     What is the CSS selector for the element where you
//     want to display the fish?

//     Use . for elements with a "class" attribute
//     Use # for elements with an "id" attribute
//  */
// const parentHTMLElement = document.querySelector(".info")


// parentHTMLElement.innerHTML = FishList()

import {getFish} from './database.js'

const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}