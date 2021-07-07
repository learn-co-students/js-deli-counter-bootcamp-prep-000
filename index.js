var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var served = line.slice(0, 1);
    line.shift();
    return `Currently serving ${served}.`;
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var lineup = [];
    for (var i = 0; i < line.length; i++) {
      lineup.push(` ${i + 1}. ${line[i]}`);
    }
  return `The line is currently:${lineup}`    
  }
}