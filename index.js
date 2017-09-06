var katzDeli=[]
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  var n=katzDeliLine.length
  var string="Welcome, "+ newPerson+ ". You are number "+ n.toString() + " in line."
  return(string)
}

 function nowServing(katzDeliLine){
   if (katzDeliLine.length===0){
     return("There is nobody waiting to be served!")
   }else{
     var person=katzDeliLine.shift()
     var string="Currently serving "+person+"."
     return(string)
   }
 }

 function currentLine(katzDeliLine){
   if (katzDeliLine.length===0){
     return("The line is currently empty.")
   }else{
     var string=""
     for(var i=0; i<katzDeliLine.length; i++){
       var n=i+1
       if (n>1) {string=string+", "}
       string=string+ n.toString() +". " +katzDeliLine[i]
     }
     return("The line is currently: "+ string)
   }
 }
