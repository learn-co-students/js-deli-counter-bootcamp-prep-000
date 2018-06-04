var katzDeliLine = []

function takeANumber(katzDeliLine,newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.` 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "The line is currently empty."
  } else {
    var i = 0
    var line = [`1. ${katzDeliLine[i]}`]
    i++
    while (i<katzDeliLine.length) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`)
      i++
    }
    return `The line is currently: ${line}`
  }
}


