function takeANumber(array, name) {
  array.push(name)
  var order = array.length
  return `Welcome, ${name}. You are number ${order} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    return (`Currently serving ${array.shift()}.`)
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return ("The line is currently empty.")
  } else {
    return (`The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`)
  }
}
