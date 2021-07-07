var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  var next = katzDeliLine.shift();
  return next ? `Currently serving ${next}.` : "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "The line is currently empty.";
}
  else {
    var lineCount = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
    lineCount+=`${i+1}. ${katzDeliLine[i]}, `
  }
    var finalStatement = lineCount.slice(0,-2); 
    return finalStatement;
    }
}