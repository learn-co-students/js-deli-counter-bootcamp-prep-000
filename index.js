function takeANumber (katzDeliLine, name) {
  var newLine = []
  if(katzDeliLine.length === 0) {
    newLine = katzDeliLine.unshift(`${name}`)
    return `Welcome, ${name}. You are number 1 in line.`
  } else {
    newLine = katzDeliLine.push(`${name}`)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
  return newLine
}
function nowServing (katzDeliLine) {
  var newLine = []
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    newLine = katzDeliLine.shift()
    return `Currently serving ${newLine}.`
  }
  return newLine
}
function currentLine (katzDeliLine) {
  var newLine = []
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for(var i = 0; i < katzDeliLine.length; i++) {
      newLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
   }
 } return `The line is currently:${newLine}`
}
