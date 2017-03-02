var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentPerson = katzDeliLine.shift();
    return `Currently serving ${currentPerson}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = `The line is currently: 1. ${katzDeliLine[0]}`;
    for (let i = 1; i < katzDeliLine.length; i++) {
      line = `${line}, ${i + 1}. ${katzDeliLine[i]}`
    }
  }
  return line
}
