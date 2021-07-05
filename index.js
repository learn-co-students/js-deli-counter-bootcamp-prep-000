var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  var linePosition = katzDeliLine.length;
  return `Welcome, ${newPerson}. You are number ${linePosition} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var linePosition = i + 1;
      var personInLine = katzDeliLine[i];
      if (i === 0) {
        line.push(`${linePosition}. ${personInLine}`);
      } else {
        line.push(` ${linePosition}. ${personInLine}`);
      }
    }
    return `The line is currently: ${line}`;
  }
}