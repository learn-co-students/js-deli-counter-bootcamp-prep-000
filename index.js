var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
   katzDeliLine.push(newName)
   return "Welcome, " + katzDeliLine[katzDeliLine.length - 1] + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  var serving = "Currently serving " + katzDeliLine[0] + ".";
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift();
    return serving;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var current = "The line is currently: ";
  if (katzDeliLine.length > 0) {
    for (i = 0; i < katzDeliLine.length; i++) {
    return current + (i + 1) + ". " + katzDeliLine[i];
    }
  } else {
    return "The line is currently empty."
  }
}