function takeANumber(currentLine, name){
  currentLine.push(name);
  let place = currentLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${place} in line.`
}

function currentLine(line){
  let cur = []
  if(line.length === 0){
    return 'The line is currently empty.'
  }
  for(var i = 0; i < line.length; i++){
    cur.push(' ' + Number(i+1) + '. ' + line[i]);
  }
  return `The line is currently:${cur.toString()}`;
  
}

function nowServing(currentLine){
  if(currentLine.length > 0){
    let name = currentLine[0];
    currentLine.shift();
    
    return `Currently serving ${name}.`;
    
  }else{
    return "There is nobody waiting to be served!"
  }
}

