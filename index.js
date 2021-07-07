function takeANumber(line, name){
  if (line === 0) {
    line.unshift(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
  } else {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
  }
}


function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

/*
function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  const linelist = 0
  for (var i = 0; i < line.length; i++) {
    linelist.push(`${i+1}. ${line[i]}`);
  }
  return `The line is currently: ${linelist.join(", ")}`;
}

*/

function currentLine(line) {
  if ( line.length === 0) {
    return 'The line is currently empty.';
  }
  
  const linelist = []
  for (var i = 0; i < line.length; i++) {
    linelist.push(`${i+1}. ${line[i]}`);
  }
  return `The line is currently: ${linelist.join(', ')}`
}

/*
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } 
  const nosAndNoms = [];
  
  for (var i = 0 ; katzDeliLine.length > i; i++){
  nosAndNoms.push(`${i+1}. ${katzDeliLine[i]}`);
  }
   return `The line is currently: ${nosAndNoms.join(", ")}` 
  
  
}
*/