var katzDeli = [],
    katzDeliLine = []

var takeANumber = function(line, name) {
  line.push(name)
  let position = line.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

var nowServing = function(line) {
  if(line.length > 0) {
    let currentCustomer = line[0]
    line.shift()
    return `Currently serving ${currentCustomer}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

var currentLine = function(line) {
  if(line.length > 0) {
    let list = []
    for(var i = 0; i < line.length; i++){
      list.push(` ${i + 1}. ${line[i]}`)
    }
    return `The line is currently:${list}`
  } else {
    return "The line is currently empty."
  }
}
