function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
     var name = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  var str = "The line is currently"

  if(katzDeliLine.length === 0) {
    return str + " empty."
  }
  else {
    str = str + ":"
    for(var i = 1; i < katzDeliLine.length; i++) {
      str = `${str} ${i}. ${katzDeliLine[i - 1]},`
    }
    str = `${str} ${i}. ${katzDeliLine[i - 1]}`
    return str
  }
}
