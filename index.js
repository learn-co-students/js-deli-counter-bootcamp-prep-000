var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var n 
  if (katzDeliLine.length > 0) {
    n = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving "+n+"."
  }
}

else {
  return "There is nobody waiting to be served!"
}

 function currentLine(line){
   var a="1. "+line[0]
   var i = 1
   if(line.length===0){
     return "The line is currently empty!"
   }
 }
 while(i<line.length){
     a=a+", "+(i+1)+". "+line[i]
     i++
   }
   return "The line is currently: "+a
 
 }


 