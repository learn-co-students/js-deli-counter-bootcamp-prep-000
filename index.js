function takeANumber(currentLine, name) {
  var position = currentLine.length + 1
  currentLine = currentLine.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length===0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var currentlyServing = currentLine.shift()
    return `Currently serving ${currentlyServing}.`
  }
}

function currentLine(deliLine) {
  if (deliLine.length===0) {
    return "The line is currently empty."
  }
  else {
    var lineNumbers = ""
    for (var i = 1; i<deliLine.length; i++) {
      lineNumbers = lineNumbers + `${i}. ${deliLine[i-1]}, `
    }
    lineNumbers = lineNumbers + `${i}. ${deliLine[deliLine.length-1]}`
    return `The line is currently: ${lineNumbers}`
  }
}
