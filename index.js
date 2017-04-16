var katzDeliLine = []

function takeANumber(line, personName) {
  line.push(personName)
  return `Welcome, ${personName}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var guy = katzDeliLine[0]
    katzDeliLine = katzDeliLine.shift()
    return `Currently serving ${guy}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var peeps = ""
    for (let i = 0; i < katzDeliLine.length - 1; i++) {
      peeps = peeps + `${i + 1}. ${katzDeliLine[i]}, `
    }
    peeps = peeps + `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`
    return "The line is currently: " + peeps
  } else {
    return "The line is currently empty."
  }
}
