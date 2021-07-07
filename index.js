
var katzDeli = [ ]
var otherDeli = ["Steven", "Blake", "Avi"]

var takeANumber = function(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var numberInLine = katzDeliLine.indexOf(newName) + 1
  var phrase = "Welcome, " + newName + ". You are number " + numberInLine + " in line."
  return phrase
}

var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return "There is nobody waiting to be served!"
  } else {
    var phrase1 = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
    return phrase1
    }
}

var currentLine = function(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  }
}

