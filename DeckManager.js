// required node packages
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var jsonfile = require("jsonfile");
var basicFile = "basic-cards.json";
var clozeFile = "cloze-cards.json"; 

var DeckManager = function() {
var keys = [];

  this.loadBasic = function(deck, file){
    jsonfile.readFile(file, function(err, obj) {
      for (var key in obj){
        // let newCard = new BasicCard(obj.id[key].front, obj.id[key].back);
        console.log(obj.basic[0]);
        deck.push(obj.basic[key]);
      }
      console.log("Deck loaded");
      return deck;
    });
  }

  this.loadCloze = function(deck, file){
    jsonfile.readFile(file, function(err, obj) {
      for (var key in obj){

        let newCard = new ClozeCard(cloze.obj[key].front, cloze.obj[key].back);
        console.log(newCard);
        deck.push(newCard);
      }
      console.log("Deck loaded");
      return deck;
    });
  }
}

module.exports = DeckManager;