function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
 }


 function nowServing(katzDeliLine){
   if (!katzDeliLine.length) {
     return "There is nobody waiting to be served!";
   } else {
     return `Currently serving ${katzDeliLine.shift()}.`;
   }
 }

 function currentLine(line){
   var numberedNames = []

   if (!line.length) {
     return "The line is currently empty.";
   } else {
     line.forEach(function(name, index){
       numberedNames.push(`${index+1}. ${name}`)
     })
   }
   return `The line is currently: ${numberedNames.join(", ")}`
 }
