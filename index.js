var katzDeli = []
var katzDeliLine = []
var otherDeli = []

function takeANumber(deli, name) {

  var inLine = deli.length+1

  deli.push(name)
  return `Welcome, ${name}. You are number ${inLine} in line.`

}

function nowServing(deliLine) {

  var nowServing = []

  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    nowServing.push(deliLine[0])
    deliLine.shift()
    return "Currently serving " + nowServing[0] + "."
  }
}

function currentLine(line) {

  var currentLine = []
  var n = 1

  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {

      var inLine = line.length+1

      currentLine.push(" " + n + ". " + line[i])
      n++
    }
    return "The line is currently:" + currentLine
  }
}
