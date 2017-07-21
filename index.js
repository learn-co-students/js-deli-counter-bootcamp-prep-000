function takeANumber(katzDeliLine, custName) {
  katzDeliLine.push(custName)
  return "Welcome, " + custName + ". You are number " + katzDeliLine.length +" in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine) {
  var x = 1
  var newLine = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (x === 1) {
        newLine.push(x + ". " + katzDeliLine[i])
      } else {
        newLine.push(" " + x + ". " + katzDeliLine[i])
      }
      x++
    }
    return "The line is currently: " + newLine
  }
}
