
function takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
  
}



  
function nowServing(katzDeliLine){
  if (katzDeliLine.length >0){
   return `Currently serving ${katzDeliLine.shift()}.`;}
  
  else{
  return "There is nobody waiting to be served!";
  
   }
   

  }

function currentLine(katzDeliLine){
  var output = [];
if (katzDeliLine.length > 0) {
      for(var i = 0; i < katzDeliLine.length; i++) {
        output += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
      output = output.slice(0, output.length - 2);
      return "The line is currently: " + output;
    } else {
        return "The line is currently empty.";
    }
}

  

  

