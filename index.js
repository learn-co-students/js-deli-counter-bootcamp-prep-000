var katzDeliLine =[]

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(`${newName}`)

  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
  }
  else {
    return "There is nobody waiting to be served!"
  }
  return`Currently serving ${firstPerson}.`
}

function currentLine(katzDeliLine) {
  var i = 0

  //var lineIndex = katzDeliLine.indexOf + 1
  if (katzDeliLine.length > 0) {
    //not sure if a do while loop is necessary but it's what I'm trying
    var numberName =[]
    for(var i = 0; katzDeliLine.length > i; i++) {
      numberName.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${numberName.join(', ')}`
  }
  else {
    return 'The line is currently empty.'
  }
}
