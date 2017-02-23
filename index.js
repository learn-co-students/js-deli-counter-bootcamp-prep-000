function takeANumber (curLine, newName) {
    curLine.push(newName)
    return (`Welcome, ${newName}. You are number ${curLine.length} in line.`)
}

function nowServing(curLine) {
  if (curLine.length <=0) {
    return "There is nobody waiting to be served!"
  } else {
  return `Currently serving ${curLine.shift()}.`
}
}

function currentLine(curLine) {
  if (curLine.length <=0) {
    return "The line is currently empty."
  }

  const curLineNames = []

  for (let i = 0, l = curLine.length; i < l; i++) {
    curLineNames.push(`${i + 1}. ${curLine[i]}`)
  }
  return `The line is currently: ${curLineNames.join(', ')}`
}
