var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name)
  position++
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var linestring = `The line is currently: 1. ${katzDeliLine[0]}`
    for (var i = 1; i < katzDeliLine.length; i++) {
      var position = i
      position++
      linestring += ", " + position + ". " + katzDeliLine[i]
    }
  } else {
    var linestring = "The line is currently empty."
  }
  return `${linestring}`
}
