var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var number = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${number} in line.`
  return katzDeliLine
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine[0]
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift()
    return "Currently serving " + name + "."
    return katzDeliLine
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var message = ""
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      message = message + (i + 1) + ". " + katzDeliLine[i] + ", "
    }
    message = message + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1]
  } else {
    return "The line is currently empty."
  }
  return "The line is currently: " + message
}