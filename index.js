var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  while (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.` 
  } return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  while (katzDeliLine.length > 0) {
    var i = 1
    return `The line is currently: ${i}. ${katzDeliLine[i-1]}, ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}`
  } return "The line is currently empty."
}