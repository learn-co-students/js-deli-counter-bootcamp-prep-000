var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson +". You are number "+ position +" in line.";
}


function nowServing (katzDeliLine) {
var newPerson;

if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
}

newPerson = katzDeliLine.shift();
return "Currently serving "+ newPerson + ".";
}


function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var myString = `The line is currently: 1. ${katzDeliLine[0]}`;

  for (let i = 1; i < katzDeliLine.length; i++) {
  myString += `, ${i+1}. ${katzDeliLine[i]}`;
}
return myString;
}

