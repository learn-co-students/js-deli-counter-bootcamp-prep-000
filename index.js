function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineString = `The line is currently: 1. ${line[0]}`;
    for (var i = 1; i < line.length; i++){
      lineString += `, ${i+1}. ${line[i]}`
    }
    return lineString;
  }
}