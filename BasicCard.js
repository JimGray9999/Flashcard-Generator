// basic flash card
// show the front, prompt user to flip the card over

// constructor to build a basic flash card
var BasicCard = function(front, back){
  this.front = front;
  this.back = back;
  this.side = "front";

  // flips the card over
  this.flipCard = function(){
    if (this.side === "front"){
      this.side = "back";
    } else {
      this.side = "front";
    }
  }
}

module.exports = BasicCard;