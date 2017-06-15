function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var current = `Currently serving ${katzDeliLine.slice(0, 1)}.`
    katzDeliLine.shift()
    return current
  }
}

function currentLine(katzDeliLine) {
  // var currentLineObject = {}
  var line = `The line is currently:`
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        line += ` ${i + 1}. ${katzDeliLine.slice(i, i + 1)}`
      } else {
        line += `, ${i + 1}. ${katzDeliLine.slice(i, i + 1)}`
      }
    }
    return line
  }
}
