function takeANumber (PeopleCount, FName){
  PeopleCount.push (FName);
  var ReturnLine = "Welcome, " + FName + ". You are number " + PeopleCount.length + " in line.";
  return (ReturnLine);
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length > 1){
   var BeingServed = katzDeliLine[0];
   katzDeliLine.shift();
   return ("Currently serving " + BeingServed + ".");
  }
  return ("There is nobody waiting to be served!");
}

function currentLine (currentLine){
  
  if (currentLine.length === 0){
   return "The line is currently empty.";
  } 
  
  var CurrentLineString = "The line is currently: ";
  var i;
  
  for (i=0; i<currentLine.length; i++){
    CurrentLineString = CurrentLineString + (i+1) + ". " + currentLine[i];
    if ((i+1) < currentLine.length){
      CurrentLineString = CurrentLineString + ", ";
    }
  }
  return (CurrentLineString);
}
