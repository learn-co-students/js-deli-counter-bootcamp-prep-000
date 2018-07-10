function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length>0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length>0) {
    var lineList = "The line is currently:"
    var count = 1
    while(katzDeliLine.length>1) {
      lineList += ` ${count++}. ${katzDeliLine.shift()},`
    }
    return lineList += ` ${count}. ${katzDeliLine.shift()}`
  }
  else {
    return "The line is currently empty."
  }
}