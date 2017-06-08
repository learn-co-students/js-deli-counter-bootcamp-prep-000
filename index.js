var katzDeli = []
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!")
  } else {
    var upNext = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${upNext}.`
  }
}

function loopLine(katzDeliLine) {
  var k = 0
  var i = 1
  var t = []
  while (k<katzDeliLine.length) {
    if (k === 0) {
      t.push(`${i}. ${katzDeliLine[k]}`)
      k++
      i++
    }
    else {
      t.push(` ${i}. ${katzDeliLine[k]}`)
      k++
      i++
    }
  }
  return t
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return("The line is currently empty.")
  } else {
  return `The line is currently: ${loopLine(katzDeliLine)}`
}
}
