function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
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
  if (katzDeliLine.length) {
    var line = "The line is currently: "
    var i = 0;
    for (i = 0; i < katzDeliLine.length - 1; i++) {
      line += `${i + 1}. ${katzDeliLine[i]}, `
    }
    line += `${i + 1}. ${katzDeliLine[i]}`
    
    return line
  } else {
    
    return "The line is currently empty."
  }
}