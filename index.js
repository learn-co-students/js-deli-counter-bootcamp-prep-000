var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var positionInLine = katzDeliLine.length
  return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(deliLine){
  if (deliLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    var name = deliLine[0]
    deliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var i = 0
    var line = `The line is currently: ${i + 1}. ${katzDeliLine[i]}`
    for (i = 1; i < katzDeliLine.length; i++){
      line += `, ${i + 1}. ${katzDeliLine[i]}`
    }
    return line
  }
}
