var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ` + (katzDeliLine.indexOf(name) + 1) + ` in line.`;
}

function nowServing(katzDeliLine){
  var theLine = []
  for (var i = 0; i < katzDeliLine.length; i++){
    theLine.push(katzDeliLine[i]);
  }
  
  if (katzDeliLine.length >= 1) {
    katzDeliLine.shift()
  return `Currently serving ${theLine[0]}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var greeting = `The line is currently: 1. ${katzDeliLine[0]}`;
  if (katzDeliLine.length > 0) {
    for (var i = 1; i < katzDeliLine.length; i++){
      greeting += (", " + String(i + 1) + ". " + katzDeliLine[i]);
  }
  return greeting;
}
  else {
    return "The line is currently empty.";
  }
}

