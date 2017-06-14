var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ` + katzDeliLine.length + " in line."
}

function nowServing(katzDeli) {
 if (katzDeli.length > 0) {
  var current = katzDeli[0]
  katzDeli.shift()
  return "Currently serving " + current + "."
 }
 else {
   return "There is nobody waiting to be served!"
 }
}

function currentLine(katzDeli) {
  var line = "The line is currently:"
  var place = 1
  if (katzDeli.length > 0) {
    for (var i = 0; i <= katzDeli.length - 1; i++) {
      var line = line + " " + place + ". " + katzDeli[i] + ","
      place++
    }
    return line.slice(0, -1)
  }
  else {
    return "The line is currently empty."
  }
}
