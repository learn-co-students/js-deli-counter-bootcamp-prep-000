var katzDeliLine = [];

// Adds a new name to the line and welcomes them
function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

// Serves the first name in line and removes them from line
function nowServing(line) {
  if (line.length > 0) {
    var firstInLine = line[0];
    line.shift();
    return "Currently serving " + firstInLine + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

// Returns the names of people in line
function currentLine(line) {
  if (line.length > 0) {
      var whosInLine = [];
      for (let i = 0; i < line.length; i++) {
        whosInLine.push(" " + (i + 1) + ". " + line[i]);
      }
    return "The line is currently:" + whosInLine;
  } else {
    return "The line is currently empty.";
  }
}
