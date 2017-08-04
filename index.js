var katzDeli = []
var katzDeliLine = []

function takeANumber (currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}
function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${currentLine.shift()}.`
  }
}
function currentLine(presentLine) {
var returnString = 'The line is currently: '
  if (presentLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (var i = 0; i < presentLine.length -1; i++){
      returnString = returnString + `${i + 1}. ${presentLine[i]}, `
    }
    returnString = returnString + `${i + 1}. ${presentLine[i]}`
    return returnString
  }
}
