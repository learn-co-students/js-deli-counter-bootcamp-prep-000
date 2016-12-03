var katzDeli = [];
var katzDeliLine = [];
var newArray = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var i = katzDeliLine.indexOf(name) + 1;
  newArray.push(i);
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

var positions = [];

function currentLine(katzDeliLine) {
    if(katzDeliLine.length !== 0) {
      return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  } else {
    return "The line is currently empty."
  }
}
