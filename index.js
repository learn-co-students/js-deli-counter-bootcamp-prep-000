function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
  var currentCustomer =  katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${currentCustomer}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    var string = 'The line is currently:'
    for (let i = 0; i<line.length-1; i++) {
      string = `${string} ${i+1}. ${line[i]},`
    }
     for (let i = line.length-1; i<line.length; i++) {
      string = `${string} ${i+1}. ${line[i]}`
     }
    }
    return string
}