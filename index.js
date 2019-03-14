function takeANumber(katzDeliLine, n){
  katzDeliLine.push(`${n}`);
return `Welcome, ${n}. You are number ${(katzDeliLine.length)} in line.`;
}




function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } 
   else {
     var first = katzDeliLine[0];
    katzDeliLine.shift() 
     return `Currently serving ${first}.`
      } 
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } 
  
  
}