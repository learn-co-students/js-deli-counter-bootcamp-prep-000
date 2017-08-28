var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${katzDeliLine.slice(-1)}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    let line = ""
    for (var i = 0; i < katzDeliLine.length; i++) {
      line += `${i + 1}. ${katzDeliLine[i]}`
      if (i < katzDeliLine.length - 1) {
        line += ', '
      }
    }
    return `The line is currently: ${line}`
  }
}
