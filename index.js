var katzDeli = [];

function takeANumber(katzDeli, newPerson) {
  var position = katzDeli.length + 1;
  katzDeli.push(newPerson);
  return "Welcome, " + newPerson +". You are number "+ position +" in line.";
}


function nowServing (katzDeli) {
var newPerson;

if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!";
}

newPerson = katzDeli.shift();
  return "Currently serving "+ newPerson + ".";
}


function currentLine (katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }

  var myString = `The line is currently: 1. ${katzDeli[0]}`;

  for (let i = 1; i < katzDeli.length; i++) {
  myString += `, ${i+1}. ${katzDeli[i]}`;
}
return myString;
}

