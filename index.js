var katzDeliLine = []

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line."
  return
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var Serve = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + Serve + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = "1. " + katzDeliLine[0]
    var i = 1
    var j = 2
    do {
      line = line + ", " + j + ". " + katzDeliLine[i]
      i++
      j++
    } while (i < katzDeliLine.length)


    return "The line is currently: " + line
  }
  else {
    return "The line is currently empty."
  }
}
