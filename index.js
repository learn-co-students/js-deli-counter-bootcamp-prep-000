function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)

  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deli) {
  if (deli.length < 1){
    return ("There is nobody waiting to be served!")
  }
  else {
    return (`Currently serving ${deli.shift(0)}.`)
  }
}

function currentLine(deli) {
  var deliString = "The line is currently: "
  if (deli.length < 1){
    return "The line is currently empty."
  } else {
      for (var i = 0; i < deli.length; i++) {
        deliString += `${i+1}. ${deli[i]}, `
      }
  }
  return deliString.slice(0, -2)
}
