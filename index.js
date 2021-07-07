var katzDeli = []
var katzDeliLine = []

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ` + customer + `. You are number ` + (katzDeliLine.indexOf(customer) + 1) + ` in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return `There is nobody waiting to be served!`
  } else return `Currently serving ` + katzDeliLine.shift() + `.`
}

function currentLine(line) {
  var string = `The line is currently:`
  if (line.length < 1) {
    return `The line is currently empty.`
  } else {
    for (var i = 0; i < line.length; i++) {
      string = string + ` ${i+1}. ${line[i]},`
    }
  } return string.substr(0, (string.length - 1))
}
