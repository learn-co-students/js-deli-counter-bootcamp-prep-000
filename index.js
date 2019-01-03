var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  var number = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${number} in line.`

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}


function currentLine(katzDeliLine) {
  var count = katzDeliLine.length
  var cLine = []
  if (count < 1) {
    return "The line is currently empty."
  } else {
    cLine.push(`1. ${katzDeliLine[0]}`)
    for (let i = 1; i < count; i++) {
      cLine.push(` ${i +1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${cLine}`

    }
  }
  
  
