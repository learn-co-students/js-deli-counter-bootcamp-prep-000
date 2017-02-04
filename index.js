function takeANumber(katzDeliLine, name) {
  var line = katzDeliLine.length;
  katzDeliLine.push(name);
  line++;
  return `Welcome, ${name}. You are number ${line} in line.`;
}

function nowServing(katzDeliLine) {
  var line = katzDeliLine.length;
  if (line === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var current = katzDeliLine[0];
    katzDeliLine.shift(0);
    return `Currently serving ${current}.`;
  }
}

function currentLine(line) {
  var lineNumber = line.length - 1;
  var currentLine;
  if (lineNumber === -1) {
    currentLine = "The line is currently empty.";
  }
  else {
    var currentLine = "The line is currently: ";
    for (var i = 0; i < lineNumber; i++) {
      currentLine = `${currentLine}${i+1}. ${line[i]}, `;
    }
    currentLine = `${currentLine}${i+1}. ${line[i]}`;
  }
  return currentLine;
}
