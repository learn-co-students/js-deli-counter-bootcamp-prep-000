function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var temp = array[0]
    array.shift()
    return `Currently serving ${temp}.`
  }
}

function currentLine(array) {
var n = array.length
  if (n == 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
    n = n - 1
  }
}
