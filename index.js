var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  }
  let lineList = [];
  for(var i=0; i<line.length; i++) {
    let lineListItem = ` ${i+1}. ${line[i]}`
    lineList.push(lineListItem);
  }
  return `The line is currently:${lineList}`
}