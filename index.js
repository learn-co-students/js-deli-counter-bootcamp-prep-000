var katzDeliLine = [];

var takeANumber = (katzDeli, name) => {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

var nowServing = katzDeliLine => {
  if (katzDeliLine.length) {
    let currentPerson = katzDeliLine.shift()
    return `Currently serving ${currentPerson}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

var currentLine = katzDeliLine => {
  if (katzDeliLine.length) {
    return 'The line is currently: ' + customerList(katzDeliLine)
  } else {
    return 'The line is currently empty.'
  }
}

var customerList = katzDeliLine => {
  return katzDeliLine.map((name, index) => `${index+1}. ${name}` ).join(', ')
}
