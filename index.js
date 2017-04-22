function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var line = 'The line is currently: 1. ' + katzDeliLine[0];
    for (var n = 1; n < katzDeliLine.length; n++) {
      line = line + `, ${n+1}. ${katzDeliLine[n]}`;
    }
    return line
  }
}