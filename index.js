
function takeANumber(line, name){
line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}
 function nowServing(katzDeliLine){
   
    if ( katzDeliLine.length === 0){
     
     return "There is nobody waiting to be served!";
  
   } else {
     
   
   return  `Currently serving ${katzDeliLine.shift(0)}.`;
   
   }
   // katzDeliLine.slice(1);
   }
   
  function currentLine(katzDeliLine){
    //line.push(line.length)
    //return (line.toString())
    if (katzDeliLine.length === 0){
      return "The line is currently empty." }
    //} else {
    //return ("The line is currently: " + katzDeliLine[]);
  
  for (var i = 0; i < katzDeliLine.length; i++  ){
    return `The line is currently: ${[i]}. ${katzDeliLine[i]}, ${[i+1]}. ${katzDeliLine[i+1]}, ${[i++]}. ${katzDeliLine[i++]}.`
    }
  }
  
  
  
  
  
  
  
  
  