var basicCard = require("./BasicCard");
var clozeCard = require("./ClozeCard");

var bCardDeck = []; // deck holds array of basic flashcards
var cCardDesk = []; // deck holds array of cloze flashcards

var taxDisclosures = new basicCard(
  "Tax information disclosures",
  "must be disclosed on a customer confirmation like OID"
);

var msrbQual = new basicCard(
  "MSRB Exam Qualifications",
  "wait 30 days if fail, and if fail 3 times in a row, wait 6 months"
);

var intPayments = new clozeCard(
  "Interest payment claims filed respond within 10 business days",
  "10"
);

console.log(taxDisclosures.front);
console.log(msrbQual.back);