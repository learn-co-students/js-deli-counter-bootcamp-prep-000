function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  var i = 0
  var array = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    while (i < katzDeliLine.length) {
      array.push(` ${i + 1}. ${katzDeliLine[i]}`)
      i++
    }
    return `The line is currently:${array}`
  }
}
