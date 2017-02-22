var katzDeliLine = [];

function takeANumber(deliLine, newPerson) {
  deliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + deliLine.length + " in line.";
}

function nowServing(deliLine) {
  var serving = "Currently serving ";
  var empty = "There is nobody waiting to be served!";
  return deliLine.length > 0 ? (serving + deliLine.shift() + "."): empty;
}

function currentLine(deliLine) {
  var string = "The line is currently:";
  var empty = "The line is currently empty.";
  for (var i = 0; i < deliLine.length; i++) {
    if (i != deliLine.length - 1) {
      deliLine[i] += ",";
    }
    string += " " + (i+1) + ". " + deliLine[i];
  }
  return deliLine.length > 0 ? string : empty;
}
