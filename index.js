var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${ newPerson }. You are number ${ katzDeliLine.indexOf(newPerson) + 1 } in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${ katzDeliLine.shift() }.`
  }
}

function currentLine(line) {
  if (line[0] === undefined) {
    return "The line is currently empty.";
  } else {
    var newLine = [];
    for (var i = 0; i < line.length; i++) {
      newLine.push(` ${ i + 1}. ${ line[i]}`);
    }
    return `The line is currently:${ newLine }`;
  }
}
