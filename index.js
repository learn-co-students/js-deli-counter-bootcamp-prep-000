var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)

  return  `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentperson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentperson}.`

  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var lineOrder = []

    for (let i = 0; i < katzDeliLine.length; i++) {
      lineOrder.push(` ${i+1}. ${katzDeliLine[i]}`)
    }

    return `The line is currently:${lineOrder}`

  } else {
    return `The line is currently empty.`
  }
}
