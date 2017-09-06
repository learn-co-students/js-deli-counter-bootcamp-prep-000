var katzDeliLine = [];

function takeANumber (katzDeliLine, person) {
    katzDeliLine.push(person);
    var lineLength = katzDeliLine.length;
    var positionInLine = "Welcome, "+ person + ". You are number "+ lineLength + " in line.";
    return positionInLine;
}

function nowServing (katzDeliLine) {
  var nextCustomer = katzDeliLine[0];
  if (katzDeliLine.length > 0) {
    return "Currently serving " + nextCustomer +".";
    katzDeliLine.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine (katzDeliLine) {
  var currentLine = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    currentLine.push(katzDeliLine[i]);
  }
  if (katzDeliLine.length > 0) {
    return "The line is currently: 1. " + katzDeliLine[1] + ;
  } else {
  return "The line is currently empty.";
}
