var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = line[0];
    line.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine (line) {
  var lineX = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for(var i = 0; i < line.length; i++) {
      lineX += (i + 1) + ". " + line[i] + ", "
    }
      lineX = lineX.slice(0, lineX.length-2)
      return "The line is currently: " + lineX
  }
}
