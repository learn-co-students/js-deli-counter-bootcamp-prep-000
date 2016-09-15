var katzDeliLine = []

function takeANumber(customerLine, newName) {
  var array = customerLine
  array.push(newName)
  return `Welcome, ${newName}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    var name = array[0]
    array.shift()
    return `Currently serving ${name}.`

  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  if (array.length > 0) {
    return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
  } else {
    return "The line is currently empty."
  }
}
