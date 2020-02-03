function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  var welcomeMessage = `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
  return welcomeMessage;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var currentLineString = "The line is currently:"
    var x = katzDeliLine.length
    for (var i=katzDeliLine.length; i>1 ; i--) {
      currentLineString = currentLineString + (` ${x-i + 1}. ${katzDeliLine[x-i]},`)
    }
    currentLineString = currentLineString + (` ${x}. ${katzDeliLine[x-1]}`)
    return currentLineString
  }
}