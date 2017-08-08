// cloze card
// find/replace the cloze text with "..."
// prompt user to guess 
// show the full text

// construction to build a cloze flash card
var ClozeCard = function(text, cloze){
  this.text = text;
  this.cloze = cloze;
  this.show = "full";

  // toggle between showing the full card and cloze deleted
  this.partial = function(){
    if (this.show === "full"){
      var clozeString = this.text;
      clozeString = clozeString.replace(this.cloze, "...");
      this.show = "cloze";
      return clozeString;
    }  else {
      this.show = "full";
      return this.text;
    }
  }
}

module.exports = ClozeCard;