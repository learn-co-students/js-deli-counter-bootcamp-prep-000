// 1.
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// 2.
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

// 3.
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var string = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++) { // For a line greater than 0
      if (i === katzDeliLine.length - 1) {
        string = string + ` ${i + 1}. ${katzDeliLine[i]}` // Removing the comma for the last person
      } else {
        string = string + ` ${i + 1}. ${katzDeliLine[i]},` // Including the finishing comma
      }
    }
    return string
  } else { // For an empty line
    return "The line is currently empty."
  }
}
