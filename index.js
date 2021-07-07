function takeANumber(lineOfPeople, newPerson){
  lineOfPeople.push(newPerson);
return `Welcome, ${newPerson}. You are number ${lineOfPeople.length} in line.`;
}
function  nowServing(lineOfPeople){
  if(lineOfPeople.length === 0){
    return 'There is nobody waiting to be served!';
    }
  else if(lineOfPeople !== []){
     return 'Currently serving ' + lineOfPeople.shift() +'.';
  } 
}
function currentLine(lineOfPeople){
  if(lineOfPeople.length === 0){
    return 'The line is currently empty.';
  }
  var newLine = 'The line is currently: ';
  var newArray = [];
  for(let i = 0; i < lineOfPeople.length; i++){
    if(lineOfPeople.length > 0){
      
      newArray.push((i + 1) + '. '  +  (lineOfPeople[i]));
    }
  }
  
  return newLine + newArray.join(', ');
}


