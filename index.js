function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  while (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`
  }
  return 'There is nobody waiting to be served!'
}

function currentLine(deliLine) {
 var currentLine = []
 var placeInLine = 1
 while (deliLine.length > 0) {
   currentLine.push(` ${placeInLine}. ${deliLine.shift()}`)
   placeInLine += 1
 }
 if (currentLine.length > 0 ) {
   return `The line is currently:${currentLine}`
 } else {
   return 'The line is currently empty.'
   }
}