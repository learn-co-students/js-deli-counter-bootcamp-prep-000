
var katzDeli = [];

function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentPerson = katzDeliLine.shift();
    return `Currently serving ${currentPerson}.`;
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
  } else {
    var i = 0;
    for ([i = 0]; [i < katzDeliLine.length]; [i++]) {
      var numberedLine = [];
      var personIndex = i + 1;
      var numberedPerson = `${personIndex}. ${katzDeliLine[i]}`;
      numberedLine.push(numberedPerson);
    }
    return `The line is currently: ${numberedLine}.`;
  }
}