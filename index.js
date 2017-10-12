var ticketNumber = 0

function takeANumber(deliLine) {
  deliLine.push(ticketNumber)
  let announce = `Welcome, your ticket is number ${ticketNumber}.`
  ticketNumber += 1
  return announce
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let announce = `Currently serving ticket ${deliLine[0]}.`
    deliLine.shift()
    return announce
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    let announce = `The line is currently: 1. ${deliLine[0]}`
    for (let i = 1; i < deliLine.length; i++) {
      announce += `, ${i+1}. ${deliLine[i]}`
    }
    return announce
  }
}
