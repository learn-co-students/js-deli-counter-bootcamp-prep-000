var katzDeli =[]

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
    return ("Welcome, "+name+"."+" You are number "+ (katzDeliLine.length)+ " in line.")
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length){
    return "Currently serving "+katzDeliLine.shift()+"."
  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
 if (line.length){
   var array=[]
   for(var i=0;i<line.length;i++){
     array.push(" "+(i+1)+". "+line[i])
   }
   return "The line is currently:"+array
 }else {
   return 'The line is currently empty.'
 }
}
