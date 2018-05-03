function takeANumber(katzDeliLine, newPersonName) {
  var nextPosition = katzDeliLine.length+1;
  katzDeliLine.push(newPersonName);
  return `Welcome, ${newPersonName}. You are number ${nextPosition} in line.`;
}

function nowServing(katzDeliLine) {
  if ( katzDeliLine.length < 1 ) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  var message = "The line is currently: ";
  if ( line.length === 0 ) {
    message = "The line is currently empty."
  } else {
    for ( var i = 0; i < line.length; i++ ) {
      if ( i !== line.length-1) {
        message = message + parseInt(i+1) + ". " + line[i] + ", ";
      } else {
        message = message + parseInt(i+1) + ". " + line[i];
      }
    }
  }
  return message;
}