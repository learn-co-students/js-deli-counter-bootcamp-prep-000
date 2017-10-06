var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomerName) {
  katzDeliLine.push(newCustomerName);
  var placeInLine = katzDeliLine.indexOf(newCustomerName) + 1;
  return "Welcome, " + newCustomerName + ". You are number " + placeInLine + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var currentLine = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      line[i] = (i+1) + '. ' + line[i];
    }
    currentLine += line.join(', ');
    return currentLine;
  }
}
