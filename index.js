var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  else {
    var current = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    const numbersAndNames = []
    for (let i = 0, l = katzDeliLine.length; i < l; i++) {
      numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
    }

    return `The line is currently: ${numbersAndNames.join(', ')}`
  }
}
