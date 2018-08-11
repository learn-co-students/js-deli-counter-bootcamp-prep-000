function takeANumber(currentLine, name){
  currentLine.push(name);
  let position = currentLine.length;
  return (`Welcome, ${name}. You are number ${position} in line.`)
}

function nowServing(currentLine){
  if (currentLine.length > 0 )
   return(`Currently serving ${currentLine.shift()}.`)
  else
   return ("There is nobody waiting to be served!");
}

function currentLine(currentLine){
  let newCurrentLine = "The line is currently:";
  if (currentLine.length > 0){
    for (let i = 0; i < currentLine.length; i ++){
     newCurrentLine = newCurrentLine.concat(` ${i+1}. ${currentLine[i]}${i === currentLine.length-1?'':','}`); 
    }
    return newCurrentLine;
  } else {
    return ("The line is currently empty.")
  }
  
}