function takeANumber(currentLine, person){
  currentLine.push(person);
  return "Welcome, " + person + ". You are number " + currentLine.length + " in line.";
}


function currentLine(line){
 if(line.length===0){
   return "The line is currently empty.";
 }
 else{
   var result = "The line is currently:";
   for(var i=0;i<line.length;i++){
     result = result + " " + (i+1) + ". " + line[i] + ",";
   }
 }
 return result.slice(0,-1);
}

function nowServing(currentLine){
  if(currentLine.length===0){
    return "There is nobody waiting to be served!";
  }
  else {
    var currentCustomer = currentLine.shift();
    return "Currently serving " + currentCustomer + ".";
  }
}
