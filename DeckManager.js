// required node packages
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var jsonfile = require("jsonfile");
var basicFile = "basic-cards.json";
var clozeFile = "cloze-cards.json"; 

var DeckManager = function() {

  this.loadBasic = function(file){
    var deckArray = jsonfile.readFileSync(file);
    var newArray = [];
    for (i = 0 ; i < deckArray.length ; i++){
      var card = new BasicCard(deckArray[i].front, deckArray[i].back);
      newArray.push(card);
    }
    console.log(jsonfile.readFileSync(file));
    return newArray;
  }

  this.loadCloze = function(file){
    var deckArray = jsonfile.readFileSync(file);
    var newArray = [];
    for (i = 0 ; i < deckArray.length ; i++){
      var card = new ClozeCard(deckArray[i].text, deckArray[i].cloze);
      newArray.push(card);
    }
    console.log(jsonfile.readFileSync(file));
    return newArray;
  }
}

module.exports = DeckManager;