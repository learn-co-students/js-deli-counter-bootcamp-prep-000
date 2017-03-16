var katzDeli = [];
var i = 0
function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length <= 2){
    katzDeliLine.push(name)
    i++
    return "Welcome, " + katzDeliLine[i-1] + ". You are number " + (i) + " in line."
  } else {
    katzDeliLine.push(name)
    i = katzDeliLine.length
    return "Welcome, " + name + ". You are number " + i + " in line."
  }
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  } else {
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }
}

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty."
  } else {
    var counter = 1
    return "The line is currently: " + counter + ". " + line[0] + ", 2. " + line[1] + ", 3. " + line[2]
  }
}
