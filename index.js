function takeANumber(line, name) {
  line.push(name);
  var position = line.length;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentCustomer = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentCustomer}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
    var lineMessage = []
    if (line.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < line.length; i++) {
        lineMessage += (i + 1) + ". " + line[i] + ", "
      }
      lineMessage = lineMessage.slice(0, lineMessage.length-2)
      return "The line is currently: " + lineMessage
    }
}