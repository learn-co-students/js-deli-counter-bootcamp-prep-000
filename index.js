//Build a function that a new customer will use when entering the deli.

var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  return(`Welcome, ` + name + `. You are number ` + katzDeliLine.length++ + ` in line.`);
}

function nowServing(katzDeliLine) {
  
}

function currentLine(katzDeliLine) {
  return `The line is currently: ` + katzDeliLine + `.`;
}