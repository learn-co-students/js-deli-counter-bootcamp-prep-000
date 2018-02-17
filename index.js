var katzDeliLine = []

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  }
  else return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
const numbersAndNames = [];
  if (!katzDeliLine.length){
    return "The line is currently empty."
  }
  else
  for (let i = 0, length = katzDeliLine.length; i < length; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
  return `The line is currently: ${numbersAndNames.join(', ')}`
}