var katzDeliLine = [];

// Adds a new name to the line and welcomes them
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

// Serves the first name in line and removes them from line
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstInLine + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

// Returns the names of people in line
function currentLine(katzDeliLine) {
  var i = 0
  var whosInLine = [];
  while(i < katzDeliLine.length) {
     whosInLine.push(" " + (i + 1) + ". " + katzDeliLine[i]);
     i++;
  }
  if (katzDeliLine.length > 0) {
    return "The line is currently:" + whosInLine;
  } else {
    return "The line is currently empty.";
  }
}
