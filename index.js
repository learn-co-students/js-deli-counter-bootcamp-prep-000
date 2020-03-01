function takeANumber(currentLine,customer) {
  currentLine.push(customer)
  return `Welcome, ${customer}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = currentLine[0]
    currentLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var myString = "The line is currently: "
    for (var i = 0; i < currentLine.length; i++) {
      if (i === 0) {
        myString = myString + `${i+1}. ${currentLine[i]}`
        }
      else {
        myString = myString + `, ${i+1}. ${currentLine[i]}`
      } 
    }
    return myString
  }
}