var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = (katzDeliLine.length)
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length == 0) {
    return 'There is nobody waiting to be served!'
  }
  else {
    return `Currently serving ${deliLine.shift()}.`
  }
  return deliLine
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let line = []
    for (let i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${line}`
  }
  else {
    return 'The line is currently empty.'
  }
}
