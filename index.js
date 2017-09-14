function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return "There is nobody waiting to be served!"
  }
  else {
    var current = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(line) {
  if (line[0] === undefined) {
    return "The line is currently empty."
  }
  else {
    var theLine = "The line is currently:"
    for (let i = 0; i < line.length; i++) {
      theLine = `${theLine} ${i+1}. ${line[i]}`
      if (i < line.length-1){
        theLine = `${theLine},`
      }
    }
  }
  return theLine
}
