var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var number = 0
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (name === katzDeliLine[i]) {
      number = i + 1
    } 
  }
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var numbersNames = []
    for (let i = 0; i < katzDeliLine.length + 1; i) {
      numbersNames.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
  return `The line is currently: ${numbersNames}`
  }
}