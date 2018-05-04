function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var positionInLine = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      var nextPersonInLine = katzDeliLine[0] 
      katzDeliLine.shift()
      return `Currently serving ${nextPersonInLine}.`
  } 
  else {
      return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var lineDescription = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length ; i++) {
      // special casing the last name in list
      if (i === katzDeliLine.length - 1) {
        lineDescription += ` ${i+1}. ${katzDeliLine[i]}`
      } else {
        lineDescription += ` ${i+1}. ${katzDeliLine[i]},` 
      }
  }
  return lineDescription
  } 
  else {
  return "The line is currently empty."
  }
}