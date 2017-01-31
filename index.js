var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      var servingStatement = `Currently serving ${katzDeliLine[i]}.`
      katzDeliLine.shift()
      return servingStatement
    }
  }
}

function currentLine(line) {
  var lineStatement = []
  for (let i = 0; i < line.length; i++) {
    lineStatement.push(` ${i+1}. ${line[i]}`)
  }
  if (line.length > 0) {
    return `The line is currently:${lineStatement}`
  }
  else {
    return `The line is currently empty.`
  }
}