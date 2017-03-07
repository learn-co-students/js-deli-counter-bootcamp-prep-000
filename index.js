function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var serving = katzDeliLine[0]
    katzDeliLine.shift(serving)
    return `Currently serving ${serving}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var customers = [];
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      customers.push(` ${i + 1}. ${katzDeliLine[i]}`)
      }
    return `The line is currently:${customers}`
  } else {
    return "The line is currently empty."
  }

}
