function takeANumber(currentLine, personName) {
  var newLength = currentLine.push(personName)
  return `Welcome, ${personName}. You are number ${newLength} in line.`
}

function nowServing(currentlyInLine) {
  if (currentlyInLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var personName = currentlyInLine.shift()
    return `Currently serving ${personName}.`
  }
}

function currentLine(currentlyInLine) {
  if (currentlyInLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "
    for (var i = 0; i < currentlyInLine.length; i++) {
      (i < currentlyInLine.length - 1) ? line += `${i+1}. ${currentlyInLine[i]}, ` : line += `${i+1}. ${currentlyInLine[i]}`

    }
    return line
  }
}
