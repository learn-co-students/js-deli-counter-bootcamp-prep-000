var katzDeli = [];

var takeANumber = function(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
    return (`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
}

var nowServing = function(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else if (katzDeliLine.length > 0) {
    var nextPerson = katzDeliLine.shift();
  return "Currently serving " + nextPerson + ".";
  }
}
var currentLine = function(katzDeliLine) {
  var array =[];
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for(var i = 0; i < katzDeliLine.length; i++) {
    var nextInLine = ` ${i+1}. ${katzDeliLine[i]}`;
    array.push(nextInLine);
  }
  return `The line is currently:${array}`;
}
