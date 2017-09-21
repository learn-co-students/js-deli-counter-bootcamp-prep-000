var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length < 1) {
    return `There is nobody waiting to be served!`;
  } else {
    var firstInLine = line[0];
    line.shift();
    return `Currently serving ${firstInLine}.`;
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return `The line is currently empty.`;
  } else {
    var order =  `The line is currently: 1. ${line[0]}`;
    for (let i = 1; i < line.length; i++) {
      order += `, ${i + 1}. ${line[i]}`;
      }
      return order;
    }
  }
