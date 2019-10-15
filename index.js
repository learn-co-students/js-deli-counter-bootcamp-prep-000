function takeANumber(katzDeliLine, newPersonsName){
  katzDeliLine.push(newPersonsName)
  return `Welcome, ${newPersonsName}. You are number ${katzDeliLine.length} in line.`
}



function nowServing(katzDeliLine){
if (katzDeliLine.length>0)
{ var a=katzDeliLine.shift();
return "Currently serving "+a+"."
}
 else{
return "There is nobody waiting to be served!"   
 } 
}



function currentLine(katzDeliLine){
 if(katzDeliLine.length>0){
   var b= ""
 for (var i=1;i<katzDeliLine.length+1;i++){
   
   
   b= b + " "+i+'. '+katzDeliLine[i-1]+","
   
   
} return "The line is currently:"+ b.substring(0,b.length-1);
 }
 else{
   return "The line is currently empty."
 }
}





