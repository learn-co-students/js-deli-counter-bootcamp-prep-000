var katzDeli = []

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return String(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  var name = katzDeliLine.shift()
  var res = ''
  res += String(`Currently serving ${name}.`)
  return res
}

function currentLine(katzDeliLine) {
  var res = 'The line is currently'
  if (katzDeliLine.length === 0) {
    res += ' empty.'
    return res
  }
  res += ':'
  for (var i = 0; i < katzDeliLine.length; i++) {
    res += String(` ${i+1}. ${katzDeliLine[i]}`)
    if (i<(katzDeliLine.length-1)) {
      res += ','
    }
  }
  return res
}