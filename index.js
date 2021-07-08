
var katzDeli = [];

function takeANumber(currentLine, name) {
  currentLine.push(name);
  var currentLength = currentLine.length;
  return `Welcome, ${name}. You are number ${currentLength} in line.`;
}

function nowServing(currentLine) {
  if(currentLine.length <= 0) {
    return "There is nobody waiting to be served!"
  }
  var currentCustomer = currentLine.shift();
  return `Currently serving ${currentCustomer}.`;
}

function currentLine(currentLine) {
  if(currentLine.length <= 0) {
    return "The line is currently empty.";
  } else {
    var lineString = "The line is currently: ";
    for(var i = 0; i < currentLine.length; i++) {
      var lastElement = (i=== currentLine.length - 1);
      lineString = lineString + +(i+1) + ". " + currentLine[i];
      if(!lastElement) {
        lineString = lineString + ", ";
      }
    }
    return lineString;
  }
}
