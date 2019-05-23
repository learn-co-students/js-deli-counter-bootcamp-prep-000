var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}

function nowServing(array) {
  if (array.length > 0) {
    return "Currently serving " + array.shift([0]) + "."
  } else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(" " + (i+1) + ". " + katzDeliLine[i]);
      }
    return "The line is currently:" + line
  }
}
