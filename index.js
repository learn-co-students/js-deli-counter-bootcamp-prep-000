function takeANumber(deliLine, name){
  var place=[deliLine.length +1];
  deliLine.push(`${name}`);
  return `Welcome, ${deliLine.slice(-1) [0]}. You are number ${place} in line.`;
}

function nowServing (deliLine){
  while(deliLine.length>0)
  return `Currently serving ${deliLine.shift()}.`;
  
  if(deliLine.length===0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(deliLine){
  var response=[];
  for(var i=0; deliLine.length>i; i++){
    response.push(` ${i+1}. ${deliLine[i]}`);
  }
  if(deliLine.length===0){
    return "The line is currently empty.";
  }
  else
  return `The line is currently:` + response;
}
