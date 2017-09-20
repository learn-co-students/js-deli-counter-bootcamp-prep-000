var katzDeliLine = []

function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  }

  var nowPerson = currentLine.shift()
  return `Currently serving ${nowPerson}.`
}

function currentLine(currentLine){
  if (currentLine.length === 0) {
    return "The line is currently empty."
  }

  var lineString = 'The line is currently: '
  for (var i = 0; i < currentLine.length; i++) {
    if (i === currentLine.length - 1) {
      lineString += `${i+1}. ${currentLine[i]}`
    } else {
      lineString += `${i+1}. ${currentLine[i]}, `
    }
  }

  return lineString
}
