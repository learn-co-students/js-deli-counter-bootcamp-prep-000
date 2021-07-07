function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var lineString = "The line is currently: "
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    lineString = lineString.concat(`${i+1}. ${katzDeliLine[i]}`);
    if (katzDeliLine.length - i !== 1) {
      lineString = lineString.concat(', ');
    }
  }
  return lineString;
}