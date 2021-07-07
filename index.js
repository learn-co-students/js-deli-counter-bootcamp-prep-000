 function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
 }
 function nowServing(katzDeliLine, name){
   while (katzDeliLine.length > 0) {
     return ("Currently serving " + katzDeliLine.shift() + ".")
   }
 return "There is nobody waiting to be served!"
   }

function currentLine(katzDeliLine) {
    if (katzDeliLine.length >0) {
     var newArray = [];
     var i = 0;
     while (i < katzDeliLine.length) {
      newArray.push(parseInt(i+1) + ". " + katzDeliLine[i]);
      i++;
     }
     return "The line is currently: " + newArray.join(', ')
         } else {
      return "The line is currently empty."
    }
    
}