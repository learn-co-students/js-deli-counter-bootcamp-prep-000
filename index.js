var katzDeli = []

function takeANumber(currentLine, name) {
  currentLine.push(name)
  var position = currentLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = `Currently serving ${currentLine[0]}.`
    currentLine.shift()
    return serving
  }
}

function currentLine(currentLine) {
  if (currentLine.length == 0) {
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "

    let i = 0
    for ( i; i < currentLine.length; i++ ) {
      (i == currentLine.length - 1) ? (line = line + `${i+1}. ${currentLine[i]}`) : (line = line + `${i+1}. ${currentLine[i]}, `)
    }
    return line
  }
}
