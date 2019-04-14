var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var served = katzDeliLine.shift()
    return "Currently serving " + served + "."
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var i = 0
    while (i < katzDeliLine.length) {
      katzDeliLine[i] = (i + 1) + ". " + katzDeliLine[i]
      i++
    }
    return "The line is currently: " + katzDeliLine.join(", ")
  }
}
