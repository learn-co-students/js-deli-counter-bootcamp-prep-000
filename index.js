function takeANumber(katzDeliLine, person) {
  if (katzDeliLine.length === 0) {
    katzDeliLine[0] = person;
    number = 1;
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === person) {
      var number = i + 1;
    }
  }
  if (katzDeliLine.length > 0 && number === undefined) {
    katzDeliLine.push(person);
    number = katzDeliLine.length;
  }
  return `Welcome, ${person}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var cLine = "";
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      cLine= cLine + `${i + 1}. ${katzDeliLine[i]}, `;
    }
    return "The line is currently: " + cLine + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;
  }
}
