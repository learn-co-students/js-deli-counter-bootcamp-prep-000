var katzDeli=[]
var newName
var katzDeliLine=[]

function takeANumber(katzDeliLine,newName){
  
    katzDeliLine.push(newName)
    return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
     return "There is nobody waiting to be served!"
}
else{
  return `Currently serving ${katzDeliLine.shift()}.`
}

}

function currentLine(katzDeliLine){
  var i
  var newArray=[]
  if(!katzDeliLine.length){
        return "The line is currently empty."
  }
  else{
    
  for(i=0;i<katzDeliLine.length;i++){
    newArray[i]= ` ${i+1}. ${katzDeliLine[i]}`
    newArray.join()
  }
  return "The line is currently:"+ newArray
  } 
}