var katzDeli = [] //array of customers in line

function takeANumber (katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
  var name = katzDeliLine[0]
  var shift = katzDeliLine.shift()
  return `Currently serving ${name}.`
  
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
    
    //var statement = katzDeliLine.push()
    /*
    for (var i = 1; i < katzDeliLine.length + 1; i++) {
      //katzDeli = `${i}. ${katzDeliLine[i-1]}`
      //return "The line is currently: " + `${i}. ${katzDeliLine[i-1]}`
    }
    */
    
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
    
    }