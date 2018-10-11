

function takeANumber(currentLine, name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentlyFirst = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentlyFirst}.`;
  }
}

function currentLine(currentLine) {
  var katzDeliLine = [];
  if (currentLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < currentLine.length; i++) {
     var linePosition = i + 1;
     var lineName = currentLine[i];
     katzDeliLine.push(`${linePosition}. ${lineName}`);
    }
     return `The line is currently: ${katzDeliLine.join(", ")}`
  }
}