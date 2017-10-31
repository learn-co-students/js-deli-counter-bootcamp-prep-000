var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var lineLength = katzDeliLine.length;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (lineLength + 1) + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] != null) {
    var first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var count = [];
  if (katzDeliLine[0] != null) {
    for (var i = 0; i < (katzDeliLine.length - 1); i++) {
      count[i] = " " + (i + 1) + ". " + katzDeliLine[i]
    }
    count[katzDeliLine.length - 1] = " " + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1];
    return "The line is currently:" + count
  } else {
    return "The line is currently empty."
  }
}
