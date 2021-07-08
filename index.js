function takeANumber(currentLine, newPersonName){
  currentLine.push(newPersonName);
  
  return "Welcome, " + newPersonName + ". You are number " + currentLine.length + " in line."
}

function nowServing(currentLine){
  if(currentLine.length > 1){
    return "Currently serving " + currentLine.shift() + ".";
  }
  else{
    return "There is nobody waiting to be served!"  
  }
}

function currentLine(currentLine){
  var line = "The line is currently: ";
  if(currentLine.length > 0){
    for(var i = 0; i < currentLine.length; i++){
      if(i !== currentLine.length-1){
        line += i+1 + ". " + currentLine[i] + ", ";
      }
      else{
        line += i+1 + ". " + currentLine[i];
      }
    }
  }
  else{
    return "The line is currently empty.";
  }
  
  return line;
  
}