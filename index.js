function takeANumber (katzDeliLine, custName) {
  katzDeliLine.push(custName);
  return `Welcome, ${custName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.splice(0,1)}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    let list = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      list.push(`${ i + 1}. ${ katzDeliLine[i]}`);
    } 
    return 'The line is currently: ' + list.join(', ');
  } else {
    return `The line is currently empty.`;
  }
}




