var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`)
  var n = katzDeliLine.length
  return `Welcome, ${name}. You are number ${n} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
    }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var deliLine = []
  var n = 0
  if (katzDeliLine.length > 0){
    while (katzDeliLine.length > n){
      deliLine.push(`${++n}. ` + `${katzDeliLine[--n]}`)
      n++
      }
    return `The line is currently: ${deliLine.join(', ')}`
    }
  else {
    return "The line is currently empty."
  }
}
