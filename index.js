var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  var line = 'The line is currently: ';

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }

  for (let i = 0; i < katzDeliLine.length; i++) {
    line += `${i + 1}. ${katzDeliLine[i]}`;
    if (i !== katzDeliLine.length - 1) {
      line += ', '
    }
  }

  return line;
}
