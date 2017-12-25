var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var upNext = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return upNext
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
    } else {
    var current = [];
    for (let i=0; i<line.length; i++) {
    current.push(` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${current}`
  }
}
