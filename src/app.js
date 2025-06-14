import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let symbolsTags = document.querySelectorAll('.card-symbol')
  let textCard = document.getElementById('card-text')

  const numbers = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]
  const symbols = ['♥', '♠', '♦', '♣']

  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const randomSymbol = getRandom(symbols);

  textCard.textContent = getRandom(numbers)
  symbolsTags.forEach(symbol => {
    symbol.textContent = randomSymbol;
    symbol.textContent === '♥' || symbol.textContent === '♦' ? symbol.style.color = 'red' : ''
  });
};
