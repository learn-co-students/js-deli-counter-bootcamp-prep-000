function takeANumber(katzDeliLine, name){
  var number = katzDeliLine.length + 1
  katzDeliLine.push(name)
  var welcome = "Welcome, "
  var middle = ". You are number "
  var ending = " in line."
  return welcome + name + middle + number + ending
}

function nowServing(katzDeliLine){
  var number = katzDeliLine.length
    if (number < 2) {
      return "There is nobody waiting to be served!"
      } else {
      return "Currently serving " + katzDeliLine.shift() +"."
      return katzDeliLine
      } 
}

function currentLine(katzDeliLine){
  var j = katzDeliLine.length
  if (j < 1) {
    return "The line is currently empty."
  } else {
    var k = 1
    var i = 0
    var newLine = []
    while (k<j)
      newLine[i] = k + ". " + katzDeliLine[i]
      i++
      k++
    }
return "The line is currently: " + newLine
}