 var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(anArray) {
  if (anArray.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${anArray.shift()}.`
  }
}

function currentLine(anArray) {
  if(anArray.length === 0) {
    return "The line is currently empty."
  } else {
    var aString = "The line is currently: "
    var i = 0
    do {
      aString = aString + `${i+1}. ${anArray[i]}`
      if (i !== anArray.length - 1) {
        aString = aString + ", "
      }
      i++
      } while (i !== anArray.length)
    return aString
  }
}
