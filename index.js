function takeANumber(peopleInLine, personName) {
  peopleInLine.push(personName);
  return "Welcome, " + personName + ". You are number " + peopleInLine.length + " in line."
}

function nowServing(katzDeliLine) {
 var firstPerson;
 if (katzDeliLine.length === 0) {
   firstPerson = 'There is nobody waiting to be served!';
 } else {
   firstPerson = "Currently serving " + katzDeliLine[0] + ".";
 }
 katzDeliLine.shift();
 return firstPerson;
}

function currentLine(katzDeliLine) {
  var lineAsString = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    lineAsString = "The line is currently empty."
  } else {
    for (var num = 0; num < katzDeliLine.length - 1; num++) {
      lineAsString = lineAsString + (num + 1) + ". " + katzDeliLine[num] + ", ";
    }
    lineAsString = lineAsString + (num + 1) + ". " + katzDeliLine[num];
  }
  return lineAsString;
}