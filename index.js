function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var name
  if (katzDeliLine.length > 0) {
    name = "Currently serving " + katzDeliLine.shift() + "."
  } else {
    name = "There is nobody waiting to be served!"
  }
  return name
}

function currentLine(katzDeliLine) {
  var line
  if (katzDeliLine.length > 0) {
    line = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length-1; i++) {
      line = line + `${i+1}. ` + katzDeliLine[i] + ", "
    }
    line = line + `${katzDeliLine.length}. ` + katzDeliLine[katzDeliLine.length-1]
  } else {
    line = "The line is currently empty."
  }
  return line
}
