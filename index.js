function takeANumber(katzDeliLine, newPersonsName) {
  katzDeliLine.push(newPersonsName);

  return `Welcome, ${newPersonsName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var currentCustomer = deliLine.shift();

    return `Currently serving ${currentCustomer}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    var newLine = [];

    for (var i = 0; i < line.length; i++) {
      newLine.push(`${i + 1}. ${line[i]}`)
    }

    return `The line is currently: ${newLine.join(', ')}`
  }
}
