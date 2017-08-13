var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      var ith = parseInt(i) + 1
      return `Welcome, ${name}. You are number ${ith} in line.`
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var now = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${now}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
      var info = "The line is currently:"
      for (let i = 0; i < katzDeliLine.length - 1; i++) {
        var number = parseInt(i) + 1
        info += ` ${number}. ${katzDeliLine[i]},`
      }
      info += ` ${katzDeliLine.length}. ${katzDeliLine[(katzDeliLine.length - 1)]}`
      return info
  }
}
