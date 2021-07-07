var katzDeli = [];

function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName)
  var tell = `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`;
  return tell;
}

function nowServing(deliLine) {
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    for (var position = (deliLine.length); position > 0; position--) {
      var announcement = `Currently serving ${deliLine[0]}.`;
      deliLine.shift(0);
      return announcement;
      }
  }
}

function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else {
    var message = "The line is currently: ";
    for (var linePosition = 0; linePosition < line.length; linePosition++) {
      if (linePosition != (line.length-1)) {
          message = message + `${(linePosition+1)}. ${line[linePosition]}, `;
        }
        else {
        message = message + `${(linePosition+1)}. ${line[linePosition]}`
        }
      }
    }
    return (message);
}
