var katzDeli = []
var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length.toString() + " in line.")
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return "Currently serving " + deliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var n = 1
  var lineString

  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    lineString = "The line is currently: "

    while (n <= line.length) {
      if (n < line.length) {
      lineString = lineString.concat(n.toString() + ". " + line[n-1] + ", ")
      } else {
        lineString = lineString.concat(n.toString() + ". " + line[n-1])
        }
        n += 1
      }
    }
    return lineString
  }
