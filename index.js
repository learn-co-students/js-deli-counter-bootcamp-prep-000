function takeANumber(deliLine, name) {
  deliLine.push(name); //adds person to line-array will have //existing names plus new name
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine[0] === undefined) {
    return "There is nobody waiting to be served!";
  }
  else {return `Currently serving ${deliLine.shift()}.`}
}

function currentLine(deliLine) {
  if (deliLine[0] === undefined) {
        return "The line is currently empty.";
    }
  else {
    var line = [];
    for (var i = 0; i < deliLine.length; i++) {
      line.push(" " + `${i + 1}. ${deliLine[i]}`);
    }
    return ("The line is currently:" + line.join());
  }
}