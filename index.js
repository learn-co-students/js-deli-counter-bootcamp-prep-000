function takeANumber(currentLine, newPersonsName) {
  currentLine.push(newPersonsName)
  return `Welcome, ${newPersonsName}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    let firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    let newArray = []
    for (var i = 0; i < line.length; i++) {
      let numberedLine = `${i + 1}. ${line[i]}`
      newArray.push(numberedLine)
    }
    let stringOfArray = newArray.join(', ')
    return `The line is currently: ${stringOfArray}`
  }
}
