var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return("There is nobody waiting to be served!")
  }
  else {
    name = katzDeliLine.shift()
  return(`Currently serving ${name}.`)
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return("The line is currently empty.")
  }
  else {
    var line = `The line is currently: 1. ${katzDeliLine[0]}`
    for (var i = 2; i <= katzDeliLine.length; i++) {
      line = line + `, ${i}. ${katzDeliLine[i-1]}`
    }
      return line
  }
}
