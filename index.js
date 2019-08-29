function takeANumber(katzDeliLine,name) {
  var num = katzDeliLine.length + 1 
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + num + " in line."
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
  return "Currently serving " + katzDeliLine.shift()  +"."
  }
  else
  return "There is nobody waiting to be served!"
}
function currentLine(katzDeliLine) {
  var line = "The line is currently"
  var num = 0
  if (katzDeliLine.length > 0) {
    line += ": "
    for (var i = 0; i < katzDeliLine.length; i++) {
      num = i + 1
      if (i===0) {
        line += num + ". " + katzDeliLine[i]
      }
      else
      {
        line += ", " + num + ". " + katzDeliLine[i]
      }
    }
  }
  else
  {
    line += " empty."
  }
  return line
}