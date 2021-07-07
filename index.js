var katzDeli = [];

function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  
  return `Welcome, ${newPersonName}. You are number ${katzDeliLine.indexOf(newPersonName) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    let message = 'The line is currently: ';
    for(let i = 0; i < katzDeliLine.length; i++) {
      message += `${i + 1}. ${katzDeliLine[i]}${i < katzDeliLine.length - 1 ? ', ' : ''}`;
    }
    return message;
  } else {
    return 'The line is currently empty.';
  }
}