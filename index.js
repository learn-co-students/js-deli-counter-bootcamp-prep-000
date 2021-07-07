function takeANumber(deliLine, newPerson) {
  deliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var str = `The line is currently: 1. ${deliLine[0]}`
    for (var i = 1; i < deliLine.length; i++) {
    str += `, ${i+1}. ${deliLine[i]}`
  }
  return str
}
}