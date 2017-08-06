// cloze card
// find/replace the cloze text with "..."
// prompt user to guess 
// show the full text

// construction to build a cloze flash card
module.exports = function(text, cloze){
  this.text = text;
  this.cloze = cloze;
  this.show = "full";
}