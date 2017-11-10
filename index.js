var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
    }
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var ol = []
    for (let i = 0; i < line.length; i++) {
        ol.push(` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${ol}`
  } else {
    return `The line is currently empty.`
  }
}
