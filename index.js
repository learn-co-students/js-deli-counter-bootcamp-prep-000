var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing(katzDeliLine) {
  var servingNow = ""
  if (katzDeliLine.length === 0) {
    servingNow = "There is nobody waiting to be served!"
  }
  else {
    servingNow = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
  }
  return servingNow
}

function currentLine(katzDeliLine) {
  var line = ""
  if (katzDeliLine.length === 0) {
    line = "The line is currently empty."
  }
  else {
    line = "The line is currently: "
    var i = 0
    do {
      if (i === 0) {
        line = line + (i + 1) + ". " + katzDeliLine[i]
        i++
      }
      else {
        line = line + ", " + (i + 1) + ". " + katzDeliLine[i]
        i++
      }
    } while (i < katzDeliLine.length)
  }
  return line
}
