function takeANumber(katzDeliLine, name) {
  var katzDeli = katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var currentlyBeingServed = deliLine[0]
    deliLine.shift()
    return `Currently serving ${currentlyBeingServed}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var stringToReturn = `The line is currently: 1. ${line[0]}`
    for (let i = 1; i < line.length; i++) {    
      stringToReturn = stringToReturn + `, ${i + 1}. ${line[i]}`
    }
    return stringToReturn
  }
}