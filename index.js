function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var place = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${place} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var served = katzDeliLine.shift()
    return `Currently serving ${served}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var order = `The line is currently: `
    for (var i = 0; i < line.length; i++) {
      var name = line[i]
      var spot = i + 1
      if (i < line.length - 1) {
        order = order + `${spot}. ${name}, `

        console.log(order)
      } else {
        order = order + `${spot}. ${name}`
      }
    }
    return order
  } else {
    return 'The line is currently empty.'
  }
}

var test = ['Bill', 'Jane', 'Ann']
console.log(currentLine(test))
