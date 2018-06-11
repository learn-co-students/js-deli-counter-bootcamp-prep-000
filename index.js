var katzDeliLine = [];
function takeANumber(katzDeliLine, currentName){
  katzDeliLine.push(currentName);
  return(`Welcome, ${currentName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  
 if (katzDeliLine.length === 0){
   return ('There is nobody waiting to be served!')
 }
 else {
   for (var i = 0; i < katzDeliLine.length; i++){
     return (`Currently serving ${katzDeliLine[0]}.`)
    
 
   }
    katzDeliLine.shift();
}
} 
  

  
  
