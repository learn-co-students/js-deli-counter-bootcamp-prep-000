function takeANumber(currLine, newName) {
  currLine.push(`${newName}`);
  return `Welcome, ${newName}. You are number ${currLine.length} in line.`;
}

function nowServing(currLine) {
  
  if (currLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${currLine.shift()}.`;
  
}

function currentLine(line) {
  var newLine = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  for (var i = 0; i < line.length; i ++) {
    newLine.push(" " + [i+1] + ". " + line[i]);
  }
  return "The line is currently:" + newLine;
}






