function takeANumber(katzDeliLine, deliLineName) {

  katzDeliLine.push(`${deliLineName}`)

  return `Welcome, ${deliLineName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }

  else {
    var hiddenLine = []
    var i = 0
    for (i = 0; i < katzDeliLine.length; i++) {
      hiddenLine.push(`${[i + 1]}. ${katzDeliLine[i]}`)
      }
    }
    return "The line is currently: " + `${hiddenLine.join(', ')}`
}
