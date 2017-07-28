var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    const name = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  var line = []
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
  else {
    for (let i = 0; 1 < katzDeliLine.length; i++) {
      line.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
  }
  return `The line is currently: ${line}`
}
