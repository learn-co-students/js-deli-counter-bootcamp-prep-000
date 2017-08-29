var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(deliLine) {
  if (deliLine.length > 0 ) {
    var serving = deliLine[0]
    deliLine.shift(0)
    return "Currently serving " + serving +"."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var theLine = "The line is currently:"
    var i = 0

    while (i < line.length) {
      theLine = theLine + " " + (i + 1) + ". " + line[i] + ",";
      i++;
    }
    return theLine.slice(0, -1)
  } else {
    return "The line is currently empty."
  }
}
