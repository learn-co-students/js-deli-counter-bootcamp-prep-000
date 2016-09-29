var katzDeli = [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
  }

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    return `The line is currently: ${katzDeliLine.length - 2}. ${katzDeliLine[katzDeliLine.length - 3]}, ${katzDeliLine.length - 1}. ${katzDeliLine[katzDeliLine.length - 2]}, ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`
  }
}
