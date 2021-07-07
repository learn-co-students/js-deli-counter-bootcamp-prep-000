function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var positionInLine = katzDeliLine.length
  var greeting = `Welcome, ${name}. You are number ${positionInLine} in line.`
  return greeting
}

function nowServing(katzDeliLine) {
  var whoseTurn
  if (katzDeliLine.length > 0) {
    whoseTurn = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  } else {
    whoseTurn = "There is nobody waiting to be served!"
  }
  return whoseTurn
}

function currentLine(katzDeliLine) {
  var line
  if (katzDeliLine.length > 0) {
    line = `The line is currently:`
    for (var i = 0; i < katzDeliLine.length; i += 1) {
      line = line + ` ${i + 1}. ${katzDeliLine[i]},`
    }
    line = line.substring(0, line.length -1)
  } else {
    line = `The line is currently empty.`
  }
  return line
}
