var katzDeli = []

function takeANumber (katzDeliLine, name) {
  var katzDeli = katzDeliLine.push(name)
  const number = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + number + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
  else {
    var name = katzDeliLine[0]
    katzDeliLine.splice(0, 1)
    return "Currently serving " + name + "."
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  else {
    const currList = []
    let i = 0
    while (i < katzDeliLine.length) {
      currList.push(" " + (i+1) + ". " + katzDeliLine[i])
      i++
    }
    return "The line is currently:" + currList
  }
}