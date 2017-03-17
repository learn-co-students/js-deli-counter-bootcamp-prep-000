function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(`${newName}`)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    const numberName = []
    for (let i = 0, l = katzDeliLine.length; i < l; i++) {
      numberName.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${numberName.join(", ")}`
  }
}
