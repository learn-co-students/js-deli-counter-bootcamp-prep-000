var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  //adds person to line and gives position
  var i = katzDeliLine.length
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${i + 1} in line.`
}

function nowServing(katzDeliLine) {
  //returns first person and removes them, unless empty
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  //displays numbered list of who is in line, unless empty
  var numberedNameList = []
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      numberedNameList.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${numberedNameList.join(', ')}`
  } else {
    return "The line is currently empty."
  }
}
