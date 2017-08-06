// basic flash card
// show the front, prompt user to flip the card over

// constructor to build a basic flash card
module.exports = function(front, back){
  this.front = front;
  this.back = back;
  this.side = "front";
}