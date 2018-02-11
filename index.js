function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)

  return "Welcome, " + customerName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  if (line.length != 0) {
    return "Currently serving " + line.shift() + "."

  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  if (line.length != 0) {
    var newArray = []
    for (let i = 0, l = line.length; i < l; i++) {
      var linePosition = i + 1
      newArray.push(linePosition + ". " + line[i])

    }
    return "The line is currently: " + newArray.join(', ')
  }
}
