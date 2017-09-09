function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var person = deliLine[0]
    deliLine.shift()
    return "Currently serving " + person + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineString = "The line is currently: 1. " + line[0]
    for(var i = 1; i < line.length; i++) {
      lineString = lineString + ", " + (i + 1) + ". " + line[i]
    }
    return lineString
  } else {
    return "The line is currently empty."
  }
}
