function takeANumber(currentLine, name){
  currentLine.push(`${name}`)
  return (`Welcome, ${name}. You are number ${currentLine.length} in line.`)
}

function nowServing(currentLine){
  if(currentLine.length) {
    return `Currently serving ${currentLine.shift()}.`
  } else {return "There is nobody waiting to be served!"}
}


function currentLine(line){
  let lineString = [];
  let i = 0;
  while (i < line.length){
    lineString.push([i+1] + '.' + line[i])
  }
  if(!line.length) {
    return ("The line is currently empty.")
  } else {
    return('The line is currently:' + lineString);
  }
}
