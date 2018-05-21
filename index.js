function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName)
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  var personName = katzDeliLine.shift()
  return `Currently serving ${personName}.`
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
  var nameLineNumber = []
  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    nameLineNumber.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${nameLineNumber.join(', ')}`
}
