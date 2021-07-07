
function takeANumber(currentLine, name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;

  }
  else {
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }

}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    let theLine = [];
    for (let i = 0; i < currentLine.length; i++) {
      theLine.push(" " + (i + 1) + "." + " " + currentLine[i]);
    }
    return `The line is currently:${theLine}`;
  }

}

