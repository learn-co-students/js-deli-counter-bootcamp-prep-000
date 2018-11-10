function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return 'The line is currently empty.';
  } else {
    let baseString = 'The line is currently: ';
    baseString = baseString + `1. ${katzDeliLine[0]}`;
    let i = 1;
    while (i < katzDeliLine.length) {
      baseString = baseString + `, ${i + 1}. ${katzDeliLine[i]}`;
      i++;
    }
    return baseString;
  }
}