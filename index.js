function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine = katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift(0)}.`;
  } else if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
}



function currentLine(katzDeliLine) {
  let arr = [];
  if (katzDeliLine.length >= 1) {
    for (let num = 0; num < katzDeliLine.length; num++) {
      arr.push(` ${num + 1}. ${katzDeliLine[num]}`);
    }
  return `The line is currently:${arr}`;
  } else if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
}
