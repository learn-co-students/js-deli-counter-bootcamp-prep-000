var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  var numOfPeopleInLine = katzDeliLine.length;
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${numOfPeopleInLine + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextCustomer = katzDeliLine.shift();
    return `Currently serving ${nextCustomer}.`;
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  }
  var lineString = "The line is currently:";
  for(let i = 0; i < line.length; i++) {
    lineString = lineString + `${i===0?'':','} ${i+1}. ${line[i]}`;
  }
  return lineString;
}
