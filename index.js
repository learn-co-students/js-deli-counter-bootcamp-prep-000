// var deliLine = []

function takeANumber(deliLine, name) {
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let announce = `Currently serving ${deliLine[0]}.`
    deliLine.shift();
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
