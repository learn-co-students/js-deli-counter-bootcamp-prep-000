var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  var greeting = `Welcome, ${newName}. You are number ${katzDeliLine.length+1} in line.`;
  katzDeliLine.push(newName);
  return greeting;
}

function nowServing(katzDeliLine) {
  var serving;
  if (katzDeliLine.length === 0) {
    serving = "There is nobody waiting to be served!";
  }
  else {
    serving = `Currently serving ${katzDeliLine[0]}.`;
  }
  katzDeliLine.shift();
  return serving;
}

function currentLine(katzDeliLine) {
  var line = "The line is currently";
  if (katzDeliLine.length === 0) {
    line = line + " empty.";
  }
  else {
    line = line + `: 1. ${katzDeliLine[0]}`;
    for (var i = 1; i<katzDeliLine.length; i++) {
      line = line + `, ${i+1}. ${katzDeliLine[i]}`;
    }
  }
  return line;
}