var katzDeliLine = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(line) {
  if(line.length > 0) {
    var printout = []
    for (var i = 0; i < line.length; i++) {
      printout.push(i+1 + ". " + line[i])
    }
    return "The line is currently: " + printout.join(", ")
  } else {
    return "The line is currently empty."
  }
}

function nowServing(line){
  if (line.length > 0) {
    var person = line[0]
    line.shift()
    return `Currently serving ${person}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
