function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  var string = "Welcome, " + name + ". You are number " + position + " in line."
  return string
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
  var name = katzDeliLine.shift()
  var string = "Currently serving " + name + "."
  return string
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  
  if(katzDeliLine.length > 0){
  var line = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++){
    line = line + (i + 1) + ". " + katzDeliLine[i] + ", "
  }
  line = line.slice(0, line.length - 2)
  return line
  }
  else{
    return "The line is currently empty."
  }
}




