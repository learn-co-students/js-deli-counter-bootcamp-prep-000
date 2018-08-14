var DeliLine=[]
function takeANumber(DeliLine,newPerson){
  DeliLine.push(newPerson)
  return "Welcome, "+newPerson+". You are number "+DeliLine.length+" in line."
}
function nowServing(DeliLine){
 
  if(DeliLine.length===0){
    return "There is nobody waiting to be served!"
  }else{
   return "Currently serving "+DeliLine.shift()+"."
}
}
function currentLine(DeliLine){
  var arr=[]
  var i=0
  while(i<DeliLine.length){
  arr.push(" "+(i+1)+". "+DeliLine[i])
  i++
  }
  if(DeliLine.length===0){
    return "The line is currently empty."
  }
  return "The line is currently:"+arr
}