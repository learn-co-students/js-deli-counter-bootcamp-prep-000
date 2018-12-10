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
  if(currentLine){
    return currentLine[0];
  }else{
    return 'The line is currently empty.'
  }
}

