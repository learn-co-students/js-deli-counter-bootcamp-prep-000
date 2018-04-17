var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var index = katzDeliLine.indexOf(newName) + 1
  return `Welcome, ${newName}. You are number ${index} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var beingServed = array[0]
    array.shift(beingServed)
    return `Currently serving ${beingServed}.`
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty."
  }
  else {
    var lineStatus = "The line is currently: "
    for (var n = 0; n < array.length; n++) {
      var name = array[n]
      var position = n + 1
      lineStatus = (lineStatus + `${position}. ${name}, `)
    }
    lineStatus = lineStatus.slice(0, -2)
    return lineStatus
  }
}