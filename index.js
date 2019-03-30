function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  let currentNumber = 1 + katzDeliLine.indexOf(newName);
  
  return `Welcome, ${newName}. You are number ${currentNumber} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    let lineMessage = 'The line is currently: ';
    
    for (let i = 0; i < katzDeliLine.length; i++) {
      let customer = katzDeliLine[i];
      let number = i + 1;
      lineMessage += `${number}. ${customer}, `
    }
      lineMessage = lineMessage.slice(0, lineMessage.length-2)
      
      return lineMessage;
  } else {
    
    return 'The line is currently empty.'
  }
}