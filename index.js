function takeANumber(line, name){
  var katzDeli = [];
  line.push(name)
}

function takeANumber(deliLine,name){
  var katzDeli = [];
  deliLine.push(name)
  
  return "Welcome, " + name + ". You are number " + deliLine.length + " in line."
}

function nowServing (deliLine){
var name;
if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
}

name = deliLine.shift()
return "Currently serving "+ name + "."
}


function currentLine(deliLine){
  if(deliLine.length === 0){
  return "The line is currently empty."
  } else {
   var myString = `The line is currently: 1. ${deliLine[0]}`

 for(let i = 1; i<deliLine.length;i++){
 myString += `, ${i+1}. ${deliLine[i]}`
}
return myString
  }
}


  