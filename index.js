var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var first = katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
  
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  var result = "The line is currently empty."
  if (katzDeliLine.length > 0) {
    result = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i > 0) {
        result += ','
      }
      result += ` ${i + 1}. ${katzDeliLine[i]}`
    }
  }
  
  return result
}
