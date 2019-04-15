var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var the_line = `The line is currently: 1. ${line[0]}`
    for (var i=2; i < line.length+1; i++) {
      the_line += ", " + i + ". " + line[i-1];
    }
    return the_line;
  }
}
