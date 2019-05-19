function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    let nameStr = "The line is currently:";
    for (let i = 0; i < katzDeliLine.length; i++) {
      nameStr += ` ${i + 1}. ${katzDeliLine[i]}`
      if (i < katzDeliLine.length - 1) {
        nameStr += ',';
      }
    }
    return nameStr;
  }
}
