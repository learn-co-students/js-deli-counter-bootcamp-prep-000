var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  var welcomeMessage;
  katzDeliLine.push(newPerson);
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === newPerson) {
      welcomeMessage = "Welcome, " + newPerson + ". You are number " + (i + 1) + " in line.";
    }
  }
  return welcomeMessage;
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextPerson = line.shift();
    return "Currently serving " + nextPerson + ".";
  }
}

function currentLine(line) {
  var peopleInLine = "The line is currently: ";
  if (!line.length) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
      peopleInLine += (i + 1) + ". " + line[i];
      if (i < line.length - 1) {
        peopleInLine += ", ";
      }
    }
    return peopleInLine;
  }
}
