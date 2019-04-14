var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var idx = 0
    while (idx < line.length){
      line[idx] = (idx + 1) + '. ' + line[idx]
      idx ++
    }
    return `The line is currently: ${line.join(', ')}`
  }
}
