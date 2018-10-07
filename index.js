function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var numberInLine = [];
    for (var i = 0; i < line.length; i++) {
      numberInLine.push((i + 1) + ". " + line[i]);
    }
    return `The line is currently: ${numberInLine.join(", ")}`;
  }
}
