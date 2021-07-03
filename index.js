// takeANumber
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// nowServing
function nowServing(deliLine) {
    if (deliLine.length > 0) {
      return `Currently serving ${deliLine.shift()}.`
  } else
  return "There is nobody waiting to be served!"
}

// currentLine
function currentLine(line) {
  if (line.length > 0) {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  } else
    return "The line is currently empty."
}
