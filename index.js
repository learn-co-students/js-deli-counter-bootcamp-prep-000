function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ` + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.'
  }
}

function currentLine(line) {
  var newLine = []
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (let i = 0; i < line.length; i++) {
      newLine += (i + 1) + '. ' + line[i] + ', '
    }
    newLine = newLine.slice(0, newLine.length - 2)
    return 'The line is currently: ' + newLine
  }
}