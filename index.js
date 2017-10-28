function takeANumber(katzDeliLine, name) {
  var position = "Welcome, " + name + ". You are number " + (katzDeliLine.length + 1) + " in line.";
  katzDeliLine.push(name);
  return position;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " +  katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var lineString = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } else {
    for (var i=0; i<katzDeliLine.length; i++) {
      lineString += ( (i+1) + ". " + katzDeliLine[i]) ;
      if (i < katzDeliLine.length - 1) {
        lineString += ", ";
      }
    }
  return lineString;
  }
}
