var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 1) {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstPerson + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(x) {
  var line = [];
  if (x.length === 0) {
    return "The line is currently empty."
  } else {
      for (var i = 0; i < x.length; i++) {
        line += (1 + i) + ". " + x[i] + ", ";
      }
    line = line.slice(0, line.length - 2)
    return "The line is currently: " + line;
    }
}