function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var first = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var currLine = "The line is currently: "
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      currLine += `${i + 1}. ${katzDeliLine[i]}, `
    }
    currLine = currLine.substring(0, currLine.length - 2)
  }
  else {
    currLine = "The line is currently empty."
  }
  return currLine
}
