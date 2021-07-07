var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var i = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + i + " in line.";
}

function nowServing(katzDeliLine) {
  var i = katzDeliLine.length;
  if (i > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var i = katzDeliLine.length;
  var newLine = [];
if (i == 0) {
  return "The line is currently empty.";
} else {
  for (var q = 0; q < i; q++) {
  newLine.push(" " + (q + 1) + ". " + katzDeliLine[q]);
  }
}
return "The line is currently:" + newLine;
}
