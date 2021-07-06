function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer)
  var lineCount = currentLine.length
  var greeting = `Welcome, ${newCustomer}. You are number ${lineCount} in line.`
  
  return greeting
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var firstPersonInLine = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${firstPersonInLine}.`
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var counter = 1;
  var greeting = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === (katzDeliLine.length - 1)) {
      greeting = greeting + `${counter}. ${katzDeliLine[i]}`
    }
    else {
    greeting = greeting + `${counter}. ${katzDeliLine[i]}, `
    counter++
    }
  }
  return greeting
}