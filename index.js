var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var beingServed = katzDeliLine.shift();
  if (katzDeliLine.length !== 0) {
    return `Currently serving ${beingServed}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length;

  switch (lineLength) {
    case 0:
      return "The line is currently empty.";
      break;
    case 1:
      return `The line is currently: 1. ${katzDeliLine[0]}`;
      break;
    case 2:
      return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}`;
      break;
    case 3:
      return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
      break;
    default:
      return `Sorry we're full.`
      break;
  }
}
