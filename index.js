var katzDeli = [];

function takeANumber(katzDeliLine, customerName) {
  return "Welcome, " + customerName +". You are number " + (katzDeliLine.length + 1) + " in line."
}

function nowServing() {
  var message
  if (katzDeliLine.length > 0) {
    message = katzDeliLine[0]
  } else {
    message = "There is nobody waiting to be served!"
  }
  return message
}

function currentLine(line) {
  var message
  if (katzDeliLine.length > 0) {
    message = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i < katzDeliLine.length - 1) {
        message.push((i + 1) + ". " + katzDeliLine[i] + ", ")
      } else {
        message.push((i + 1) + ". " + katzDeliLine[i])
      }
    }
  } else {
    message = "The line is currently empty."
  }
}
