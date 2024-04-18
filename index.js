// console.log('hello world');

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
    startGame()
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
   
}

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
// //fisher-yates algorithm
// function shuffleDeck(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i));

//         [array[i], array[random]] = [array[random], array[i]]
//     }
// }
// shuffle(cards)
// console.log(cards)

function startGame(){
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);    this is for the dealers hidden cards 
    // console.log(dealerSum); this is to check and see if the dealers card value changes when refreshing the site

    while (dealerSum < 17){
        let cardImg = document.createElement("img"); // created an image tag 
        let card = deck.pop();   // this allows to get the card fromd deck 
        cardImg.src = "./cards/" + card + ".png" // this wil allow the program to select the card by seperating the titles and by file name
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealerSum);
// player cards
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img"); 
        let card = deck.pop();  
        cardImg.src = "./cards/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }
    console.log(yourSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);

}
function hit (){
    if (!canHit) {
        return;
     
    }
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSume,yourAceCount)>21 ) {
        canHit = false;
    }

}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);
    canHit = false;
    document.getElementById("hidden").src= "./cards/" + hidden + ".png";
    let message = "";
    if (yourSum > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21 ) {
        message = "You Win!";
    }
// both you and the dealer < = 21 

    else if (yourSum == dealerSum) {
    message = "It's a Tie!";
    }
    else if (yourSum > dealerSum) {
    message = "You Win!";
    }
    else if (yourSum < dealerSum) {
    message = "You Lose!";
    }
    document.getElementByID("results").innerHTML = message;
}




function getValue(card) {
    let data = card.split ('=');
    let value = data[0];

    if(isNaN(value)) { // A J Q K 
        if (value == "A") {
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

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && pplayerAceCount > 0){
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}