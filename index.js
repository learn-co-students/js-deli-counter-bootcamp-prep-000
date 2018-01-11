
var katzDeli = []

function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if(currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${currentLine.shift()}.`
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return "The line is currently empty."
  }
  var status = "The line is currently: "
  var clients = []
  for (let i = 0; i < currentLine.length; i++) {
    clients.push(`${i + 1}. ${currentLine[i]}`)
  }
  return (status + clients.join(', '))
}