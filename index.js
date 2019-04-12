function takeANumber(currentLine, name) {
  currentLine.push(name)
  let position = currentLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length > 0 ) {
    let firstPerson = currentLine[0]
    currentLine.shift()
    return `Currently serving ${firstPerson}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(currentLine) {
  if (currentLine.length > 0 ) {
    let result = 'The line is currently: '
    for (let i = 0; i < (currentLine.length - 1); i++) {
      result = result + `${i + 1}. ${currentLine[i]}, `
    }
    result = result + `${currentLine.length}. ${currentLine[currentLine.length - 1]}`
    return result
  } else {
    return 'The line is currently empty.'
  }
}
