var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
    katzDeliLine.slice(1)
  }
}

function currentLine(katzDeliLine) {
  var lineCall = "The line is currently: "
  var customers = []
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
    customers.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    customers = customers.join(', ')
    return lineCall.concat(customers)
  }
}