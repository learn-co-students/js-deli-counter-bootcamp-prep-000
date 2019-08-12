function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return `There is nobody waiting to be served!`
  } else { 
    var userName = katzDeliLine.shift()
    return `Currently serving ${userName}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return `The line is currently empty.`
  } else {
    for (let i=1; i-1<katzDeliLine.length; i++) {
      var newArray = []
      newArray.push(`${i}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${newArray}`
  }
}