var katzDeli = []

function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + parseInt(katzDeliLine.length) + " in line."
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var newLine = ""
    for (var i = 0; i < line.length; i++) {
      if(i === (line.length - 1)) {
        newLine = newLine + parseInt(i + 1) + ". " + line[i]
      }
      else {
        newLine = newLine + parseInt(i + 1) + ". " + line[i] + ", "
      }
    }
    return "The line is currently: " + newLine
  }
}
