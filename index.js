function takeANumber (deliLine, newName) {
  
  deliLine.push(newName);
  
  return `Welcome, ${newName}. You are number ${deliLine.length} in line.`;
  
}


function nowServing (deliLine) {
  
  var messageToBeReturned;
  
   if (deliLine.length === 0) {
    
     messageToBeReturned = "There is nobody waiting to be served!";
    
  } else {
    
    messageToBeReturned = `Currently serving ${deliLine.shift()}.`;
    
  }
  
  return messageToBeReturned;
  
}


function currentLine(deliLine) {
  
  var lineToReturn;
  var pattern = [];
  
  for (let i = 0; i < deliLine.length; i++) {
    
    pattern.push(` ${i+ 1}. ${deliLine[i]}`);
    
  }
  
  if (deliLine.length === 0) {
   
   lineToReturn = "The line is currently empty.";
    
  } else {
    
    lineToReturn = `The line is currently:${pattern}`;
  
  }
  
  return lineToReturn;
  
}