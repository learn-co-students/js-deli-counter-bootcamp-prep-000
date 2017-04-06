var katzDeliLine = []

function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift()  + "."
  } else {
    return "There is nobody waiting to be served!"
    }
}



function currentLine (katzDeliLine) {
var customer = ""
var customerPosition = 1
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i += 1) {
	    customer = customer + customerPosition + ". " + katzDeliLine[i] + ", "
		customerPosition += 1
    }
  var customers = customer.slice(0, -2)
  return "The line is currently: " + customers
  } else {
      return "The line is currently empty."
  }
}
