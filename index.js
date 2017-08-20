
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  return "Welcome, " + person + ". You are number " + (katzDeliLine.length) + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(" "+(i+1) + ". " + katzDeliLine[i]);
    }
    return "The line is currently:" + line
  } else {
    return "The line is currently empty."
  }
}
