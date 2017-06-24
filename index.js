function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return katzDeliLine
}

function currentLine(katzDeliLine) {
  var line = []
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${line.join(', ')}`
  }
  return katzDeliLine
}
