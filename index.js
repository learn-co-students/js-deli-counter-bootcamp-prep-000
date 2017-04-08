function takeANumber(katzDeliLine,name){
    katzDeliLine.push(name)
    return "Welcome, " + name + "." + " You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else
  {
  var newCust = katzDeliLine[0]
  katzDeliLine.shift()
  return "Currently serving "  + newCust + "."
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  else
  {
  var announce = "The line is currently: "
  var red = line.length
  for(var i=0; i<red; i++) {
    announce += ((i+1) + ". " + line[i] + ", ")
  }
    announce = announce.slice(0, -2)
    return announce
  }
}
