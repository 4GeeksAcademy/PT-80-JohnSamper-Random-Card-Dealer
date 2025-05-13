import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const suits = ['♠', '♥', '♦', '♣'];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

function shuffleCards (min,max){
  return Math.floor(Math.random() * (max - min) + min );
}
function Shuffle(anyArray){
  let max = anyArray.length -0;
  let min = 0;
  let random = shuffleCards(min,max)
  return anyArray [random];
}

window.onload = function() {

  // Set a random suit for the top and bottom (fixed)
  const randomSuitTop = Shuffle(suits);
  const randomSuitBottom = randomSuitTop; // <--- this makes sure the top and bottom suit are the same 

  // Function to generate a new random card when called
  function generateNewCard() {
    // Get a random number
    const randomNumber = Shuffle(numbers);

    // Update the inner HTML of the card with the new number (suits remain the same)
    document.querySelector('#Card').innerHTML = `
      <span class="top-suit">${randomSuitTop}</span>
      <span class="number"><strong>${randomNumber}</strong></span>
      <span class="bottom-suit">${randomSuitBottom}</span>
    `;
  }

  // Call the function once when the page loads to display the first card
  generateNewCard();

  //write your code here
  console.log("Hello Rigo from the console!");
  console.log()
  
};


