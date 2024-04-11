// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
// //fisher-yates algorithm
// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i));
//         [array[i], array[random]] = [array[random], array[i]]
//     }
// }
// shuffle(cards)
// console.log(cards)

// The code above is for card randomization and shuffling

console.log('hello world');

let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let deck;

let canHit = true; // allows the player (you) to draw while yourSum <= 21

window.onload = function() {
    buildDeck();
};

function buildDeck() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const types = ["C", "D", "H", "S"];
    deck = [];

    // i is going to be the value of cards, j is going to be the suits of the cards 
    // so now we have to create an equation that is going to make the comination between both arrays for the card combos 
    
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < types.length; j++) {
            deck.push(values[i] + "-" + types[j]); // This will allow the values to cycle through the types and create those combos, its like an array 
        }
    }
    console.log(deck);
}
