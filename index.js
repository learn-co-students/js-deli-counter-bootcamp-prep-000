function takeANumber(katzDeliLine, newName) {
  var numInLine = katzDeliLine.length + 1;
  var welcomeStr = "Welcome, " + newName + ". You are number " + numInLine + " in line.";

  katzDeliLine.push(newName);

  return welcomeStr;
}

function nowServing(katzDeliLine) {
  var servingStr = "Currently serving " + katzDeliLine[0] + ".";

  if (katzDeliLine[0] === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine.shift();

    return servingStr;
  }
}

function currentLine(katzDeliLine) {
  var waitingStr = "The line is currently: ";
  var newStr = "";
  var lineNum = 1;

  if (katzDeliLine[0] === undefined) {
    return "The line is currently empty.";
  } else {
      for (var i = 0; i < katzDeliLine.length; i++) {
        waitingStr = waitingStr + lineNum + ". " + katzDeliLine[i] + ", ";
        lineNum++;
      }

  }
  return waitingStr.slice(0, -2);
}
