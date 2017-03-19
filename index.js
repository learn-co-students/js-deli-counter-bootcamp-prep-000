 function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var announcement = `Currently serving ${deliLine[0]}.`;
    deliLine.shift();
    return announcement;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(theDeliLine) {
  if (theDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var names = `The line is currently: 1. ${theDeliLine[0]}`;
    for (var i = 1; i < theDeliLine.length; i++) {
      names = names + `, ${i + 1}. ${theDeliLine[i]}`;
    }
    return names;
  }
}