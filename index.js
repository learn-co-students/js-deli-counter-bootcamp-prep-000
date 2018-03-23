var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
    } else {
      var name = katzDeliLine[0]
      katzDeliLine.shift()
      return `Currently serving ${name}.`
}
}

function currentLine(katzDeliLine) {
  var currentLine = "The line is currently: 1. "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (i === 0) {
        currentLine = currentLine + katzDeliLine[i]
      } else {
        currentLine = currentLine + `, ${i + 1}. ${katzDeliLine[i]}`
      }
  }
  return currentLine
  }
}
