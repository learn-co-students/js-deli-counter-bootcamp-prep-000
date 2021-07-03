function takeANumber(katzDeliLine, newPerson) {
  var placeInLine = katzDeliLine.length === 0 ? 1 : katzDeliLine.length + 1;
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${placeInLine} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentlyServing = katzDeliLine.shift();
    return `Currently serving ${currentlyServing}.`
  }
}

function currentLine(katzDeliLine) {
  var currentLineString = 'The line is currently: ';

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  for (var i = 0; i < katzDeliLine.length; i++) {
    currentLineString += `${i + 1}. ${katzDeliLine[i]}${i === katzDeliLine.length - 1 ? '' : ', '}`;
  }

  return currentLineString;
}
