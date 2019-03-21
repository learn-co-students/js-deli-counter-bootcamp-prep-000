// takeANumber adds customer to line
var takeANumber = function(katzDeliLine, newCustomer) {
      katzDeliLine.push(newCustomer)
      return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}
// nowServing announces customer, removes them from array, returns message if empty
var nowServing = function(katzDeliLine) {
    let i = 0
    while (i < katzDeliLine.length) {
      i++
    }
    if (katzDeliLine.length === 0) {
      return `There is nobody waiting to be served!`
    } else {
      return `Currently serving ${katzDeliLine.shift()}.`
    }
  }

// currentLine accepts current line of people and returns string
var currentLine = function(katzDeliLine) {
  var thisLine = []
  for (var i = 0; i < katzDeliLine.length; i++) {
    thisLine.push(' ' + [i + 1] + '. ' + katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
  return `The line is currently:${thisLine }`
}
}
