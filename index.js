//Build a function that a new customer will use when entering the deli.

var katzDeliLine = ['Ada'];

function takeANumber(katzDeliLine, name) {
  
  return(`Welcome, ` + name + `. You are number ` + katzDeliLine.length + ` in line.`);
}

function nowServing(katzDeliLine) {
  
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
  return `The line is currently empty.`;
  }
}