var katzDeli = []
function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number " + (katzDeli.indexOf(name) + 1) + " in line."
}
function nowServing(katzDeli) {
  var message = " "
  if (katzDeli.length === 0) {
    message = "There is nobody waiting to be served!"
  } else {
    message = "Currently serving " + katzDeli[0] + "."
    katzDeli.shift()
  }
  return message
}
function currentLine(katzDeliLine) {
  var message = " "
  var n=0
  if (katzDeliLine.length === 0) {
  message = "The line is currently empty."
} else {
    while (katzDeliLine.length > n) {
      if (n ===0) {
      katzDeliLine[n] = (n+1) + ". " + katzDeliLine[n]
    } else {
      katzDeliLine[n] = " " + (n+1) + ". " + katzDeliLine[n]
      }
      message = "The line is currently: " + katzDeliLine
      n++
    }
  }
  return message
}
