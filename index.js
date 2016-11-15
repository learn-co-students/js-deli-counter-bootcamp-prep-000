function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0){
    var nameUp = katzDeliLine [0]
    katzDeliLine.shift();
    return `Currently serving ${nameUp}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return 'The line is currently empty.'
  } else if (katzDeliLine.length >= 1){
    var order = []
    do {
      order.push(` ${order.length+1}. ${katzDeliLine[order.length]}`)
    } while (order.length < katzDeliLine.length)
    return `The line is currently:${order}`
  }
}
