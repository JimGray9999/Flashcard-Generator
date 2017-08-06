var basicCard = require("./BasicCard");
var clozeCard = require("./ClozeCard");
var inquirer = require("inquirer");

var bCardDeck = []; // deck holds array of basic flashcards
var cCardDeck = []; // deck holds array of cloze flashcards

var taxDisclosures = new basicCard(
  "Tax information disclosures",
  "must be disclosed on a customer confirmation like OID"
);

var msrbQual = new basicCard(
  "MSRB Exam Qualifications",
  "wait 30 days if fail, and if fail 3 times in a row, wait 6 months"
);

var intPayments = new clozeCard(
  "Interest payment claims filed, respond within 10 business days",
  "10"
);

var moneyLaundering = new basicCard(
  "3 stages of money laundering",
  "1. Placement 2. Layering 3. Integration"
);

console.log(taxDisclosures.front);
console.log(msrbQual.back);

// cloze card
// find/replace the cloze text with _ _

// basic card
// show the front, prompt user to change to the back