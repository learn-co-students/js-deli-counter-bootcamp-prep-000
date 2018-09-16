function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
    let place = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!";
  } else {
    let name = katzDeliLine.shift();
  return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
  return "The line is currently empty.";
  } else {
    var deliLine = [];
  for (var i = 0; i < line.length; i++) {
    deliLine.push(` ${i+1}. ${line[i]}`); 
    }
    return ("The line is currently:" + deliLine);
  }
}