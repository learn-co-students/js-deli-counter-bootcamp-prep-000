function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  nowServing = katzDeliLine.shift();
  return `Currently serving ${nowServing}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  var order = `The line is currently: 1. ${katzDeliLine[0]}`;
  for (var i = 1; i < katzDeliLine.length; i++) {
    order += `, ${i + 1}. ${katzDeliLine[i]}`
  }
  return order;
}