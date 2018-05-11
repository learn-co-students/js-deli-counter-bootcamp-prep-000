function takeANumber (line, newPerson){
  //Adds a new person to the line, welcomes them, and tells them their number.
  
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine (line) {
  var lineString = "The line is currently: ";
  if(line.length === 0){
    return "The line is currently empty.";
  }
  
  else{
    for (let i = 1; i <= line.length; i++){
      if (i === 1){
        lineString = lineString + `${i}. ${line[i-1]}`;
      }
      else {
      lineString = lineString + `, ${i}. ${line[i-1]}`;
      }
    }  
  }
  
  return lineString;
}