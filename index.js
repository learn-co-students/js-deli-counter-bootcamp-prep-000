function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    var array = []
    var i = 0
    for (i = 0; i < katzDeliLine.length; i++) {
      array.push(` ${i + 1}` + `. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${array}`
  }
  else {
    return "The line is currently empty."
  }
}
