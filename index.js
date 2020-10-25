// var katzDeliLine = []

// takeANumber
// 1) adds a person to the line
// 2) appends the person the end of the line if there are already people on it
// 3) properly handles multiple people being added

function takeANumber(array, name) {
  array.push(name)
  return (`Welcome, ${name}. You are number ${array.length} in line.`)
}

// nowServing
// 4) returns "There is nobody waiting to be served!" when no one is on line
// 5) returns an announcement about the person it is serving, and shifts the line
function nowServing(array) {
  if (array.length === 0) {
    return ('There is nobody waiting to be served!')
  } else {
    return (`Currently serving ${array.shift()}.`)
  }
}

// currentLine
// 6) returns "The line is currently empty." if no one is in line
// 7) says who is in line when there are people waiting
// 8) returns a different response programmatically given a different array of names
function currentLine(array) {
  if (array.length === 0) {
    return ('The line is currently empty.')
  } else {
    var line = []
    for (let i = 0; i < array.length; i++) {
      line.push(` ${i + 1}. ${array[i]}`)
    }
    return (`The line is currently:${line}`)
  }
}
