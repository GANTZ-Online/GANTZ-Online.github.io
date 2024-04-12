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
    shuffleDeck(); //create the function 'shuffledeck' which will be defined on line 36 
    starGame()
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
   // console.log(deck);

}// Randomization build will start below 

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame(){
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce();

}

function getValue(card) {
    let data = car.split ('=');
    let value = data[0];

    if(isNaN(value)) { // A J Q K 
        if (value =="A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card){
    if (card [0] =='A'){
        return 1;
    }
    return 0;
}