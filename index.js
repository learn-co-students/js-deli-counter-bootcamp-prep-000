var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine[0]
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var newArray = []
    for (var i = 0; i < katzDeliLine.length; i++) {
    var customer = katzDeliLine[i]
     newArray.push(`${i+1}. ${customer}`)
    }
    return `The line is currently: ${newArray.join(', ')}`
  }
}