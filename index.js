var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
  katzDeliLine.push(name)
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function arrayLine(katzDeli) {
  var lineLength = katzDeli.length;
  var deliLine = [];
  deliLine.push(`1. ${katzDeli[0]}`);
  for (var i = 1; i < lineLength; i++) {
  deliLine.push(` ${i+1}. ${katzDeli[i]}`);
  }
  return deliLine
}

function currentLine(line) {
  var lineLength = line.length;
  if (line[0] === undefined){
    return "The line is currently empty."
  }
  else {
    return `The line is currently: ${arrayLine(line)}`
  }
}
