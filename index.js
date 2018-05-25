function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
   return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var lineOrder = "The line is currently: ";
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
      if (i === line.length - 1) {
        lineOrder += `${i + 1}\. ${line[i]}`
      } else {
      lineOrder += `${i + 1}\. ${line[i]}, `;
      }
    }
    return lineOrder;
  }
}