var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var greeting = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  return greeting
}

function nowServing(array) {
  if (array.length > 0) {
    var announcement = 'Currently serving ' + array[0] +"."
    array.shift()
    return announcement
  }
  if (array.length === 0){
    var line = "There is nobody waiting to be served!"
    return line
  }
}
var line = []
function currentLine(array) {
  let i = 0
  while (i < array.length) {
    line.push(' '+ [i+1] + '. ' + array[i])
    i++
  }
  if (array.length === 0) {
    var noone = 'The line is currently empty.'
    return noone
  } else {
    return("The line is currently:" + line)
  }
}
