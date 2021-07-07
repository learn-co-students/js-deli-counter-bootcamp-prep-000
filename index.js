function takeANumber(waitingLine, newPerson) {
  waitingLine.push(newPerson)

  const welcomeMessage = `Welcome, ${newPerson}. You are number ${waitingLine.length} in line.`

  return welcomeMessage
}

function nowServing(waitingLine) {
  if (waitingLine.length === 0) {
    return "There is nobody waiting to be served!"
  }

  const currentPerson = waitingLine.shift()
  const currentMessage = `Currently serving ${currentPerson}.`

  return currentMessage
}

function currentLine(waitingLine) {
  if (waitingLine.length === 0) {
    return "The line is currently empty."
  }

  const numberedWaitingLine = []

  for (let counter = 0; counter < waitingLine.length; counter++) {
    numberedWaitingLine.push(` ${counter + 1}. ${waitingLine[counter]}`)
  }

  const waitingLineMessage = `The line is currently:${numberedWaitingLine}`

  return waitingLineMessage
}
