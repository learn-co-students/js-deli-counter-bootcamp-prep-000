var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine[katzDeliLine.length] = name;
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
} else {
  var currentName = katzDeliLine[0];
  katzDeliLine.shift();
  return "Currently serving " + currentName + ".";
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var i = 2;
    var string = "The line is currently: 1. " + katzDeliLine[0];
    while (i < katzDeliLine.length + 1) {
      string = string + ", " + i + ". " + katzDeliLine[i-1];
      i = i + 1;
    }
    return string;
  }
}
