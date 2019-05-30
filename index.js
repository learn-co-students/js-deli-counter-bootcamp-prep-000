var katzDeliLine = [];

function takeANumber (katzDeliLine, name){
  var position = katzDeliLine.length+1
  katzDeliLine.push(name)
return "Welcome, " + name +". You are number "+ position +" in line."

 }
 
function nowServing (deliLine){
var name;

 if(deliLine.length == 0){
  return "There is nobody waiting to be served!"
  }

 name = deliLine.shift()
return "Currently serving "+ name + "."
}

function currentLine (katzDeliLine){
  if(katzDeliLine == 0){
    return "The line is currently empty."
  }
  var String = `The line is currently: 1. ${katzDeliLine[0]}`
  
  for(var i = 1; i < katzDeliLine.length; i++){
    String += `, ${i+1}. ${katzDeliLine[i]}`
  }
 return String 
}