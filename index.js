var katzDeliLine = []
function takeANumber (katzDeliLine, name) {
  var katzDeli = []
  katzDeliLine.push(name)
    return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {return "Currently serving " + katzDeliLine.shift(name) + "."}
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {var current = []
    var i = 0
    while(i < katzDeliLine.length) {
      current.push(` ${i + 1}. ` + katzDeliLine[i])
      i++
    }
    return "The line is currently:" + current
}
}
