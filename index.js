var katzDeli = [];

function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person)
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  for (katzDeliLine.length; katzDeliLine.length >= 0; katzDeliLine.shift()) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      return "Currently serving " + katzDeliLine.shift() + "."
    }
  }
}

function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var myLine = ""
    for (var n = 0; n < line.length; n++) {
      if (n < line.length-1) {
      myLine = myLine + (n+1) + ". " + line[n] + ", "
      } else {
        myLine = myLine + (n+1) + ". " + line[n]
      }
    }
  }
    return "The line is currently: " + myLine
}