function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${katzDeliLine[katzDeliLine.length - 1]}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    var firstInLine = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return firstInLine
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line[0]) {
    //return current line, e.g., "The line is currently: 1. Ada, 2. Grace"
    var sentence = "The line is currently:"
    for (let i = 0; i < line.length; i++) {
      if (i > 0)
      {
        sentence += `, ${i + 1}. ${line[i]}`
      } else {
        sentence += ` ${i + 1}. ${line[i]}`
      }
    }
    return sentence
  } else {
    //return "The line is currently empty."
    return "The line is currently empty."
  }
}
