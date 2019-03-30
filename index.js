function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var announce = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
    return announce
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineOrder = "The line is currently:"
    for (let i = 0; i < katzDeliLine.length; i++) {
      var newCustomer = " " + (i + 1) + ". " + katzDeliLine[i] + ","
      lineOrder +=  newCustomer
    }
    return lineOrder.slice(0, -1)
  }
}
