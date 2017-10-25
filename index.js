var katzDeliLine = [];
function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);

  var position = katzDeliLine.length;

  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  var firstInLine = katzDeliLine[0]
  if (firstInLine) {
    var finalValue = "Currently serving " + firstInLine + ".";
    katzDeliLine.shift();
    return finalValue;
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliLine) {
  var currentLineStatement = ["The line is currently:"]
  if (katzDeliLine[0]) {
    for (var i = 0; i<katzDeliLine.length; i++) {
    var position = i+1 + ".";
    currentLineStatement.push(" " + position + " " + katzDeliLine[i]);
    currentLineStatement.push(",");
    }
  currentLineStatement.pop();
  return "".concat(...currentLineStatement);
  } else {
  return "The line is currently empty."
  }
}
