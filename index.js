function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var positionInLine = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      var nextPersonInLine = katzDeliLine[0] 
      katzDeliLine.shift()
      return `Currently serving ${nextPersonInLine}.`
  } 
  else {
      return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = []
    for (var i = 0; i < katzDeliLine.length ; i++) {
        line.push(`${i+1}. ${katzDeliLine[i]}`)
    }
  return `The line is currently: ${line.join(", ")}`
  } else {
  return "The line is currently empty."
  }
}