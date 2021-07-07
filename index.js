var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  const number = (katzDeliLine.indexOf(name) + 1)
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  const numberAndNames = []
  for (var i=0; i<katzDeliLine.length; i ++) {
    numberAndNames.push(`${i+1}. ${katzDeliLine[i]}`)
  }

  if (!katzDeliLine.length) {
    return "The line is currently empty."
  } else {
    return `The line is currently: ${numberAndNames.join(', ')}`
  }
}
