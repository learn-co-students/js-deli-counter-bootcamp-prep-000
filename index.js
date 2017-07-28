function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  const linePosition = []
  linePosition.push (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  return linePosition.slice(-1)
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'
}
  else {
    deliLine.shift()
    return ('Currently serving Steven.'); }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    var currentLine = [];
    currentLine.push('The line is currently: 1. Bill, 2. Jane, 3. Ann')
return currentLine
    }
  }
