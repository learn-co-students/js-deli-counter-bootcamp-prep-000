var katzDeli

function takeANumber(katzDeliLine, newPerson) {
  var placeInLine
  katzDeliLine.push(newPerson)
  placeInLine = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var firstInLine = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}


function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}