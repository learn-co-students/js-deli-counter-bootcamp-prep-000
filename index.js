function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.` 
}

function nowServing(currentLine){
  if(currentLine.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${currentLine.shift()}.` 
  }
}

function currentLine(currentLine) {
  var empty = []
  if (currentLine.length === 0) {
    return `The line is currently empty.`
  }
  else {
    for(let i = 1; i < currentLine.length + 1; i++) {
      if(i === 1) {
        empty.push(`${i}. ${currentLine[i-1]}`);
      }
      else {
        empty.push(` ${i}. ${currentLine[i-1]}`);
      }
    }
  }
  return `The line is currently: ${empty}`;
}