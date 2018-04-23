var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
   if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var output = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      output.push(` ${i + 1}. ` + katzDeliLine[i])
    }

  }
  return "The line is currently:" + output
}
