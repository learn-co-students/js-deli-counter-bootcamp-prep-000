function takeANumber(katzDeliLine, newPerson) {
  
 
 if (katzDeliLine.push(newPerson)) {
   
   let position = katzDeliLine.indexOf(newPerson);
   
   return ("Welcome, " + newPerson + ". You are number " + (position + 1) + " in line.");
 }

} 




function nowServing(katzDeliLine) {
  
  if (0 < katzDeliLine.length) {
    return ("Currently serving " + katzDeliLine.shift() + ".");
    
  } else {
    
    return ("There is nobody waiting to be served!")
  }
}




function currentLine(katzDeliLine) {
  
  let str = "The line is currently: "
  
   if(katzDeliLine.length === 0) {
     
     return "The line is currently empty."
   }
  
  for(let i = 0; i < katzDeliLine.length; i++) {
    
       str += `${i + 1 + "."} ${katzDeliLine[i]}, `;
   }
   
   return str.slice(0, -2);
}





  






