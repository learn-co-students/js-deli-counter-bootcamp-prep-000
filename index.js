function takeANumber(katzDeliLine, currentName) {
  katzDeliLine.push(currentName)
  return `Welcome, ${currentName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  var output = []
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    for (let i=0; i<katzDeliLine.length; i++) {
      output.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    var str = output.toString()
    return (`The line is currently:${str}`)
  }
}