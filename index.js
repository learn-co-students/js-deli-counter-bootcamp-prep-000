var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  } 
}
function currentLine(katzDeliLine) {
  var currentLine = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for (let i = 0; i < katzDeliLine.length; i++) {
    currentLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
  return "The line is currently:" + currentLine
}