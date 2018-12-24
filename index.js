//Build a function that a new customer will use when entering the deli.

var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ` + name + `. You are number ` + katzDeliLine.length + ` in line.`);
}
// above function is not done, the customer's place in line reflects

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return(`There is nobody waiting to be served!`);
  } else {
    katzDeliLine.shift();
    return(`Currently serving ` + katzDeliLine[0] +  `.`);
  }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
  return(`The line is currently empty.`);
  } else {
    return(`The line is currently: ` + (katzDeliLine.length - (katzDeliLine.length - 1)) + `.`);
  }
}