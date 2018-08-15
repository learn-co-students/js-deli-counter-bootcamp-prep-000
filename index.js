function takeANumber(katzDeliLine, personsName) {
  katzDeliLine.push(personsName)
  return (`Welcome, `+ personsName +`. You are number `+ katzDeliLine.length +` in line.`)
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var next = katzDeliLine[0]
    katzDeliLine.shift()
    return(`Currently serving ` +next+`.`)
  }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
   return "The line is currently empty."
  } else {
    var line = []
    var x = 0
    while (x < katzDeliLine.length) {
      line.push((x+1)+`. `+katzDeliLine[x])
      x++
    }
    return (`The line is currently: `+line.join(", "))
  }
}