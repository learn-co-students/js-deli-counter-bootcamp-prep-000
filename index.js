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
    let customers = []
    for (let i = 0; i < katzDeliLine.length; i++) {
      customers.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${customers.join(',')}`
  }
}
