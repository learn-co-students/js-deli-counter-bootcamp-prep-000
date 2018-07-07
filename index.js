var katzDeli = []

function takeANumber(katzDeliLine, name) {
  var numberOnLine = (katzDeliLine.length + 1)
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${numberOnLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var returnLine = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        returnLine = returnLine + ` ${i + 1}. ${katzDeliLine[i]}`
      } else {
        returnLine = returnLine + `, ${i + 1}. ${katzDeliLine[i]}`
      }
    }
    return returnLine
  }
}