var katzDeliLine = [];

function takeANumber(katzDeliLine, newname){
  katzDeliLine.push(newname);
  var number = katzDeliLine.indexOf(newname)+1
  return "Welcome, "+ newname +". You are number "+ number + " in line."
}

function nowServing(katzDeliLine){
  var name= katzDeliLine.shift()
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving "+ name +"."
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  var line = [];
  for(var i=0;i<katzDeliLine.length;i++){
    line.push([i+1]+". "+katzDeliLine[i])
  }
  return "The line is currently: "+line.join(", ")
}