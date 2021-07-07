var katzDeliLine = [];

function takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if(currentLine.length > 0) {
    return `Currently serving ${currentLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(currentLine){
  if(currentLine.length > 0){
    var newLine = [];
    
    newLine.push(`${1}. ${currentLine[0]}`);
    for(var i = 1; i < currentLine.length; i++){
      newLine.push(` ${i+1}. ${currentLine[i]}`);
    }
    
    return `The line is currently: ${newLine}`; 
  } else {
    return "The line is currently empty.";
  }
}