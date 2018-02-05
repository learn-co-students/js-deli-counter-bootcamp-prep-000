function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  var a = katzDeliLine.indexOf(customer);
  return (`Welcome, ${customer}. You are number ${a+1} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
      return ("There is nobody waiting to be served!")
      }
  else {
      var served = katzDeliLine.shift()
      return (`Currently serving ${served}.`)
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return ("The line is currently empty.")
      }
  else {
    var line = ''
    var j = 0
    for (let i = 0; i < katzDeliLine.length; i++) {
      j = i + 1
      line = (line + j + ". " + katzDeliLine[i] + ", ")
    }
    return (`The line is currently: ${line.slice(0, line.length - 2)}`)
  }
}
