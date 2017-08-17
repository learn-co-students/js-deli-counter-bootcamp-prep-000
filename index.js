var katzDeli = [];

function takeANumber(currentLineOfPeople, name){
  // var positionInLine = currentLineOfPeople.length + 1
  // currentLineOfPeople.push(`Welcome, ${name}. You are number ${positionInLine} in line.`)
  // return positionInLine;
  currentLineOfPeople.push(name);
  return `Welcome, ${name}. You are number ${currentLineOfPeople.length} in line.`;
}
function nowServing(currentLineOfPeople){
  if(currentLineOfPeople.length === 0){
    return "There is nobody waiting to be served!";
  }
  var person = currentLineOfPeople.shift();
  return `Currently serving ${person}.`;
}

function currentLine(currentLineOfPeople){
  if(currentLineOfPeople.length === 0){
    return "The line is currently empty.";
  }
  else{
    var string = "The line is currently: ";
    for(let i = 0; i < currentLineOfPeople.length; i++){
      if(i < currentLineOfPeople.length -1){
        string = string + `${i+1}. ${currentLineOfPeople[i]}, `
      }
      else{
        string = string + `${i+1}. ${currentLineOfPeople[i]}`
      }
    }
    return string;
  }
}
