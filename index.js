let katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  let lineList = [];
  for(let i=0; i<katzDeliLine.length; i++) {
    let lineListItem = ` ${i+1}. ${katzDeliLine[i]}`
    lineList.push(lineListItem);
  }
  return `The line is currently:${lineList}`
}