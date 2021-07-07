var currentNumber = 0
var calledNumber = 1

function takeANumber (line,name) {
  line.push(name)
  currentNumber = currentNumber + 1
  let justAdded = line.length - 1
  return `Welcome, ${name}. You are number ${justAdded + 1} in line.`
  return `Welcome, your ticket number is ${currentNumber}.`
}

function nowServing (line) {
  let i = line.length
  if ( i === 0 ) {
    return "There is nobody waiting to be served!"
  }
  else {
    let newLine = line[0]
    let calledNumberA = calledNumber
    line.shift()
    calledNumber = calledNumber + 1
    return `Now serving ${calledNumberA}.`
    return `Currently serving ${newLine}.`
  }
}

function currentLine (line) {
  let i = 0
  let newLine = []
  if ( line.length === 0 ) {
    return "The line is currently empty."
  }
  else {
    while ( i < line.length ) {
    newLine.push(` ${i + 1}. ${line[i]}`)
    i++
    }
  }
  return `The line is currently:${newLine}`
}