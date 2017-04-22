function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var cust = katzDeliLine.shift()
    return `Currently serving ${cust}.`
  }
  else {
    return "There is nobody waiting to be served!"
  } 
}

function currentLine (katzDeliLine) {
  var Line = `1. ${katzDeliLine[0]}`
  if (katzDeliLine.length > 0) {
    for (let i = 1; i < katzDeliLine.length; i++ ) {
      Line = `${Line}, ${i+1}. ${katzDeliLine[i]}`
    }
    return `The line is currently: ${Line}`
  }
  else {
    return "The line is currently empty."
  }
}

