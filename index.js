function takeANumber(currentLineArray, newName){
  currentLineArray.push(newName);
  return `Welcome, ${newName}. You are number ${currentLineArray.length} in line.`;
}

function nowServing(currentLineArray){
  if(currentLineArray.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${currentLineArray.shift()}.`;
    
  }
}

function currentLine(currentLineArray){
  var str = '';
  var array = [];
  
  if (currentLineArray.length === 0) {
    return 'The line is currently empty.';
  }
  
  else {
    for (var i = 0; i < currentLineArray.length; i++){
    array.push(`${i+1}. ${currentLineArray[i]}`);
      }
    str = array.join(', ');
    return `The line is currently: ${str}`;
  }
  
}
