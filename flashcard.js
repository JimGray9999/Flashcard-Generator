// required node packages
  var basicCard = require("./BasicCard");
  var clozeCard = require("./ClozeCard");
  var inquirer = require("inquirer");

// prototype functions //
  // toggle between showing the full card and cloze deleted
  clozeCard.prototype.partial = function(card){

    if (this.show === "full"){
      var clozeString = this.text;
      clozeString = clozeString.replace(this.cloze, "...")
      this.show = "cloze";
      return clozeString;
    }  else {
      this.show = "full";
      return this.text;
    }
  };

  // flips the card over
  basicCard.prototype.flipCard = function(card){
    if (this.side === "front"){
      this.side = "back";
      return card.back;
    } else {
      this.side = "front";
      return card.front;
    }
  }
// end prototype functions //

// flash cards
  // basic cards
  var taxDisclosures = new basicCard(
    "Tax information disclosures",
    "must be disclosed on a customer confirmation like OID"
  );

  var msrbQual = new basicCard(
    "MSRB Exam Qualifications",
    "wait 30 days if fail, and if fail 3 times in a row, wait 6 months"
  );

  var moneyLaundering = new basicCard(
    "3 stages of money laundering",
    "1. Placement 2. Layering 3. Integration"
  );

  // cloze cards
  var intPayments = new clozeCard(
    "Interest payment claims filed, respond within 10 business days",
    "10"
  );
// end flashcards

// flashcard decks
var s53basicDeck = [taxDisclosures, msrbQual, moneyLaundering]; // deck holds array of basic flashcards
var s53clozeDeck = [intPayments]; // deck holds array of cloze flashcards

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
      // todo : load list of cloze cards
      // todo : launch cycleCards function
      cycleCards(s53clozeDeck, "cloze");
    } else {
      // todo: load basic cards
      // todo : launch cycleCards function
      cycleCards(s53basicDeck, "basic");
    }
  })
}

var cycleCards = function(deck, type){
  console.log(`Let's study from the ${type} deck`);
  inquirer
  .prompt([
    {

    }
  ])
}

// start app
studyCards();


