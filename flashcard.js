// required node packages
  var BasicCard = require("./BasicCard");
  var ClozeCard = require("./ClozeCard");
  var inquirer = require("inquirer");
  var jsonfile = require("jsonfile");
  var basicFile = "basic-cards.json";
  var clozeFile = "cloze-cards.json";

// flashcard decks
var s53basicDeck = []; // deck holds array of basic flashcards
var s53clozeDeck = []; // deck holds array of cloze flashcards
var cardPlace = 0; // track which card is displayed
var keys = [];

jsonfile.readFile(basicFile, function(err, obj) {
  for (var key in obj){
    keys.push(key);
    console.log(keys.length);
  }
    var anObject = keys[0];
    console.log(obj.bCard001);
    // for (i = 0 ; i < keys.length; i++){
    //   var newCard = new BasicCard(obj[i].front, obj[i].back);
    //   // s53basicDeck.push(newCard);
    // }
    
    // console.log(obj);
    // console.log(obj.bCards[0].front);
    // console.log(`basic deck: ${s53basicDeck}`);
});

// jsonfile.readFile(clozeFile, function(err, obj) {
//   for (var key in obj){
//     s53clozeDeck.push(obj.cCards[key]);
//     console.log(`cloze deck: ${s53clozeDeck}`);
//     console.log(obj);
//     console.log(obj.cCards[key]);
//   }
// });

function studyCards(){
  console.log("FINRA Series 53 Flashcard Study!");
  inquirer
  .prompt([
    {
      type:"list",
      name: "choice",
      choices: ["basic flashcards", "cloze cards"],
      message: "which would you like to study from?"
    }
  ]).then(function(inq){
    if(inq.choice === "cloze cards"){
      // load list of cloze cards
      // launch cycleCards function
      cycleCards(s53clozeDeck, "cloze");
    } else {
      // load basic cards
      // launch cycleCards function
      cycleCards(s53basicDeck, "basic");
    }
  })
}

var cycleCards = function(deck, type){
  console.log(`Let's study from the ${type} deck`);
  console.log(`Card ${cardPlace + 1} of ${deck.length} total cards`);
  
  if (type === "basic"){
    if(deck[cardPlace].side === "front"){
      var showCard = deck[cardPlace].front;
    } else {
      var showCard = deck[cardPlace].back;
    }
  } else if (type === "cloze"){
    var showCard = deck[cardPlace].partial();
  }

  if (type === "basic"){
    var cardChoices = ["flip card", "next card", "restart"];
  } else {
    var cardChoices = ["reveal/hide", "next card", "restart"];
  }

  inquirer
  .prompt([
    {
      type: "list",
      message:`${showCard}`,
      choices: [cardChoices[0], cardChoices[1], cardChoices[2]],
      name: "move"
    }
  ]).then(function(inq){
      if(inq.move === "flip card"){
        deck[cardPlace].flipCard();
        cycleCards(deck, type);
      } else if (inq.move === "next card"){
        if (cardPlace === deck.length - 1){
          cardPlace = 0;
        } else {
          cardPlace++;
        } 
        cycleCards(deck, type);
      } else if (inq.move === "reveal/hide") {
          cycleCards(deck, type);
      } else {
          cardPlace = 0;
          studyCards();
      }
    })
}

// start app
// studyCards();


