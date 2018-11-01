var katzDeli= []

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
}
}

function currentLine(katzDeliLine) {
  var positionsAndNames = []
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty." 
    }
    
  for (var i = 0; i < katzDeliLine.length ; i++) {
    positionsAndNames.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently:${positionsAndNames}`
  }




