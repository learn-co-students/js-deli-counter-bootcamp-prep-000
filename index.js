//var katzdeli = [];//
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var number = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + number + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
var newLine = [];
 for (var i = 0; i < line.length; i++) {
    newLine.push(" " + [i+1] + ". " + line[i]);
  }
  return "The line is currently:" + newLine;
}
