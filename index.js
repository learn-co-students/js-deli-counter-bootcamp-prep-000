function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var stringToReturn = `The line is currently: 1. ${line[0]}`;
    for (let i = 1; i < line.length; i++) {
      stringToReturn += `, ${i + 1}. ${line[i]}`;
    }
    return stringToReturn;
  }
}