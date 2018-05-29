
function takeANumber(deliLine, newName) {
  deliLine.push(newName);
  var position = deliLine.length;
  return "Welcome, " + newName + ". You are number " + position + " in line.";
}

function nowServing(deliLine) {
 if (deliLine.length === 0 ) {
  return "There is nobody waiting to be served!";
 }
 else {
  return "Currently serving " + deliLine.shift() + ".";
 }
}

function currentLine(deliLine) {
  var currentLine = "";
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i=0; i < deliLine.length; i++) {
      var index = i + 1;
      if (i === deliLine.length - 1) {
         currentLine = currentLine + index + ". " + deliLine[i];
      }
      else {
         currentLine = currentLine + index + ". " + deliLine[i] + ", ";
      }
    }
  }
  return "The line is currently: " + currentLine;
}