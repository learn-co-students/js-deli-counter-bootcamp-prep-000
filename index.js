var katzDeliLine = []

function takeANumber(lineArray, name) {
  lineArray.push(name)
  var position = lineArray.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var nextUp = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${nextUp}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length>0) {
    var line = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length-1; i++) {
      line += `${i+1}. ${katzDeliLine[i]}, `
    }
    line += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
    return line
  } else {
    return "The line is currently empty."
  }
  
}