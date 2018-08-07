function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var servingCust = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return servingCust
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var retString = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; ++i) {
      retString += `${i + 1}. ${katzDeliLine[i]}`
      if (i !== katzDeliLine.length - 1) {
        retString += ", "
      }
    }  
  }
  
  return retString
}