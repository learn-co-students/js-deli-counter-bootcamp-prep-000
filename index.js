var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var number = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + number + " in line.";
}

function nowServing(katzDeliLine) {
  var updatedLine = [];
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  updatedLine = katzDeliLine.shift()
    return 'Currently serving ' + updatedLine + '.'
  }
  return updatedLine;
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineTwo = [];
    for (var i = 0; i < line.length; i++) {
      lineTwo.push(" " + (i + 1) + ". " + line[i]);
 }
  }
  return "The line is currently:" + lineTwo;
}
