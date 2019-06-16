var katzDeli = [];

function takeANumber(katzDeli, customerName) {
  katzDeli.push(customerName)
  return "Welcome, " + customerName +". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeli) {
  var message
  if (katzDeli.length > 0) {
    message = katzDeli[0]
    katzDeli.shift()
  } else {
    message = "There is nobody waiting to be served!"
  }
  return message
}

function currentLine(katzDeli) {
  var message
  if (katzDeli.length > 0) {
    message = "The line is currently: "
    for (var i = 0; i < katzDeli.length; i++) {
      if (i < katzDeli.length - 1) {
        message.push((i + 1) + ". " + katzDeli[i] + ", ")
      } else {
        message.push((i + 1) + ". " + katzDeli[i])
      }
    }
  } else {
    message = "The line is currently empty."
  }
}
