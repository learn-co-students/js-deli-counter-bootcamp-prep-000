var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  let number = katzDeliLine.indexOf(name) + 1
  let greeting = `Welcome, ${name}. You are number ${number} in line.`
  return greeting
};

function nowServing(katzDeliLine) {
  var firstCustomer = "";
  if (katzDeliLine.length > 0) {
    firstCustomer = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstCustomer}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
};

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0 ) {
    return "The line is currently empty."
  }
  else {
    var currentLine = "The line is currently:"
    for (let i = 0; i < katzDeliLine.length; i++) {
      let index = i + 1
      let customer = katzDeliLine[i]
      if (i < katzDeliLine.length - 1) {
        currentLine = `${currentLine} ${index}. ${customer},`
      }
      else {
        currentLine = `${currentLine} ${index}. ${customer}`
      }
    }
    return currentLine
  }
}
