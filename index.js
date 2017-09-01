var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  var line = katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${line} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var first = katzDeliLine.shift()
    return `Currently serving ${first}.`
  } if (katzDeliLine.length ===0) {
    return "There is nobody waiting to be served!"
  }
}

var namesWithNumbers = []
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    for (let i = 0, len = katzDeliLine.length; len > i; i++) {
      namesWithNumbers.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${namesWithNumbers.join(", ")}`
  } if (katzDeliLine.length ===0) {
    return "The line is currently empty."
  }
}
