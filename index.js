function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
    var serving = katzDeliLine[0]
    if (katzDeliLine.length === 0) {
      return 'There is nobody waiting to be served!'
    }
    else {
    katzDeliLine.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(katzDeliLine) {
  var printedLine = ""
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
        printedLine += (String(i+1) + ". " + String(katzDeliLine[i]) + ", ")
      }
    printedLine += (String(i+1) + ". " + String(katzDeliLine[i]))
      }
      return "The line is currently: " + printedLine
    }
