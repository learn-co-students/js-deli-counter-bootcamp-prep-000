function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var personToServe
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    personToServe = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${personToServe}.`
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: " 
  let i = 0
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (i; i < katzDeliLine.length - 1; i++) {
      line += `${i + 1}. ${katzDeliLine[i]}, `
    }
    line += `${i + 1}. ${katzDeliLine[i]}`
  }
  return line
}