function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

// refactor using join()
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineString = 'The line is currently: '
    for (var i = 0; i < line.length; i++) {
      lineString = lineString + `${i+1}. ${line[i]}`
      if (i < line.length - 1) {
        lineString += ', '
      }
    }
  }
  return lineString
}