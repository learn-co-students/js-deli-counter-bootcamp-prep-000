function takeANumber(line, next) {
  line.push(next);
  var lineLength = line.length;
  return "Welcome, " + next + ". You are number " + lineLength + " in line.";
}

function nowServing(katzDeliLine) {
  var currCust;
  if (katzDeliLine.length > 0) {
    currCust = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.splice(0,1);
  } else {
    currCust = "There is nobody waiting to be served!";
  }
  return currCust;
}

function currentLine(line) {
  var currLine = "The line is currently: 1. ";
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      currLine += line[i];
        if (i < line.length - 1) {
          currLine += ", " + (i + 2) + ". ";
        }
    }
  } else {
    currLine = "The line is currently empty.";
  }
  return currLine;
}