// var katzDeliLine = [];
var lastServed = 0;

var takeANumber = function(katzDeliLine){
  console.log("You are "+lastServed+1+ "in line.")
  katzDeliLine.push(lastServed);
  // var position = katzDeliLine.length;
  // return "Welcome, "+name+". You are number " +position+ " in line.";
}

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length <= 0){
    return "There is nobody waiting to be served!";
  } else {
    lastServed = katzDeliLine.shift()
    return "Currently serving " + lastServed + ".";
  }
}

var currentLine = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(" "+(i+1) + ". " + katzDeliLine[i]);
    }
    return "The line is currently:" + line;
    } else {
    return "The line is currently empty.";
  }
}
