function takeANumber(waitingLine, name) {
  const number = waitingLine.push(name)
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(waitingLine) {
  if (waitingLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    const current = waitingLine.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(waitingLine) {
  if (waitingLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    let results = []
    for (var i = 0; i < waitingLine.length; i++) {
      results.push(`${i + 1}. ${waitingLine[i]}`)
    }
    const joined = results.join(', ')
    return `The line is currently: ${joined}`
  }
}
