function takeANumber(katzDeliLine,newname){
  var place = katzDeliLine.length+1
  katzDeliLine.push(newname)
  
  return "Welcome, " + newname +". You are number "       + place +" in line.";
 
}

function nowServing(deliLine){
  
 if(deliLine.length === 0){
   return "There is nobody waiting to be served!"
 }
 var name;
 name = deliLine.shift()
 return "Currently serving " + name +"."
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
  return "The line is currently empty." 
  }
  
  var line = `The line is currently: 1. ${katzDeliLine[0]}`

  for(let i = 1; i<katzDeliLine.length;i++){
  line += `, ${i+1}. ${katzDeliLine[i]}`
}
return line
 
}